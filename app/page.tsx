import Logo from '@/components/logo'
import ThemeSwitcher from '@/components/theme-switcher'
import TodoContainer from '@/components/todo-container'

export default function Home() {
  return (
    <main className="relative flex min-h-screen justify-center pt-12 lg:pt-[70px] px-6 pb-[72px] lg:pb-[52px] bg-[#FAFAFA] dark:bg-[#171823]">

      {/* Background Image */}
      <div className='absolute top-0 left-0 w-full h-[375px] lg:h-[300px] bg-mobile-light lg:bg-desktop-light dark:bg-mobile-dark lg:dark:bg-desktop-dark bg-no-repeat bg-cover z-0'></div>

      {/* MAIN CONTENT */}
      <section className='z-10 w-[327px] lg:w-[540px]'>

        <div className='flex justify-between mb-10'>
          <Logo />
          <ThemeSwitcher />
        </div>

        <TodoContainer />

        <p className='text-center mt-6 lg:mt-4 text-light-secondary dark:text-dark-secondary text-sm tracking-[-0.194px] lg:pt-7'>Drag and drop to reorder list</p>

      </section>

    </main>
  )
}
