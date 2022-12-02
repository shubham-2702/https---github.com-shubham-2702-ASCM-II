import React from 'react'
import {useNavigate,Link} from 'react-router-dom'

const FamerCustomer = (props) => {
  return (
    <div>
        <div  style={{ padding :`10px`}}>
            <div class="row g-2"></div>
            
            <div class="card mb-3" style={{  marginRight:`80px` }}>
            <div class="row g-0">
                                        {/* <div class="col-md-4">
                                            <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBESERgSEREYGBIRGBgYERgYERgYGBgYGBgaGhgYGBgcIS4lHB4rIRgYJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHxISHz0rJSs0ND02NDUxPzQ1NjQ0NDQ0NDQ1NDQ0NDQ3NDQ0NDQ0NDE1NDQ0NDQ0NDQ0NDQ0NDE0NP/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEBAQACAwEAAAAAAAAAAAAAAQIGBwMEBQj/xAA9EAACAQICBgcFBgUFAQAAAAAAAQIDEQQhBQYSMUFRUmFxgZGx0QcTFiKhIzJiksHhM0Ky8PEUY3KCwiT/xAAaAQEAAwEBAQAAAAAAAAAAAAAAAQMEBQIG/8QAMhEBAAECAwUGBAYDAAAAAAAAAAECAwQRIQVRYZGhFBUxQXHREhMywSIzgbHh8FKS0v/aAAwDAQACEQMRAD8A7bAAAkXckmWIFAAAAAAWxGBRYKJUBLCxqwsBmwsasLAZsDViWAySLurhsqQAFIAAAAAjAoIVMCgACGXI00ZjEBFGgAABbACpBIoCxIlDQDeEg2km27JK7bySXFvkjrnW32n06ElT0d7uvPP3lSTm6cGrbKjs295fPOMrK3WB2RY9KWlcKpbDxNFT3bLrQUr9l7nQmntfNIY2n7qrUjCm3eUaMZQ2uqbcm3Hqvbnc4tsLdZW7AP1fHNXWae5rczVj8s4XSOIpRcaOIq04PfGFecIvtjGSR71HWbSEIxjHG19mEozSdaUltRaavtNtrJfK8uoD9LGZO/YdV6n+0ytWxEMNjoQarSUIVYJxanJ2ipxu0020rq1rrJrd2slnnv5ASMS2LYgEsSxoNAYBWQASLKGgD5+ASCAFAAEAAAAqAGkggALYFAEnJRTlJpRim227JJZtt8EaSOtPbTpaUMPSwkJNf6mUp1bcYU7Wi+pylF/9AOIa/wCvE8fOVDDycMFBtJLJ12v55fg6Me955R4SmAQNNcV3rl+xkqZWuK71y/YDJUuL3efUglxe7z6kG7gVTaaabTi04tNpxad0096d87nkpYmSqxrSSnOEoy+02pqTi07Tzu4u1mr5ps8IA791F14p6STpTpqliYRu4p3hOKsnKF81a6vF7rrNnMj8wav6SeExdHEp29zUjKf/AAb2Zrvg5LvP1A0SMkNEAjRGUNAYBWQAAAKAAIAAKipBFAFCKAKkEigU6D9rmM95pWcE8sPTp07cm06j/rXgd+H5q16qbelcXL/elH8iUP8AyB8I7E0B7M51aUamLrSpSmlKNOEE5xT3bbludrfLbLnwXHdQtE/6vSFOMleFH7WpytTa2V3zcMuVzvkqrry0hZRRE6y6j0n7L8VCX/zVqdSH4705rqyUoy7brsPSp+zfSd840kubrr9IvyO6QePmVPfy6XVNH2VV5JOpjKcJWzjClOaXZJyjfwPXr+yzGKdoYihKHSltwl+RRl5nbwHzKk/LpdQ1vZdjVG8K9CUui3OPhLZZwzSWjq2GqOjiKbhUjm4u2ae6UWspRdnmuT5H6ROH+0zQ8cRgZVlFe9wqdSEuOwv4kezZ+a3OCPVNyc9Xmq3GWjpKavFrmmfqfRFf3mGo1L395Spzvz2oxf6n5ZbP07qtSdPR+FhL70MNQi+2NKCfkXKX1GiGiNAZIaIwIzLNEYGQUgFAAEKiADaKjKj2mosClREaQAAoA/NOu0NnSeLX+/N/me1+p+lz84e0ihKnpfFKz+aUZx61OnBq3e2gOe+ynRPusHLEyXz4qXy5Z+7g3GPjLbl2NHOUz09D0lTwtGEVZQpU4pdkIo9wyzrObTTpGSgAh6AAAPHiKMakJQl92cZQl2STT8zyBBD8xYinKEZQl96G1GX/ACjdP6pn6xowUYRit0YpLuVj824zCuekZUJ00lXxUoR2Uk7TruKd125o/StzWyhCkAjIaMgRkZWGBhki7kbKkBQAACCLYClSIkaQFRSIoFQBQB097XMHBYmli1a04e6qOUVs/I3NWvxcZS7oO2e/t+cbpo4Lr/g41tG1oSjdr3bj1NVIK67m13s8VVZTD1TTnEvtaNX2FO+/3cP6Ee0GgZ2gAASAAAIuwMhDgeC0Op6fnUnH5MPJ1oJc5wjJSfXtzTS/D4dqQaautzOI6MwyWMxlW2c5UIJ/hhQhPLvqM5VhlaEf74l9FWc5Ka6cozeUMpCxWhGUMDDMSdzc1ciXiBlRDNMywAAAI0jKNoAioiKgNIAoApCgVHwtL4RVY1KTyVRNX5N5p+Nj7p6OMotvair332K7kaPdudXqMAFDQAAAAAAAAzCCu7Kzm05dbso3fcku4+1Y+fhaLck2slnfyPol9qNM1FydckIUhYrCMpAMsjKRgRmWbZhgAAARtGEaQFRURFQGikQApSFAoAA+RUVpNcm/MyexjKdpX4S8+J65lmMpyaaZzjMABD0AAAQp5KFPaklw49gR4PpU1aKXJLyNgGtlQhSACFIBkjKyMAzDNMywAAAI0jJUBSwlfgYcjcEBtAiKBSkQApSEbAxiIpxafK/ej5MZXVz69RfK+x+R8CMrbii9OUwvta5vaBiE0zZUsADMpJbyRWz6GBS2VLjK/wBHZHx5zufZwD+yj3+bPVqc6ni7GVL2WzMXdbrGW7/oaijSzqQpGBAwRgRkZTDzArMsNEuBQABCOVytCK5gaijSIioCo0jJUBSkKBTK/wAFPDiMTCC+Z58Et/7ETMRrKYjPwaru0JN8mfBPNXxMpvPJcF682eEyXa4qnRpt0fDGoeRVWeMFeax5HVZhu5AAPq6Plemlyby77nyWjy0a0oS2k8+PX2nu3V8M5vFdPxRk+8kU9bD4yE8t0uT/AEZ7BsiYnWGWYmJykIUhKAyVkAhlfU0zMkBGQpAKAAIUgA0imUaQGkD42k9YsNQvFz2qi/ljnZ/ie5eZxXH63YipdU7Uk+jm++T/AERptYS7c1iMo3zox38fYs6TOc7o1/iHPsVi6VJXqzUVwvJK/YuJx/G654aH8KLqPh/IvF5/Q4DVnKT2pSbb3uTbb7WzDN9vZ1EfXOfT+XKvbXu1aW4iOs+3SXL8LrfUqT2aqUIS3OKeXa73t2WPsKV873vne979dzrc+tovTU6Pyy+anyvnHsf9oz43Znxx8dnx3eU+m6ek+vjo2ftj4J+DEeH+W714cY8PTw5kDw4XF06sdqEr81ua7uB5jgVUzTM01RlMPpqaoqiKqZzifOAAEJAAAAMVq0YR2pyUYrjf+7jLPSETMRGctny9Ja0SoPYpfPJP573kl1Kzv9cvL5WldPOd4UrxjxlxfZy8z4B3cDsyYn5l7/X39ue587tHbETHy8PPrV7f9ct7neB12pSyrUpQ/FF3j4OzX1ORYPSVGuvsqqk+W6S7U80dRGk87r7y3P8Avibbmz7dX0zl1j36sNna16nSuIq6T006O5SHW2A1oxVGylPbj0Z5u3U9/wBWcp0ZrXh6tozfupvm7x7pf4Ofdwd23rlnHB1bG0bF3TPKd06dfDq++RjaTV1mnuZGZW4IABQABAAAOE63abk6jw9KbjGOVRxdm3xV1wW63O5yvSmMVCjOpxisutvKP1aOqW2223dvNvm2dHZ9iKqpuVeXh6/393I2riZopi1T5+Pp/P2y3oVAHXfO+C3v2kBd/aEoACUN0qsoS2oScZLc72Z9zB6yTWVWCkuLvsvv5nwCFF7D2r0ZXKc/35+PVpw+LvYec7VWX7cp0c1o6dw0t82nycX5q6PdjiqT3VI/mXqdfJEZz69j2p+mqY5T7OrRt69H10RPpnHv9nYbxVNb6kfzL1PUr6aw8N9S75JPz3fU4PYu/t8yKdjWon8VUzyj3TXt+7MfgoiPWZn2cjxWs3ClD/tKV34fufCxOJnUltTk5Pre7sW5HhB0LGFs2Py6cuPnz/sOXiMbfxP5tWcbvCOUfcABoZAbhuBCV39vn+5kpd/b5g8X2dXtOSw04xlJuhJ2knmlfiuVt/Wdj3vmuO46dOyNUsd77Cxu/npPYfZvT/TuOZtCzGl2P19/d3NkYmZmbNXrH3j7x+r7QAOU7igACAADiuveLtThST++3KXYsl9W/A4Ojs3SmgaeImp1JSukkkmtmybfFN3zPQWpuH6dTxXodTDYqzatRTOefo4mNwF+/emuMsvLXy/ubgTIc++DMP06nivQfBmH6dTxXoaO32ePJk7pxHDm4CDn3wZhunU8V6F+DMN06nivQdvs8eR3TiOHNwFsHP8A4Mw3TqeK9A9TML06vivQdvsb55HdOI4c3AIq+SFrbzn8dT8Ot06l+GcfQr1Nwzd3Opd9a9CO32ePJPdOI4c3X7YOf/BeF6dXxXoX4Lw3Tq/mXoT2+xv6I7pxHDm6/Idg/BeG6dX8y9CfBeF6dXxXoO32N/Q7pxHDm4A2Dn/wXhenV8V6COpuGTynU6s19Mh2+zv6HdOI4c3X5UzsF6n4fc6lR9rj57J41qbhunV/MvQdvs8eSZ2TiPLLm4CDn/wZhunU8V6E+DMN06nivQdvs8eSO6cRw5uAg598GYfp1PFeg+DMP06nivQdvs8eR3TiOHNwJs5NqNitmvKm3/Fj8vbHNebPr/BmH6dTxXoebB6sUaNSNSE6m1B3V2rcmnZbrXKr2Ms3LdVOusbvPy6r8Ns/EWbtNzTSd/l59H3ZPlvKjCRs5DvqAAIQoaAX59wQSAAAACkAFuZ2itEigNRRq5kXA1cpi4uBslzNxcDVzKYuRgW4IgBSAAAABGzKz/U01cqAJAACgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/2Q==" width="140" height="140" class="img-fluid rounded-start" alt="" />
                                        </div> */}
                                        <div >
                                            <div class="card-body">
                                                <h5 class="card-title">Farmer Name: {props.details.name}</h5>
                                                <p class="card-text">Address: {props.details.address}</p>

                                                <p class="card-text">Location: {props.details.location}</p>
                                                 <Link to="/ViewProduct" state={{ details: props.details }}>ViewProducts  </Link> 

                                            </div>
                                           
                                        </div>

            </div>
                                
            </div>
        
                               
        </div>
    
    </div>
  )
}

export default FamerCustomer