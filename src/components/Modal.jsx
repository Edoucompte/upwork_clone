import ReactDOM from 'react-dom'

export default function Modal({handleCloseModal = () =>{}, children}) {
    return ReactDOM.createPortal(
        //modal-container
        <div className={" fixed top-0 left-0 h-[100vh] w-[100vw] " + 
            " flex flex-col items-center justify-center z-1002 p-[1rem] "}
        >
            {/* modal-underlay */}
            <button className={" absolute opacity-[0.8] z-1001 border-none w-[100%] shadow-none bg-gray-700 " +
                " inset-0 hover:translate-0 hover:shadow-none"}
                onClick={() => { handleCloseModal()}} />

            {/* modal-content */}
            <div className=" relative z-1002 w-[500px] my-0 mx-auto bg-white rounded-[0.4rem] flex flex-col text-black">
                {children}
            </div>
        </div>,
        document.getElementById('portal')
    )
}