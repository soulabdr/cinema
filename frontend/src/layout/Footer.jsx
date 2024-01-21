import React from 'react'

export default function Footer() {
  return (
    <div>

        <footer class="py-5 bg-black">
            <div class="container px-5">
              <div className='row justify-content-evenly align-items-center'>
                <div className='col'>
                  <p className='m-1 lead text-center text-white'>in theatre</p>
                  <p className='m-1 lead text-center text-white'>comming Soon</p>
                  <p className='m-1 lead text-center text-white'>cinemas</p>
                </div>
                <div className='col'>
                  <p className='m-1 lead text-center text-white'>E-Bilet</p>
                  <p className='m-1 lead text-center text-white'>Return Transactions </p>
                  <p className='m-1 lead text-center text-white'>sales Agreement</p>
                </div>
              </div>
              <p class="mt-5 text-center text-white small">
                <strong>
                   Copyright &copy; Cinema 2024
                </strong> 
              </p>
            </div>
        </footer>

    </div>
  )
}
