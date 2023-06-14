import file from "../../public/SimonGraham_CV_cover_resume.pdf"

function Buttons( {name}) {
    return(
        <div className='flex flex-col md:flex-row justify-center mt-52 mb-0'>
        <a href={file} download="Simon-Graham-resume">
        <button class="      
        bg-gradient-to-r from-cyan-500 to-emerald-500 to-90% hover:from-cyan-400 hover:to-emerald-400 text-white font-bold border-b-4
        border py-2 px-4 rounded inline-flex items-center
        ">
            <svg class="fill-current w-4 h-4 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"
            /></svg>
            <span>{name}</span>
        </button>
        </a>
        </div>
    );
}

export default Buttons;

{/**  bg-green-600 hover:bg-green-500 text-white font-bold border-b-4
        border-green-700 */}
