import Image from "next/image";
import localFont from "next/font/local";
import Link from "next/link";


export default function Home() {
  return (
    <main >

      <div className=" p-15 flex flex-col gap-4 items-center justify-center">
        <p className="text-5xl font-bold text-yellow-600">
          Find Trusted Suppliers.Compare Prices. Save More.</p>
        <p className="px-32 text-center text-lg">
          Easily connect with verified local raw material suppliers and get the best dealls on quality products.
        </p>
        <div className='flex gap-3 justify-start'>
          <Link href="/login"><button className='bg-green-400 cursor-pointer hover:caret-amber-500 text-white rounded-lg shadow-lg p- py-2 font-bold'>Login with Phone Number</button></Link>

        </div>
        <div className="flex flex-row gap-16 justify-center items-center p-4">

          <span className=" align-center   text-center text-black"><img src="icons/logo.png" width="25px" height="25px" /><p> Trusted Vendors</p></span>
          <span className="text-center  text-black"><img src="icons/scale.png" width="25px" height="25px" /><p> Live Prices</p></span>
          <span className="text-center  text-black"><img src="icons/cart.png" width="25px" height="25px" /><p> Easy Orders</p></span>

        </div>
        <div className="px-7 items-center justify-center">
          <p className="flex  align items-center font-bold text-4xl  h2 px-49  ">
            How it Works
          </p>


          <div className="flex flex-row gap-19 justify-center items-center p-17">
            <section className=" flex flex-col items-center">
              <script src="https://cdn.lordicon.com/lordicon.js"></script>
              <lord-icon
                src="https://cdn.lordicon.com/rxgzsafd.json"
                trigger="hover"
                style={{"width":"25px","height":"25px"}}>
              </lord-icon>
              <p className="text-center">Find Suppliers</p>



            </section>
            <section className=" flex flex-col items-center">
              <lord-icon
                src="https://cdn.lordicon.com/nvtfowkn.json"
                trigger="hover"
                style={{ "width": "40px", "height": "35px", paddingTop: "5px", "paddingLeft": "5px" }}
              >
              </lord-icon>
              <p className="text-center">Get Delievery</p>
            </section>
            <section className=" flex flex-col items-center">

              <lord-icon
                src="https://cdn.lordicon.com/jeuxydnh.json"
                trigger="hover"
                style={{ "width": "40px", "height": "35px", "paddingTop": "5px", "paddingLeft": "5px" }}
              >
              </lord-icon>
              <p className="text-center">Get delievery/Pickup</p>



            </section>

          </div>


        </div>
      </div >


    </main >
  );
}