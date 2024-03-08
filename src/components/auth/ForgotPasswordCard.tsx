import { useState, useEffect } from "react";
import "./ForgotPasswordCard.css";
import { ForgotPasswordCardProps } from "../../interfaces/ui/forgotPasswordCardProps";
import { useAuth } from "../../hooks/useAuth";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const ForgotPasswordCard: React.FC<ForgotPasswordCardProps> = ({
  onCancel,
}) => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const navigate = useNavigate();
  const {
    resetPassword,
    changePassword,
    errors: forgotErrors,
    isEmailValid,
  } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (isEmailValid && currentStep === 1) {
      setCurrentStep(currentStep + 1);
    }
  }, [isEmailValid, currentStep]);

  // TODO : add type for data
  const handleNext = async (data: any) => {
    if (currentStep === 1) await resetPassword(data.email);
    else if (currentStep === 2) setCurrentStep(currentStep + 1);
    else if (currentStep === 3) {
      await changePassword(data.email, data.code, data.newPassword);
      if (forgotErrors.length === 0) {
        navigate("/auth");
        window.location.reload();
      }
    }
  };

  return (
    <div className="card-container">
      <span className="error-message">
        {forgotErrors.map((forgotErrors, index) => (
          <p key={index}>{forgotErrors}</p>
        ))}
      </span>
      <h2 className="text-xl font-bold mb-4">Password Reset</h2>
      {errors.email && <span className="error-message">Email is required</span>}
      <ol className="space-y-4">
        {currentStep === 1 && (
          <li className="step">Step 1: Enter your email</li>
        )}
        {currentStep === 2 && (
          <li className="step">
            Step 2: Enter the verification code sent to your email
          </li>
        )}
        {currentStep === 3 && (
          <li className="step">
            Step 3: Choose a new password for your account
          </li>
        )}
      </ol>
      <div className="button-container">
        <form onSubmit={handleSubmit(handleNext)}>
          {currentStep === 1 && (
            <>
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-gray-100 border-2 border-gray-200 p-2 rounded-md mb-4"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "Entered value does not match email format",
                  },
                })}
              />
              <button
                type="submit"
                style={{
                  backgroundColor: "blue",
                  color: "white",
                  padding: "10px",
                  borderRadius: "5px",
                }}
              >
                Next
              </button>
            </>
          )}
          {currentStep === 2 && (
            <>
              <input
                type="text"
                placeholder="Enter the verification code sent to your email"
                {...register("code", {
                  required: "Verification code is required",
                })}
                style={{
                  marginBottom: "10px",
                  border: "2px solid #ccc",
                  borderRadius: "4px",
                  padding: "10px",
                  width: "100%",
                  boxSizing: "border-box",
                }}
              />
              <button
                type="submit"
                style={{
                  backgroundColor: "blue",
                  color: "white",
                  padding: "10px",
                  borderRadius: "5px",
                }}
              >
                Next
              </button>
            </>
          )}
          {currentStep === 3 && (
            <>
              <input
                {...register("newPassword", {
                  required: "New password is required",
                })}
                type="password"
                placeholder="Enter your new password"
                style={{
                  marginBottom: "10px",
                  border: "2px solid #ccc",
                  borderRadius: "4px",
                  padding: "10px",
                  width: "100%",
                  boxSizing: "border-box",
                }}
              />

              <button
                type="submit"
                onClick={handleNext}
                style={{
                  backgroundColor: "blue",
                  color: "white",
                  padding: "10px",
                  borderRadius: "5px",
                }}
              >
                Reset Password
              </button>
            </>
          )}
          <button
            onClick={onCancel}
            style={{
              backgroundColor: "red",
              color: "white",
              padding: "10px",
              borderRadius: "5px",
            }}
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPasswordCard;
