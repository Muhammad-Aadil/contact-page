import styles from './HeroSection.module.css'
const HeroSection = () => {
  return (
    <>
    <div className={styles.back}>
        <h1>Contact Us</h1>
        <p>LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU! WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT , YOU CAN REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE, EMAIL, OR SOCIAL MEDIA. </p>
    </div>
    {/* <div className='hero-main'>
        <div>
        <div className='primary-button'>

        <button>via chat support</button>
        <button> via call</button>
        </div>
        <button>via email form</button> 
        <form action="">
            <label htmlFor="name">Name</label>
            <input type="text" id='name'/>
            <label htmlFor="email">Email</label>
            <input type="text" id="email"/>
            <label htmlFor="text">Text</label>
            <textarea name="" id="" cols="30" rows="10"></textarea>
        </form>
        </div>
        <div>
            <img src="./public/images/service.svg" alt="service img" />
        </div>
    </div> */}
    </>
  )
}

export default HeroSection