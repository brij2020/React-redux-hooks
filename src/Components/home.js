import React, { Component,useState,useEffect } from "react";
import FilterAction from '../Actions/FilterAction'
import GetUserAction from "../Actions/GetUserAction"
import { Constants } from '../type'
import { useSelector,useDispatch,shallowEqual } from 'react-redux'
import FallBackUI from '../HelperComponents/FallbackUI'
import './home.css'
const Home = () => {

      const dispatch = useDispatch()
      const isLoading = useSelector(state=>state.isLoading)
      const users = useSelector(state=>state.Users) || [];
      const dataStore = useSelector(state=>state.list)
      const filterList = dataStore.length === 0 ?  users:dataStore
      const filterType = ["10","20","50","75","100" ]
      useEffect(()=>{
        GetUserAction()(dispatch)
      },[])

      const doFilter = (num) => {
        FilterAction(users,num)(dispatch)
      }

    return <>
      <div className="container">
            <FallBackUI
              isLoading ={ isLoading}
             />
             <div>
                  <div id="serviceBox">
                    {
                      filterType.map((num,i) => (
                        <div className={`serviceBox${i+1}`} key={ i } >
                            <div className="">
                              <button
                              onClick = { e => doFilter(+num) }
                              >{ num } </button>
                            </div>
                        </div>

                      ))

                    }
                 </div>

             </div>
             <div>

              <ul style={{"listStyleType":"none"}}>
               {
                  Array.isArray(filterList) && filterList.length > 0 ?
                    filterList.slice(0,50).map(el => <li key={`${el.id}`}  > {el.title } </li> )
                  : null

                }
              </ul>


              </div>

        </div>
    </>
  }


export default Home;
