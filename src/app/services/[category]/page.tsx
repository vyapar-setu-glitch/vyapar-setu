import DynamicForm from "@/components/DynamicForm";
import { notFound } from "next/navigation";

// Yeh function URL se category ka naam nikalega (jaise 'loan' ya 'gst')
export default async function ServicePage({ params }: { params: Promise<{ category: string }> }) {
  const resolvedParams = await params;
  const categorySlug = resolvedParams.category.toLowerCase();

  // Validate karein ki user sahi service par hai
  const allowedCategories = ["loan", "insurance", "gst", "itr", "property", "other"];
  
  if (!allowedCategories.includes(categorySlug)) {
    return notFound(); // Agar koi galat URL daalega toh 404 page dikhega
  }

  // URL wale naam ko thoda sundar banate hain heading ke liye
  const displayTitle = categorySlug.toUpperCase();
  
  // Form component ke liye category format set karein
  let formCategory: "Loan" | "GST" | "ITR" | "Other" = "Other";
  if (categorySlug === "loan") formCategory = "Loan";
  if (categorySlug === "gst") formCategory = "GST";
  if (categorySlug === "itr") formCategory = "ITR";

  return (
    <div className="min-h-screen bg-blue-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Page Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Apply for <span className="text-blue-600">{displayTitle}</span> Services
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Neeche di gayi details ko sahi se bharein aur apne documents upload karein. Humari team jald hi process shuru karegi.
          </p>
        </div>
        
        {/* Humara Master Form Yahan Render Hoga */}
        <DynamicForm 
          serviceName={`${displayTitle} Application`} 
          category={formCategory} 
        />
        
      </div>
    </div>
  );
}