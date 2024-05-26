"use client"

const TrustedCompanies = ({ data: trustedData }) => {

  const baseUrl = process.env.BASE_URL

  return (
    <div className="bg-bgLight py-20">
      <div className="container mx-auto">
        <h2 className="text-center text-2xl font-semibold mb-8">{trustedData.title}</h2>
        <div className="flex justify-between">
          {
            trustedData.logo.data.map((logo) => (
              <img src={baseUrl + logo.attributes.url} alt="" />
            ))
          }
        </div>
      </div>

    </div>
  );
}

export default TrustedCompanies;