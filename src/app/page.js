"use client";
import { useState } from "react";
import StepOne from "./_features/StepOne";
import StepTwo from "./_features/StepTwo";
import "./index.css";
import StepThree from "./_features/StepThree";
export default function Home() {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  return (
    <div className="form-container">
      {step === 1 && <StepOne nextStep={nextStep} />}
      {step === 2 && <StepTwo nextStep={nextStep} prevStep={prevStep} />}
      {step === 3 && <StepThree nextStep={nextStep} prevStep={prevStep} />}
      {step === 4 && <Done nextStep={nextStep} prevStep={prevStep} />}
    </div>
  );
}
