import React from 'react'

const FooterSection = () => {
    const text=[
        {name:["WOMEN","Westernwear","Ethnicwear", "Sports & Activewear","Sleepwear & Lingerie", "Bags,wallets & Clutches", "Footwear","Accessories","Shop By Occasion","Shop By Brand",]}
    ,{name:["MEN","Top Wear","Bottom Wear","Ethnic Wear","Accessories","Sports And Activewear","Footwear","Innerwear And Sleepwear","Bags And Backpacks","Shop By Occasion","Shop By Brand"]}
    ,{name:["KIDS"," Boys Topwear", "Girls Topwear", "Baby Topwear", "Baby Bottomwear", "Girls Bottomwear", "Boys Bottomwear",  "Boys Innerwear And Sleepwear", "Girls Innerwear And Sleepwear", " Baby Innerwear And Sleepwear", " Girls Bags And Backpacks",  "Baby Footwear", " Boys Bags And Backpacks",  "Girls Footwear"," Babies Accessories"," Boys Footwear", "Girls Accessories"," Boys Accessories","Shop By Occasion","Shop By Brands", "Shop By Brand",]}
 ,{name:["HOME"," Bath","Bed","Decor","Kitchenware","Shop By Product","Shop By Brand"]}
,{name:["BEAUTY", " Makeup",  "Mens Fragrances", " Womens Fragrances",  "Shop By Brand"]}
 ,{name:["ABOUT", "About Us", " Greencard",  "Store Locator"," Payment Options"," Investor Relations"]}
,{name:["CUSTOMER", "Track Order","FAQs","Customer Support","Returns & Exchange Policy","Shipping Policy"]}
]
  return (
  <>
  <div className='bg-[#F1FFFF]'>
  <div className='  md:px-12 justify-between flex '>
    {
        text.map((item, index) => {
            return (
                <div key={index}>
                    {
                        item.name.map((resp, index) => {
                            if (index === 0) {
                                return (
                                    <h1 key={index} className=' md:text-xl text-[10px]  text-#474545 font-bold'>{resp}</h1>
                                )
                            }
                            return (
                                <h1  key={index} className=' md:text-xs text-[9px] my-2'>{resp}</h1>
                            )
                        })
                    }
                </div>
            )
        })
    }
   
</div>
 <h1 className='text-center mb-3'>EXPERIENCE PANTALOONS APP</h1>
 <div className='flex  gap-3 justify-center'>
    <img className='w-32' src="https://imagescdn.pantaloons.com/img/app/brands/pantaloons/downloadapp/apple.svg" alt="" />
  <img className='w-32' src="https://imagescdn.pantaloons.com/img/app/brands/pantaloons/downloadapp/google-play.svg" alt="" />
 </div>
 <br />
 <hr /> 
 <br />
 
<div className='px-10'>
<h1> With the consistent change in fashion statement Pantaloons online shopping sites have managed to keep up with the expectations of the customers without any hiccups. Gone are those days when you needed to step out of your house to shop for your favorite outfits from Pantaloons. Online clothes shopping facilities helped us to reach you at your doors and deliver you your chosen outfits on time and with care. 
</h1>


<h1 className='font-[700]'> Best online shopping sites in India for clothes</h1>
<h1>It needs no mention that we house a variety of merchandise abounding in fashionable and latest collections including Men's wear, women's wear, accessories, Kid's wear that would make you redefine your fashion statement and flaunt your unparalleled fashion choices which would make you stand out among the crowd! All you need to do is visit our official website and scroll through thousands of options from a plethora of reputed brands including Home Decor.
</h1>


<h1 className='font-[700]'>Here are some you need to hear about:</h1>


<h1>Smart Men's Clothing</h1>
<h1 className='text-[0.9rem]'>As conveyed before, the options are innumerable. Be it a wedding, an office party or a family get-together, or a dinner date, plan your outfit and choose according to your preferences and we have you deliver your favorite product on time. The options in Men's clothing range from formal shirts, T-shirts, trousers, jeans, kurtas, pajamas, and many more. 
</h1>
<h1 className='text-[0.9rem]'> Formal as well as informal men's wear are available in all styles that are widely acknowledged as fashionable by experts and stylists, including checked, solid-colored, windowpane style, cuffed, buffalo style, or gingham. Couple these with comfortable undergarments to bring out the best in your outfit and slay.
</h1>
<h1 className='text-[0.9rem]'> Our myriad options in kurtas and Sherwanis for men come with attractive colors and the latest style that would boost your celebration mood. Perfection is indeed an attractive thing in itself, and your outfit defines how perfectly you like to present yourself! Browse through our Men's wear collections and order now.
</h1>


<h1  className='font-[700]'>Smart Women's Clothing
</h1>
<h1 className='text-[0.9rem]'>If you are a person for whom buying fashion clothing becomes a mood elevator for you, then you have decided to resort to the right website for yourself. We offer almost all you need to check out before deciding to buy one. There is a plethora of options irrespective of what you are planning to shop for, be it for summer, a date, a party, or a wedding. Collections abound in both traditional and western wear. Varieties include dresses, sarees, lehenga choli, striped dresses, Little Black Dress, off the shoulder, shirt-style, blouson, embroidered and peplum tops, and many more. 
</h1>
<h1 className='text-[0.9rem]'> We also offer branded and quality jeans to team up with tops or kurtas which look smart as trendy fusion wear. Skirts and Palazzos are also good options to choose from. Comfortable regular office wear, as well as inner wear for women, has also caught the attention of customers on our website.
</h1>
<h1 className='text-[0.9rem]'>Apart from clothing, the website is one of the top online shopping sites in India for clothes that offer matching accessories to go with your chosen outfit, be it a trendy heel, or a chandbali to go with your Anarkali.
</h1>


<h1  className='font-[700]'>Smart Kid's wear 
</h1>
<h1 className='text-[0.9rem]'>Special attention and care need to be invested while offering a kid's collection on a particular website that would be comfortable and at the same time delight the little ones with utmost joy and fun. For this, we have several cartoons designed t-shirts, t-shirts painted with their favorite superhero, favorite team jerseys, comfortable cotton t-shirts with playful and lively colors, attractive dresses for your little princess, and many more that would create memories to cherish. 
</h1>


<h1 className='font-[700]'>Benefits of shopping with Pantaloons 
</h1>
<h1 className='text-[0.9rem]'>Online clothes shopping with Pantaloons not only offers customer-friendly as well as budget-friendly picks but also detailed descriptions of the chosen product are displayed right under the outfit encompassing its size, color, material, its brand, and easy return policies. 
</h1>
<h1 className='text-[0.9rem]'>Shop your heart out for the sky's the limit! Visit our online shopping websites where we deliver you at our earliest along with our doorstep facilities. Online clothes shopping at Pantaloons has become more lovable due to the seasonal discounts and special offers allowed to our loving customers.
</h1>


<h1 className='font-[700]' >taited App</h1>
<h1 className='text-[0.9rem]'>Online clothes shopping websites have undoubtedly offered customer-friendly services but we are different concerning some of the most engaging customer-oriented specifications, with the flexibility to choose your payment options through debit, credit, Net banking, or UPI. The detailed, collective charts, high-resolution images, perfect size charts according to body fittings as well as flexible selection process have made our customers feel special about us. Moreover, the easy and convenient return policy is something that has made us one of the top online shopping sites in India. 
</h1>
<h1 className='text-[0.9rem]'>Now shop hassle-free from the comfort of your couch or your office and get your outfits delivered carefully by our delivery agents along with the feature of cash on delivery with our online clothing stores. We also have gift options to satisfy your loved ones during your busy days. Visit our online shopping websites and scroll through our online clothing stores for the latest and most fashionable outfits.
</h1> 
</div>
  </div>
  </>
  )
}

export default FooterSection