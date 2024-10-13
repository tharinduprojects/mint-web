
'use client'
const WeLikeToHere = ({ data }) => {

  return (
    <div className="pt-24 pb-10 bg-[#CDE9FD]">
      <div className="container">
        <div className="mb-14">
          <h2 className="text-3xl md:text-5xl font-semibold text-center">{data.Title}</h2>
          <p className="text-center">{data.Description}</p>
        </div>
        <div className="pb-16">
          <div>
            {
              data.contactRow?.map((item, i) => (
                <div>
                  <h4 className="mb-5">{item.title}</h4>
                  <div className="grid grid-cols-4 gap-5 mb-14">
                    {
                      item.item.map((item, i) => (
                        <div key={i} className="bg-white p-10 rounded-lg">
                          <img className="mb-5" src={item.icon?.data?.attributes?.url} alt="" />
                          <h5 className="font-semibold">{item.title}</h5>
                          <p className="font-light text-sm mb-2">{item.description}</p>
                          {
                            item.address && <span>{item.address}</span>
                          }
                          {
                            item.email && <span>{item.email}</span>
                          }
                          {
                            item.phoneNo && <span>{item.phoneNo}</span>
                          }
                          <div className="flex gap-2 items-center mt-2">
                            {
                              item.socialItem && item.socialItem.map((item, i) => (
                                <div className="flex gap-2 items-center mt-2">
                                  <a target="blank" href={item.url}>
                                    <img className="w-5" src={item.iconImage?.data?.attributes?.url} alt="" />
                                  </a>
                                </div>
                              ))
                            }
                          </div>
                        </div>
                      ))
                    }

                  </div>
                </div>
              ))
            }
          </div>


        </div>
      </div>
    </div>
  );
}

export default WeLikeToHere;