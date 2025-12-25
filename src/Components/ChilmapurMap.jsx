import React from 'react'

function ChilmapurMap() {
  return (
    <div style={{ width: "100%", height: "450px" }}>
      <iframe
        title="Chilmapur Location"
        src="https://www.google.com/maps?q=Chilmapur+Road,+Azad+Nagar,+Gorakhpur,+Uttar+Pradesh,+India/@26.7289129,83.3715318&output=embed"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  )
}
//Chilmapur+Road,+Azad+Nagar,+Gorakhpur,+Uttar+Pradesh,+India/@26.7289129,83.3715318,17z/data=!3m1!4b1!4m6!3m5!1s0x399143838c918d99:0xc9841abfa51308d!8m2!3d26.7289081!4d83.3741067!16s%2Fg%2F1tj837yg?hl=en-US&entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D
export default ChilmapurMap