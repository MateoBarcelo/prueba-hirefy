import CategoryList from "../CategoryList"

const sidebarList = [
    {
      image: "/home.png",
      name: "Home"
    },
    {
      image: "/question_mark.png",
      name: "How it works"
    },
    {
      image: "/hireme.png",
      name: "Marketplace"
    },
    {
      image: "/applicant.png",
      name: "For Talents"
    }
  ]
  
  const categories = {
    name:"Categories",
    descendants: [
      {
        name: "Lorem Ipsum"
      },
      {
        name: "Lorem Ipsum",
        descendants: [
          {
            name: "Frontend Development"
          },
          {
            name: "Backend Development"
          },
          {
            name: "Fullstack"
          }
        ]
      },
      {
        name: "Lorem Ipsum"
      },
      {
        name: "Lorem Ipsum"
      },
      {
        name: "Lorem Ipsum",
        descendants: [
          {
            name: "Frontend Development"
          },
          {
            name: "Backend Development"
          },
          {
            name: "Fullstack"
          }
        ]
      },
    ]
  }
  
export default function SidebarItems() {
    return <div className='h-screen flex flex-col bg-white px-4 pt-6'>
            <ul className='space-y-4'>
            {
                sidebarList.map((item, index) => (
                <li key={index} className='flex px-6'>
                    <div className='flex justify-center items-center space-x-4'>
                    <img src={item.image} className='h-4' alt={item.name} />
                    <p className='font-semibold text-lg text-[#2B3445]'>{item.name}</p>
                    </div>
                </li>
                ))
            }

            <li className='flex px-6 flex-col'>         
                <details className='w-full'>
                    <summary className='flex justify-between w-full'>
                    <div className='flex justify-center items-center space-x-4'>
                        <img src="/category.png" className='h-4' alt="Hirefy Logo" />
                        <p className='font-semibold text-lg text-[#2B3445]'>Categories</p>
                    </div>
                    <div className='arrow'></div>
                    </summary>
                    <ul className='border-l-2 space-y-2'>
                    {
                        categories.descendants.map((category, index) => (
                        <CategoryList key={index} category={category} />
                        ))
                    }
                    </ul>
                </details>
            </li>
            </ul>
            
        </div>
}