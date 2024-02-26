export default function CategoryList({ category }) {

    return <>
      {category.descendants !== undefined
        ? (<details className='w-full mx-6'>
            <summary className='flex justify-between w-full py-1'>
              <div className='flex justify-center items-center space-x-4'>
                <p className='[font-size:16px] text-[#2B3445]'>{category.name}</p>
              </div>
              <div className='arrow'></div>
            </summary>
   
            {category.descendants && (
              <ul className='border-l-2 space-y-2'>
                {category.descendants.map((descendant, index) => (
                  <CategoryList key={index} category={descendant} />
                ))}
              </ul>
            )}
        </details>)
        :
        (<li className='flex px-6 py-1'>
          <div className='flex justify-center items-center space-x-4'>
            <p className='[font-size:16px] text-[#2B3445]'>{category.name}</p>
          </div>
        </li>)
        }
        </>
  }
  