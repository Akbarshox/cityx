import React from 'react';
import ParticlesBg from 'particles-bg';
import {useForm} from 'react-hook-form/dist/react-hook-form.ie11'

export default function Contact() {
   let arr = ["color", "cobweb", "polygon"];
   const { register, handleSubmit, watch, errors } = useForm();
   const onSubmit = data => { console.log(data) };
   console.log(watch('example'));
   
   return(
       <div className="container">
          <div className="form-contact">
             <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
                <ul className="form-ul">
                   <li><input type="text" name="name" placeholder="Name" className="input-form" /></li>
                   <li>
                      {errors.email ? <input name="email" type="email" placeholder="Email"
                                 ref={register({ required: true })} className="input-error" />
                        : <input type="email" placeholder="Email" name="email"
                                 ref={register({ required: true })} className="input-form" />
                      }
                   </li>
                   <li>
                      {errors.subject ? <input name="subject" type="subject" placeholder="Subject"
                                             ref={register({ required: true })} className="input-error" />
                          : <input type="subject" placeholder="Subject" name="subject"
                                   ref={register({ required: true })} className="input-form" />
                      }
                   </li>
                </ul>
                <button type="submit" className="button" >
                      <svg width="180px" height="60px" viewBox="0 0 180 60" className="svg-contact">
                         <polyline points="179,1 179,59 1,59 1,1 179,1" />
                         <polyline points="179,1 179,59 1,59 1,1 179,1" />
                      </svg>
                      <span>HOVER ME</span>
                </button>
             </form>
          </div>
          {/*<ParticlesBg type={arr[Math.floor(Math.random()*arr.length)]} bg={true} color="#00f7ce" />*/}
       </div>
   )
}