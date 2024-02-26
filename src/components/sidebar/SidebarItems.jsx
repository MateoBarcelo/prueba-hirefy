import CategoryList from "../CategoryList"

const sidebarItems = [
    {
      name: "Home",
      image: "/home.png"
    },
    {
      name: "How it works",
      image: "/question_mark.png"
    },
    {
      name: "Marketplace",
      image: "/hireme.png"
    },
    {
      name: "For Talents",
      image: "/applicant.png"
    },
    {
      name: "Categories",
        image: "/category.png",
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
  ];
  
  
export default function SidebarItems() {
    return <div className='h-screen flex flex-col bg-white px-4 pt-6'>
            <ul className='space-y-4'>
            {
                sidebarItems.map((item, index) => (
                <li key={index} className='flex px-6'>
                    {item.descendants !== undefined 

                    ? <details className='w-full'>
                        <summary className='flex justify-between w-full'>
                        <div className='flex justify-center items-center space-x-4'>
                            <img src={item.image} className='h-4' alt={item.name} />
                            <p className='font-semibold text-lg text-[#2B3445]'>{item.name}</p>
                        </div>
                        <div className='arrow'></div>
                        </summary>

                        <ul className='border-l-2 space-y-2'>
                        {
                            item.descendants.map((category, index) => (
                            <CategoryList key={index} category={category} />
                            ))
                        }
                        </ul>
                    </details> 

                    : <div className='flex justify-center items-center space-x-4'>
                            <img src={item.image} className='h-4' alt={item.name} />
                            <p className='font-semibold text-lg text-[#2B3445]'>{item.name}</p>
                        </div>}
                    </li>
                ))
            }
            </ul>        
        </div>
}
  