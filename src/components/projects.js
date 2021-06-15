import React, {Component} from 'react';
import '../styles/main.css';
import { SocialIcon } from 'react-social-icons';
export default class Projects extends Component{
    render(){
        return(
            <React.Fragment>
                <section id="projects" className="text-gray-600 body-font">
                    <div className="container px-5 py-5 mt-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-20">
                        <h1 className="text-2xl font-medium title-font mb-4 text-gray-900 tracking-widest">MY PROJECTS</h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Few of the featured projects from all the ones listed in my Github.</p>
                    </div>
                    <div className="flex flex-wrap -m-4">
                        <div className="p-4 lg:w-1/2">
                        <div className="h-full flex p-5 sm:flex-row bg-gray-100 rounded flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                            <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src="https://play-lh.googleusercontent.com/RigazRuX0cEjfUhomDJuCIQqEwTaFpo9P_BjZBMPXqGKpekqoAWpPxXyX6yfjo_59gQ" />
                            <div className="flex-grow sm:pl-8">
                            <h2 className="title-font font-medium text-lg text-gray-900">Color Switch</h2>
                            <h3 className="text-gray-500 mb-3">Java based single player game</h3>
                            <p className="mb-4">A popular mobile game, implemented in JavaFX
with closely replicated Game Physics and smooth rendering.</p>
                            <span className="inline-flex mb-3">
                                <SocialIcon url="https://github.com/akshat19231/AP_Project_ColorSwitch" />
                            </span>
                            </div>
                        </div>
                        </div>
                        <div className="p-4 lg:w-1/2  ">
                        <div className="h-full flex p-5 sm:flex-row bg-gray-100 rounded flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                            <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src="https://3.bp.blogspot.com/-LU1sXxwGJDY/V4BIC7ipVZI/AAAAAAABg3M/64S81J5barEF1HZQEZw-ZqEhrvrkNB9MwCK4B/s1600/Chrome.png" />
                            <div className="flex-grow sm:pl-8">
                            <h2 className="title-font font-medium text-lg text-gray-900">Mongyfishy Meme Extension</h2>
                            <h3 className="text-gray-500 mb-3">Chrome extension</h3>
                            <p className="mb-4">An intuitive Chrome Extension that allows users to fetch meanings
and memes through keyword searches and selections on the internet</p>
                            <span className="inline-flex mb-3">
                                <SocialIcon url="https://github.com/watch24hrs-iiitd/MemeExtension" />
                            </span>
                            </div>
                        </div>
                        </div>
                        <div className="p-4 lg:w-1/2  ">
                        <div className="h-full flex p-5 sm:flex-row bg-gray-100 rounded flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                            <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRlXkwasX3CRBW5UwURT9kVjgN21eMyq9nl-BiCVe6PGdZafm_lvlNC1qmkPbrBGxFTJk&usqp=CAU" />
                            <div className="flex-grow sm:pl-8">
                            <h2 className="title-font font-medium text-lg text-gray-900">IIIT-Delhi Sports Management System</h2>
                            <h3 className="text-gray-500 mb-3">A database management system</h3>
                            <p className="mb-4">A database aimed at managing the transactions at the sports block of
IIIT-Delhi.</p>
                            <span className="inline-flex mb-3">
                                <SocialIcon url="https://github.com/NKShukla/IIITD_Sports_Management_System" />
                            </span>
                            </div>
                        </div>
                        </div>
                        <div className="p-4 lg:w-1/2  ">
                        <div className="h-full flex p-5 sm:flex-row bg-gray-100 rounded flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                            <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAt1BMVEX///8qMjgAFB4ADRnq6+sGFyHe3t+Dh4keKC4mLzVNqSUiKzIAEx0cJi0SHiYWISkAChcNGyMpLjgoJzlPriQtNTvx8vKxs7XDxcbT1NVMUlbZ2ts1PEL3+Picn6Glp6lma25eY2ZESk+OkZN5fYC6vL08Q0hhZmmQk5Wpq60nJjl7foG/wMJTWV21t7hxdXg4ZTEyUTRFkCoAAA9Bgiw1XDIwSTVImCg5azAsODdDiys8ci9KoSY4gDqZAAAJ5ElEQVR4nO1daYOiOBMeUJA0BETbAxXxarttr5nt2Z3Zfff//66XJNqNGpSjODfPt9GekMdU6gqp+vZNQEBAQEBAQEBAQEBAQEBAQEBAQEAgb6gv3nLbmg6cftEzyQTDlaWYFtYwtmxlMW0WPR9oeJKtSV9AljFTi54TJAaWhXxaumXbimKb2P+HpLdntVnH8cj2Kem2vvKGjjp2XpYTBROO9rToqYHAXTUIP2PmBD5Ul5blc7SkYWHzAsMG+8uF7P346nN3SjYmUuYVF1VnQQQU6y+c7/pHtrhvuc8KDv2jrPsc5KXL/95Zm1RUd/lOCw6eReRQ3t8xCxuZiuq9PykvTgvUu79A/ZVBRbUVsszlRf9IZ95+vMmcNd2q6JDDrAAxbVABfY2kKJm6VUYVEtXhhAloVGPX31KtKldFVJszIqCaEsdhYW4PxoPMZgWIqUIFNK7TOdCoZzC69gxKh2GPeGPmJL435rYavvFE7W2pRbU5V4iAmsk8anVPRdXaAM8KEG/EhUGNY2JX80BEVbIXzuM/LQI7RAV0nWp6LYX4eY1jCfMczT0VUMNLOY5Kx8FW2nGg4S7bRECNFcBvv5OYsiqVqL4gquqh9s8b1apyeURVHSnAOrA5l2M7DdnBbVENamxBf/HkdhUcA5yRLzI1iG9kFJ2QO/mTWhb+ZHMmo6ITci6LCRpZxQTDCU3IFSeqGxNnnYKYmtSNLyYh5yxsiQQ82cbmzRkVEyX/hFz/SEy8rrQyf9Ip36PnnJDzshfQwMPs3EU17zznOa0VlneFfx7V4nKeW8NZMFHl5c7BccpS5K3eNlZO+yJuGg0O7ooeEWScO+6zNFqjGDdjzI55tAzt00HRk6TR4HBygvdZhVVboyAB/YLbahMth7OJjudW0X4wgTryXSn0kYWhevUJWqMSnNh6RBc04CVp6+tQO3sfLQoc8i6HAW02XmRJKsD95aNpIglNYMd0/TGtLeyYKTBW/B0DK1BHTdJHoCOmw8CnKEPKqerLqFECJfOFV/8nnwGOd9QlXJZNyND0FV8bbhH7bUkyS3botdUkDLcTPQtytLToO46/YVRDQghszLkOu63TwFsoiq0sht8WSFKgnDfXBLc+STHA5DVOEu97GyxhKBfSUSRtBTRWKrCTNwb7DVCbDiypFCfP9EjqEz3fAe9BjYwlu/gTEnZWc4kG0NgtLClFKxqWbrthCGTCSsBwc/Ee/Ceg/KyWVjBDGvXyINeEIc1c1JghT8PUiSF7DbDGDD1TD+dXA4ZjelpRX4Zuy7i7gJVnuNPxA37VZsje46wxw6n9SECrzdCZPNAwFWforuQIAlphhgfrsYapMsPmPoqGqTDDaSOShqksQ2cS7mTXgSG7cVljhgN+GF8bhqFhfF0Y0lf9a8zwXhhfB4b9u2F8DRjS+9A1ZjheJNEw1WHoh/FJBbQaDHcoupNdRYbRwvh8GGZybhExjK/sGo6TmsCqrOFb5DA+H4bQa+jO05iICjDsr1Oq0LIzdCfpVUy5GY6Se2nVYLiMmAutLEO1DUewnAxnYJuwpAybCiDBUlr8DYQrA88QcA2PkEJayjWc8L01lMyClJFhgztT3GslolhGKeUyJLeJExmRqjDEpB5DnRnq9O3cOjPU6EvyH9hUYp9cVIqhNB2Ox3H1TaUYUoxjRsbVYziNGRpXhGHgYv8+psdTDYbK8vNLN67TWgmGZuC6kRM3QVUFhtrr6Qv15UV9jeuWV4AhQuw+wWEtm2b8JHgFGNq0lIcb6zWhSjFEC/KZ20uafSs/Q5Mu4TFxgrj0DNkVyeZHUoLlZ8iiil3yBGrpGVq0DkudGSq0FKH6kfikrfQMDVZnZiC1ZVlhnUtqxvDzgqTbVMe7Zfxj4fIzvLog+SbXjeHNqF7dImDrpijoKJ5rCpkRhirAemnxb8qlDOJtRahbskvAu9xXXtt1yYCYR1NQN509iyNPCXEVW8itq8Jk8aw/1G31oQlX+OM6Asbm/s07DIbnxYglpSw0AQApIwI11m2eRseWZdmNUw32WAw1sLpOEgLb0/yzJx8fVFu7XCntdvj/B2zvkCpRUHXuQxmy2aocTdPp/PyTTxHKWPjevw1WZOMBw8ONlHa635+ev3MZoj3MnAj8X9aEqTgZypBV01ldW/z3v349hzEEmhLF1IIqWRTGEOnkW/cqn9Ht/Xx+egphiCyQGTGQZDQGUVxhDJntP1womk739xMh+PT8g8fQBG2BMfUfLUMU8Q1hiJk1WgdCxM77j38Zv19/cZcQuLATeXYDoPAUn6E5ohZ/EFjC7t//MH5P39+5uxBiNkEQNY6U9N7pFUMd67pmnoqiul9Rfuf9fycB/SnxLYW5fPCk2NiRubVTl4u6ZKgfvdf99nBy2eafirTzJaBdLj8JA1qKMzwyOTttkeur2CLodwdey+z+QVXo0+8wbwZDeZEXGJwKo6ca5DI+DM4zmMLo/kEFtBPCT7IyqsPp0FIqlpRGp14wxIFfqxVMYPgMn//98R7CDxmZVY/rv5JlTFUY/YKhGah3vAh6M91fz7/5GpT8LjjL2vPsLqSuJC6MzsuXUsyDDDvf/w7RMBKSs249NyW9UZMXRr9kSD9S6VCX579hOzCX9oGswU3SR11Zi/lx1mvMyRc3PjdXQDNp2XML1j0AGUnE5dri6zrS6VH+6vEpaXYte25BG9wk6tLFe3OPMLyOKm6Rc9fgPm1wk6BTIY/hzLe16NGxTLYalAfWiUVvx+yWx2GIJkPa1uEedBncDY2AjU0kK2anQl5sgcwH/Apra91f0XJjsbpWhmYx7uBR5+sswbqGxOlUGJ9hvi17bjGgNY+idyqMy7D45nmn9oeR27/FZFhgV7kAxrSFZcQfOxZDzSi6I8oZB1oAUDcibJgYDJFRnkakpMENFdXHXXaiMyxZM9lvKu2NiuT9A1GNylArXUNg0jGXhY73nY9oDPUyCWgAbwoV1bvt36IwhGssDA5Wy+OujxWBYambq5+zHOGB3EOGqJF1liItWMmS0GD8AcNcshRpwepTh031PsOs+7ZCgYWOfHG7x1CX88tSpIVn0CwHvlUZ4QyRMiq6AUMcsGYNyL4JHUPfJrFQ3lmKtDiJ6nXoOOKH83qjiCxFWmxOoeOF+9Xi5dSKakudGv0VrcZ2keUYcl6YKbYtZjqcshzB0PGm5IAmlyUITAbaG9X3xz9ZOJeXtovs2wqEc+g4OavKQbBUaTmyFGnB+lAh01zt6HKN52dB1W7eoK0qDthihGRpvV730NlCVF5AA1jarF8aImD85NIGgcnQn+o2Pm9ApFvGa734UTjLOTYU25aN9XFQI/m8RHPsOGplAggBAQEBAQEBAQEBAQEBAQEBAQGB/xb+D3MUqOfPNcjvAAAAAElFTkSuQmCC" />
                            <div className="flex-grow sm:pl-8">
                            <h2 className="title-font font-medium text-lg text-gray-900">Simple Bash Shell</h2>
                            <h3 className="text-gray-500 mb-3">Linux shell based clone</h3>
                            <p className="mb-4">An interactive shell that behaves akin to the linux shell, using system calls, 
forking & kernel files of the Linux OS.</p>
                            <span className="inline-flex mb-3">
                                <SocialIcon url="https://github.com/jishnu19048/simple_shell" />
                            </span>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}