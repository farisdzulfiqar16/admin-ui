import "./App.css";
import "tailwindcss";

function App() {
  return (
    <>
      
    <div className="p-6 space-y-8
        {/* LATIHAN 1 - NAVBAR */}
        bg-[#233D4D] text-[#FE7F2D]
       ">
          LATIHAN 1
          <nav className="p-4 bg-white/30 backdrop:backdrop-blur-lg
            rounded-md
            flex flex-col md:flex-row justify-between ">
            {/* Kiri - Logo */}
            <div className="font-bold text-lg mb-2
              flex justify-between 
              ">MyLogo</div>

              {/* Kanan - Menu */}
              <ul className="flex flex-col md:flex-row gap-2 md:gap-6">
                <li>
                  <a href="#" className="hover:hover:shadow-lg hover:scale-110">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="transition-all duration-200 px-3 py-1 rounded-md bg-blue-600 text-white shadow-sm 
                  hover:bg-blue-700 hover:shadow-lg hover:scale-110">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:hover:shadow-lg hover:scale-110">
                    Contact
                  </a>
                </li>
              </ul>            
          </nav>

        <hr />
        
        {/* LATIHAN 2 - GRID GALERI */}
        LATIHAN 2
        <div className="flex-col items-center justify-center
        grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 p-4
        bg-[rgba(255,255,255,0.3)] rounded-md
        ">
          <img
            src="https://www.placehold.co/200x200"
            alt="Gambar Galeri"
            className="h-48"
          />
          
          <img
            src="https://www.placehold.co/200x200"
            alt="Gambar Galeri"
            className="h-48"
          />
          <img
            src="https://www.placehold.co/200x200"
            alt="Gambar Galeri"
            className="h-48"
          />
          <img
            src="https://www.placehold.co/200x200"
            alt="Gambar Galeri"
            className="h-48"
          />
          <img
            src="https://www.placehold.co/200x200"
            alt="Gambar Galeri"
            className="h-48"
          />
          <img
            src="https://www.placehold.co/200x200"
            alt="Gambar Galeri"
            className="h-48"
          />
        </div>

        <hr />

        {/* LATIHAN 3 - PRICING TABLE */}
        LATIHAN 3
        <div className="p-6 text-center 
        grid grid-cols-3 gap-4
        md:max-xl:flex">

          {/* Card 1 - Basic */}
          <div className="bg-gray-300 p-6 rounded shadow-md
           hover:shadow-xl hover:scale-105 transition-transform duration-300 cursor-pointer">
            <h3 className="font-bold text-lg mb-2">Basic</h3>
            <p className="text-gray-700">Rp 50.000</p>
          </div>

          {/* Card 2 - Pro (lebih besar dan warna beda) */}
          <div className="bg-[#274457] text-[#FE7F2D] p-8 rounded shadow-lg transform scale-105
          hover:shadow-xl hover:scale-105 transition-transform duration-300 cursor-pointer">
            <h3 className="font-bold text-xl mb-2">Pro</h3>
            <p className="text-white">Rp 100.000</p>
          </div>

          {/* Card 3 - Premium */}
          <div className="bg-gray-300 p-6 rounded 
          shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300 cursor-pointer">
            <h3 className="font-bold text-lg mb-2">Premium</h3>
            <p className="text-gray-700">Rp 200.000</p>
          </div>
          
        </div>
        
        <hr />

        {/* LATIHAN 4 - DASHBOARD LAYOUT */}
        LATIHAN 4
        <div className="min-h-screen 
        grid grid-cols-1 md:grid-cols-12 gap-4 p-4 
        ">
          <header className="bg-gray-300 p-4 md:col-span-12 text-center">Header</header>
          <aside className="bg-gray-200 p-4 md:col-span-3 ">Sidebar</aside>
          <main className="bg-white p-4 border md:col-span-9 \\">Content</main>
          <footer className="bg-gray-300 p-4 md:col-span-12 text-center font-bold">Footer</footer>
        </div>
        
        <hr />

        {/* LATIHAN 5 - CARD PRODUCT */}
        LATIHAN 5
        <div className="p-4 border rounded-lg flex flex-col md:flex-row items-center 
        md:items-start gap-4 shadow-2xl">
          <img
            src="https://www.placehold.co/80x80"
            alt="Gambar Produk"
            className="h-20 w-20 rounded-md object-cover"
          />
          <div>
            <h3 className="font-bold">Nama Produk</h3>
            <p className="text-sm text-gray-600">Deskripsi produk singkat...</p>
          </div>
        </div>
   
      </div>
    </>
  );
}

export default App;
