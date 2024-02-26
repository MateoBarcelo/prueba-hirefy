export default function SideHeader() {
    return  <header className='w-full h-auto flex justify-between items-center px-6 py-6'>
                <div className='flex justify-center items-center'>
                <img src="/logo.png" className='size-8 mx-2' alt="Hirefy Logo" />
                <p className='font-bold text-2xl text-white '>Hirefy</p>
                </div>
                <button className='text-2xl text-white'>
                <img src="/close.png" alt="" />
                </button>
            </header>

}