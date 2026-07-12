import { notFound } from "next/navigation";
import LoanForm from "@/components/forms/LoanForm";
import GstForm from "@/components/forms/GstForm";
import InsuranceForm from "@/components/forms/InsuranceForm";
import ItrForm from "@/components/forms/ItrForm";
import PropertyForm from "@/components/forms/PropertyForm";
import OtherForm from "@/components/forms/OtherForm";

export default async function ServicePage({ params }: { params: Promise<{ category: string }> }) {
  const resolvedParams = await params;
  const categorySlug = resolvedParams.category.toLowerCase();

  const allowedCategories = ["loan", "insurance", "gst", "itr", "property", "other"];
  if (!allowedCategories.includes(categorySlug)) {
    return notFound(); 
  }

  // Yahan humne saare components connect kar diye hain!
  let FormComponent;
  switch (categorySlug) {
    case "loan":
      FormComponent = LoanForm;
      break;
    case "gst":
      FormComponent = GstForm;
      break;
    case "insurance":
      FormComponent = InsuranceForm;
      break;
    case "itr":
      FormComponent = ItrForm;
      break;
    case "property":
      FormComponent = PropertyForm;
      break;
    case "other":
      FormComponent = OtherForm;
      break;
    default:
      FormComponent = OtherForm;
  }

  const displayTitle = categorySlug.toUpperCase();

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Apply for <span className="text-blue-600">{displayTitle}</span> Services
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Neeche di gayi details ko sahi se bharein. Humari team jald hi process shuru karegi.
          </p>
        </div>
        
        {/* Jo category URL me hogi, wahi form yahan khulega */}
        <FormComponent />
        
      </div>
    </div>
  );
}