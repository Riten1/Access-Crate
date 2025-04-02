
import img2 from "../assets/eSewa-Money-Transfer.jpg";
import img1 from "../assets/Khalti_Digital_Wallet_Logo.png (1).jpg";
import Header from "../components/ui/Header";

export const OurPartners = () => {
  return (
    <div className="flex flex-col gap-12 bg-supporting-bg-dark p-6 md:p-12 lg:px-40 lg:py-20">
      <Header
        title="Our Partners"
        description="These are the partners that are associated with us"
        
      />

      <div className="grid grid-cols-1 place-items-center gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2">
        <div className="w-full rounded-lg">
          <img
            src={img1}
            alt="Khalti"
            className="h-[200px] w-full rounded-lg object-cover"
          />
        </div>
        <div className="w-full">
          <img
            src={img2}
            alt="eSewa"
            className="h-[200px] w-full object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};
