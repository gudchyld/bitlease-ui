const Navbar = () => {
    return (  
        <div className="bg-[#2C3333] ">
            <div className="flex items-center  text-white py-8 max-w-[1024px] mx-[auto]"> 
                <div>
                    <h2 className="text-2xl">Bitlease</h2>
                </div>

                <div className="flex ml-[auto] items-center" >
                    <p>Team</p>
                    <button className="ml-6 border-[#0E8388] border-2 py-2 px-4 rounded-xl">Open App</button>
                </div>
            </div>
        </div>

    );
}
 
export default Navbar;