import Nav from "./Nav";

const Sidebar = () => {
  return (
    <>
      <Nav page = "Profile" redirect = "profile" />
      <Nav page = "Home" redirect = "/" />
      <Nav page = "Events" redirect = "/events" />
      <Nav page = "Deities" redirect = "/deities" />
      <Nav page = "Gallery" redirect = "/gallery" />
      <a 
        href = "https://www.google.com/maps/place/Ivanallur/@10.7696612,79.8237567,17z/data=!3m1!4b1!4m6!3m5!1s0x3a556b007bb4697b:0xdf623159ec45e632!8m2!3d10.7696612!4d79.8237567!16s%2Fg%2F11mzxs1_dx?entry=ttu&g_ep=EgoyMDI2MTAxMy4wIKXMDSoASAFQAw%3D%3D"
        target="_blank"
      >
        Map
      </a>
      <Nav page = "Bookings" redirect = "/bookings" />
      
      {/* 
      <button
        onClick={() => navigate("/")}
      >
        Home
      </button>
      <button
        onClick={() => navigate("/events")}
      >
        Events
      </button>
      <button
        onClick={() => navigate("/deities")}
      >
        Deities
      </button>
      <button
        onClick={() => navigate("/gallery")}
      >
        Gallery
      </button> 
      */}
    </>
  )
}

export default Sidebar
