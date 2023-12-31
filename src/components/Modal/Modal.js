const Modal = ({ children, modalControll }) => {
    return (
        <>
            <div
                className={`fixed w-full h-full duration-300 inset-0 z-10 bg-black/50 cursor-pointer  `}
                onClick={modalControll}
            ></div>
            <div
                className={`rounded w-[400px] lg:w-[500px] space-y-8 bg-white py-[37px] px-[30px] fixed duration-500 top-1/2  left-1/2 z-20 -translate-x-1/2 -translate-y-1/2`}
            >
                {children}
            </div>
        </>
    );
};

export default Modal;
