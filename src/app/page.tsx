'use client'
import Image from "next/image";
import SvgComponent from './components/AppLogo'; // Adjust the path as needed
import AppLogo from "./components/AppLogo";
import { useEffect } from "react";
import { Globe, Menu, Search } from "lucide-react";
import AvatarComponent from "./components/Avatar";
import Login from "./components/Login";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { categoryData } from "./lib/categories";



export default function Home() {
  
  useEffect(() => {
    // Handle scroll effect for main-header
    const element = document.querySelector('.main-header');
    function handleScroll() {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 3) {
        element?.classList.add('show-item');
      } else {
        element?.classList.remove('show-item');
      }
    }
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    // Load Chatbase chatbot script
    const script = document.createElement('script');
    script.src = "https://www.chatbase.co/embed.min.js";
    script.setAttribute('chatbotId', "J7kcz4k4y69yUG3rMYPzA");
    script.setAttribute('domain', "www.chatbase.co");
    script.defer = true;
    document.body.appendChild(script);

    const configScript = document.createElement('script');
    configScript.innerHTML = `
      window.embeddedChatbotConfig = {
        chatbotId: "J7kcz4k4y69yUG3rMYPzA",
        domain: "www.chatbase.co"
      }
    `;
    document.body.appendChild(configScript);

    return () => {
      document.body.removeChild(script);
      document.body.removeChild(configScript);
    };
  }, []);


  return (
    
    
    <div className="parent-container">
      <div className="main-header border-b-[1px] border-solid pl-24 pr-24 pb-8">
        <div className="flex h-20 items-center justify-between">
          <div>
            <AppLogo /> {/* SVG component added here */}
          </div>
          <div className="primary-header flex gap-6 ml-75">
            <div className="font-medium">Stays</div>
            <div className="text-muted-foreground">Experiences</div>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-sm font-medium">Airbnb your home</div>
            <div className="flex items-center gap-6">
              <Globe className="h-4 w-4" />
              <Login />
            </div>
          </div>
        </div>

        {/* Main search bar */}
        <div className="flex w-full justify-center primary-header">
          <div className="flex w-fit min-w-[75%] justify-between rounded-full border-[1px] border-solid pb-2 pl-8 pt-3 shadow-lg">
            <div>
              <div className="text-sm font-medium">Where</div>
              <div className="text-muted-foreground">Search destinations</div>
            </div>
            <div>
              <div className="text-sm font-medium">Check in</div>
              <div className="text-muted-foreground">Add dates</div>
            </div>
            <div>
              <div className="text-sm font-medium">Check out</div>
              <div className="text-muted-foreground">Add dates</div>
            </div>
            <div>
              <div className="text-sm font-medium">Who</div>
              <div className="text-muted-foreground">Add guests</div>
            </div>
            <div className="h-12 w-12 rounded-full bg-red-500 mr-3 flex justify-center items-center text-white">
              <Search className="h-4 w-4" />
            </div>
          </div>
        </div>

        {/* Secondary search bar */}
        <div className="flex w-full justify-center secondary-header">
          <div className="flex w-fit justify-between rounded-full border-[1px] border-solid pl-8 pt-2 pb-2 hover:shadow-lg gap-12 shadow-md">
            <div className="font-medium">Anywhere</div>
            <div className="font-medium">Any week</div>
            <div className="text-muted-foreground">Add guests</div>
            <div className="h-8 w-8 aspect-square rounded-full bg-red-500 mr-3 flex justify-center items-center text-white">
              <Search className="h-4 w-4" />
            </div>
          </div>
        </div>
      </div>

     {/* Filter Header and Carousel */}
     <div className="filter-header h-20 pl-20 pr-20 border-t border-gray-200"> {/* Added thin grey line */}
        <Carousel className="w-full">
          <CarouselContent className="-ml-1">
            {categoryData.categoryBar.categories.map((category, index) => (
              <CarouselItem key={index} className="pl-1 basis-auto">
                <div className="p-1 hover:text-black"> {/* Added hover effect for text */}
                <Card className="p-4 bg-transparent rounded-lg flex flex-col items-center shadow-none border-0 text-muted-foreground hover:underline hover:text-black">
                  <div 
                    className="h-5 w-5 mb-2 hover:bg-black" // Add hover effect to turn image black
                    style={{ 
                      backgroundColor: 'currentColor',  // Makes background color match text color
                      maskImage: `url(${category.imageUrl})`, // Adds the image as a mask
                      WebkitMaskImage: `url(${category.imageUrl})`, 
                      maskRepeat: 'no-repeat', 
                      maskSize: 'cover', 
                      WebkitMaskRepeat: 'no-repeat',
                      WebkitMaskSize: 'cover',
                      filter: 'grayscale(100%)', // Set grayscale for image
                    }}
                   // Remove grayscale on hover
                  />
                  <span className="text-sm font-semibold">{category.title}</span>
                </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
     

      <div className="content-section grid grid-cols-2 lg:grid-cols-4 ml-20 gap-4">
        <div className="product card mb-10 flex flex-col">
          <img className="w-80 h-80 rounded-2xl object-cover" src="https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEzMTA4OTQ5ODA0MDcwMTE4Mw%3D%3D/original/4f7a276e-9995-4b32-bda6-300de0619b25.png" />
          <span className=" font-medium">Stay in Prince's Purple Rain house</span>
          <span className="text-muted-foreground">Hosted by Wendy and Lisa</span>
          <span className=" font-medium">Coming September</span>
        </div>

        <div className="product card mb-10 flex flex-col">
          <img className="w-80 h-80 rounded-2xl object-cover" src="https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEyNjMyMzc5Mzc2MTc3OTEzMg%3D%3D/original/01819c16-43a1-4aee-9957-9edce6eb8e16.png" />
          <span className="font-medium">Join a living room session with Doja</span>
          <span className="text-muted-foreground">Hosted by Doja Cat</span>
          <span className=" font-medium">Coming October</span>
        </div>

        <div className="product card mb-10 flex flex-col">
          <img className="w-80 h-80 rounded-2xl object-cover" src="https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTE3NzY2MTYzNDg4MjE2ODY1Nw%3D%3D/original/a332d020-4315-4f63-af71-444d46474939.png" />
          <span className=" font-medium">Sleepover at Polly Pocket's Compact</span>
          <span className="text-muted-foreground">Hosted by Polly Pocket</span>
          <span className=" font-medium">Sold out</span>
        </div>

        <div className="product card mb-10 flex flex-col">
          <img className="w-80 h-80 rounded-2xl object-cover" src="https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTE4NzE3Nzg1NDA2MjM5NzY2NQ%3D%3D/original/6989d581-3f67-4cd9-8cb6-5f5c226aedc6.png" />
          <span className=" font-medium">Playdate at Polly Pocket's Compact</span>
          <span className="text-muted-foreground">Hosted by Polly Pocket</span>
          <span className=" font-medium">Sold out</span>
        </div>

        <div className="product card mb-10 flex flex-col">
          <img className="w-80 h-80 rounded-2xl object-cover" src="https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEzMTA4NzY0ODgzNzUzNjQzNw%3D%3D/original/1077cfcd-29d5-42b7-adab-19e0b620e492.jpeg" />
          <span className=" font-medium">Go VIP with Kevin Hart</span>
          <span className="text-muted-foreground">Hosted by Kevin Hart</span>
          <span className=" font-medium">Sold out</span>
        </div>

        <div className="product card mb-10 flex flex-col">
          <img className="w-80 h-80 rounded-2xl object-cover" src="https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEyNjIzMTk3NDU3MjE4Nzg2NA%3D%3D/original/f4cbe542-3ce0-4c6f-a8f1-d2120c1b2420.jpeg" />
          <span className="font-medium">Train at the X-Mansion</span>
          <span className="text-muted-foreground">Hosted by Jubilee</span>
          <span className="font-medium">Sold out</span>
        </div>
      
        </div>

{/* Add "Past Experiences" Large Heading */}
<div className="text-3xl font-semibold pl-20">
  Past Experiences
</div>

{/* Grid for Past Experiences */}
<div className="past-experiences-section grid grid-cols-2 lg:grid-cols-4 ml-20 gap-4 mt-6">
        <div className="product card mb-10 flex flex-col">
          <img className="w-80 h-80 rounded-2xl object-cover" src="https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEzMTA4NjI3OTI1MjIxNDQyOA%3D%3D/original/bc989f2d-eca8-4bcf-a9b0-b70b8e685a64.jpeg" />
          <span className="font-medium">Live like Bollywood star Janhvi Kapoor</span>
          <span className="text-muted-foreground">Hosted by Janhvi Kapoor</span>
          <span className="font-medium">Sold out</span>
        </div>

        <div className="product card mb-10 flex flex-col">
          <img className="w-80 h-80 rounded-2xl object-cover" src="https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTE2MjI1MjI0NDQ0MzYzMjM4Mg%3D%3D/original/ae3426d1-fba4-44d4-bed2-690426f25f7a.jpeg" />
          <span className="font-medium">Open the Olympic Games at Musee d'Orsay</span>
          <span className="text-muted-foreground">Hosted by Mathieu Lehanneur</span>
          <span className="font-medium">Sold out</span>
        </div>

        <div className="product card mb-10 flex flex-col">
          <img className="w-80 h-80 rounded-2xl object-cover" src="https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEyNTQ0NTEyMzEwMTI3NDg1MQ%3D%3D/original/bd73f0f8-9057-4bbc-ad70-1db13eb5c03f.png" />
          <span className="font-medium">Wake up in the Musee d'Orsay </span>
          <span className="text-muted-foreground">Hosted by Mathieu Lehanneur</span>
          <span className="font-medium">Sold out</span>
        </div>

        <div className="product card mb-10 flex flex-col">
          <img className="w-80 h-80 rounded-2xl object-cover" src="https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEzMTA4MzUyMzk5Mjc3MDU5Nw%3D%3D/original/ced15ffe-0ab5-48cf-a189-dbdeaaf04387.jpeg" />
          <span className="font-medium">Make core memories with Inside Out 2</span>
          <span className="text-muted-foreground">Hosted by Joy</span>
          <span className="font-medium">Sold out</span>
        </div>

        <div className="product card mb-10 flex flex-col">
          <img className="w-80 h-80 rounded-2xl object-cover" src="https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTE0ODQ2MDI1NTE4MDMzOTQ4MQ%3D%3D/original/c92634d0-4964-439a-905d-b9129af14d34.jpeg" />
          <span className="font-medium">Design your Incredibles Supersuit</span>
          <span className="text-muted-foreground">Hosted by Edna Mode</span>
          <span className="font-medium">Sold out</span>
        </div>

        <div className="product card mb-10 flex flex-col">
          <img className="w-80 h-80 rounded-2xl object-cover" src="https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEyNjI0NzUwMDUwMTg2Mzg5MA%3D%3D/original/99417998-fa44-4c75-ae77-287c1468977b.jpeg" />
          <span className="font-medium">Make core memories with Inside Out 2</span>
          <span className="text-muted-foreground">Go on tour with Feid</span>
          <span className="font-medium">Sold out</span>
        </div>

        <div className="product card mb-10 flex flex-col">
          <img className="w-80 h-80 rounded-2xl object-cover" src="https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEzMTA3NzgxMzcwNzcxOTUzNQ%3D%3D/original/872f434b-9348-4ff1-8c6f-754fdbab4010.jpeg" />
          <span className="font-medium">Game with Khaby Lame</span>
          <span className="text-muted-foreground">Hosted by Khaby Lame</span>
          <span className="font-medium">Sold out</span>
        </div>

        <div className="product card mb-10 flex flex-col">
          <img className="w-80 h-80 rounded-2xl object-cover" src="https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEzMTg2NzMzNDc0MDk1Nzg4NA%3D%3D/original/b676fc8d-8250-4df0-a7cb-728b0486e371.jpeg" />
          <span className="font-medium">Crash at the X-Mansion</span>
          <span className="text-muted-foreground">Hosted by Jubilee</span>
          <span className="font-medium">Sold out</span>
        </div>

       
      </div>
    {/* Footer Section */}
    <footer className="bg-slate-100 text-black py-6">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h2 className="text-xl font-bold">Contact Us</h2>
              <p>123 Airbnb Street</p>
              <p>San Francisco, CA 94105</p>
              <p>Email: contact@airbnb.com</p>
              <p>Phone: (123) 456-7890</p>
            </div>
            <div className="mb-4 md:mb-0">
              <h2 className="text-xl font-bold">Follow Us</h2>
              <div className="flex space-x-4">
                <a href="https://www.facebook.com/airbnb" target="_blank" rel="noopener noreferrer">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="Facebook" className="h-6 w-6" />
                </a>
                <a href="https://twitter.com/airbnb" target="_blank" rel="noopener noreferrer">
                  <img src="https://cdn-icons-png.flaticon.com/128/5968/5968830.png" alt="Twitter" className="h-6 w-6" />
                </a>
                <a href="https://www.instagram.com/airbnb/" target="_blank" rel="noopener noreferrer">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="Instagram" className="h-6 w-6" />
                </a>
                <a href="https://www.linkedin.com/company/airbnb/" target="_blank" rel="noopener noreferrer">
                  <img src="https://cdn-icons-png.flaticon.com/128/3536/3536505.png" alt="LinkedIn" className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
      
    

   
 