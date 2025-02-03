// #132C33

export default function Header({ topMessage, section }: { topMessage: string, section: string }) {
    return (
        <div className="w-full h-28 flex items-center fixed z-10 bg-gradient-to-b from-[#0a0a0a] to-transparent">
            <div className="h-full flex px-6 items-center justify-center gap-4">
                <img className="w-10" src="/logo_rep.png" />
            </div>
            <div className="h-full flex items-center gap-1">
                <h1 className="nunito text-lg font-thin">You're currently @</h1>
                <h1 className="inter text-lg font-bold"><span className="text-[#51C4D3]">repyh.com</span>/<span className="underline">{section}</span></h1>
            </div>
            <div className="h-full px-12 ml-auto flex items-center inter gap-6">
                <a href="#home" className="text-lg group">
                    <h1>Home</h1>
                    <div className="w-full h-0.5 rounded-full origin-left scale-0 group-hover:scale-100 transition duration-250 bg-gradient-to-r from-[#51C4D3] to-[#126E82]"></div>
                </a>
                <a href="#experiences" className="text-lg group">
                    <h1>Experiences</h1>
                    <div className="w-full h-0.5 rounded-full origin-left scale-0 group-hover:scale-100 transition duration-250 bg-gradient-to-r from-[#51C4D3] to-[#126E82]"></div>
                </a>
                <a href="#projects" className="text-lg group">
                    <h1>Projects</h1>
                    <div className="w-full h-0.5 rounded-full origin-left scale-0 group-hover:scale-100 transition duration-250 bg-gradient-to-r from-[#51C4D3] to-[#126E82]"></div>
                </a>
                <button className="text-lg group">
                    <h1>Contact</h1>
                    <div className="w-full h-0.5 rounded-full origin-left scale-0 group-hover:scale-100 transition duration-250 bg-gradient-to-r from-[#51C4D3] to-[#126E82]"></div>
                </button>
            </div>
            <div className="h-24 pointer-events-none w-full -mt-4 mr-auto fixed flex justify-center">
                <div className="h-[60%] w-[30%] pointer-events-auto bg-gradient-to-b from-[#126E82] to-[#0A0A0A] rounded-b-full flex justify-center items-center">
                    <h1 className="inter text-[#0a0a0a] text-8xl font-bold text-center">{topMessage}</h1>
                </div>
            </div>
        </div>
    );
}
