import React from 'react'
import html from '../../public/html.png'
import javascript from '../../public/javascrit.png'
import oracle from '../../public/oracle.png'
import css from '../../public/css.png'
import java from '../../public/java.jpg'
import springboot from '../../public/spring.png'
import tailwind from '../../public/tailwind.png'



function Experience() {

    const cardItem = [
        {
            id: 1,
            logo: html,
            name: 'Html'
        },
        {
            id: 2,
            logo: css,
            name: 'CSS'
        },
        {
            id: 3,
            logo: java,
            name: 'Java'
        },
        {
            id: 4,
            logo: tailwind,
            name: 'tailwind CSS'
        },
        {
            id: 5,
            logo: javascript,
            name: 'JavaScript'
        },
        {
            id: 6,
            logo: oracle,
            name: 'Oracle'
        },
        {
            id: 7,
            logo: springboot,
            name: 'SpringBoot'
        },
    ]

    return (
        <>
            <div name='Experience' className='max-w-screen-2xl container mx-auto md:px-20 my-20 my-16'>
                <div>
                    <h1 className='text-3xl font-bold mb-5'>Experince</h1>
                    <p className=" ">I've more than 2 years of experience in below technology.</p>
                    <div className='grid grid-cols-2 md:grid-cols-5 gap-7 my-3'>
                        {
                            cardItem.map(({ id, logo, name }) => (
                                <div className='flex flex-col items-center justify-center border-[2px] rounded-full  p-1 md:w-[200px] md:h-[200px] cursor-pointer hover:scale-110 duration-300' key={id}>
                                    <img src={logo} className='w-[150px] p-1 rounded-full ' alt="" />
                                    <div>
                                        <div className=''>{name}</div>

                                    </div>

                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Experience;