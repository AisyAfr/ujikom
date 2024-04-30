export default function Modal({ open, onClose, children }) {
    return (
        <div
            onClick={onClose}
            className={
                'fixed inset-0 flex justify-center items-center transition-colors $={open ? "visible bg-black/20" : "invisible"}'
            }
        >
            <div onClick={(e) => e.stopPropagation()}>
                <div className="w-[350px] h-40px] border-[3px] mx-auto z-10 rounded-xl flex ">
                    <div className="flex-row mx-auto mt-[30px]">
                        <h1 className="text-2xl font-bold text-center mt-3">
                            Detail Kasir
                        </h1>
                        <p className="font-bold text-center text-md">
                            Lihat Kasir😀
                        </p>
                        <div className="grid grid-cols-2 gap-2 mt-4 text-center">
                            <p className="text-gray-600 font-bold">Nama:</p>
                            <p className="">Justin</p>
                            <p className="text-gray-600 font-bold">Jam:</p>
                            <p className="">08.35</p>
                            <p className="text-gray-600 font-bold">Status:</p>
                            <p className="">Aktif</p>
                        </div>
                        <div className="flex mb-[30px] mt-[20px]">
                            <button className="hover:bg-[#7d5e42] hover:text-white hover:border-none font-bold py-2 px-4 rounded w-[100px] border border-slate-800 transition-colors">
                                Edit
                            </button>
                            <button className="hover:bg-[#7d5e42] hover:text-white hover:border-none font-bold py-2 px-4 rounded ml-2 w-[100px] border border-slate-800 transition-colors">
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {children}
        </div>
    );
}
