function imgColorPicker( imgEl )
{
  const img = document.querySelector( imgEl )
  if(!img)throw new Error("Image not found")
  return {
    listener:function(callback){
      const canvas = document.createElement("canvas")
      canvas.classList.add('getpixel')
      canvas.setAttribute('hidden', 'hidden')
      document.body.appendChild(canvas)
      canvas.width  = parseInt( window.getComputedStyle( img, null ).width )
      canvas.height = parseInt( window.getComputedStyle( img, null ).height )
      canvas.getContext('2d').drawImage( img, 0, 0, canvas.width, canvas.height)
      img.style.position = "relative"
      img.addEventListener("mousemove", _ => callback( canvas.getContext('2d').getImageData( _.layerX, _.layerY, 3, 3).data ) )
    }
  }
}
