/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'hero':"url('/public/Images/Hero_img.jpg')",
        'adinaCard':"url('/public/Images/Adina_card.png')",
        'logo':"url('/public/Images/logo.png')",
        'unghii':"url('/public/Images/unghiiCuGel.jpg')",
        'unghii2':"url('/public/Images/unghii2.jpg')",
        'unghii3':"url('/public/Images/unghii3.jpg')",
        'unghii4':"url('/public/Images/unghii4.jpg')",
        'unghii5':"url('/public/Images/unghii5.jpg')",
      },
      fontFamily:{
        'oldStandard': 'Old Standard TT, serif',
        'roboto': 'Roboto, sans-serif',
        'robotoMono':"'Roboto Mono', monospace",
        'montSerrat':"'Montserrat', sans-serif"
      }
    },
    keyframes:{
      appear:{
        '0%':{
          opacity:"0%"
        },
        '50%':{
          opacity:"100%"
        },
        '100%':{
            opacity:"0%"
        }

      },
      disappear:{
        '0%':{
          opacity:"100%"
        },
        '100%':{
            opacity:"0%"
        }

      },
      menuSlideAnimReverse:{
        '0%':{
          top:'0rem'
        },
        '100%':{
          top:'-15rem'
        }

      },
      menuSlideAnim:{
        '0%':{
          top:'-15rem'
        },
        '100%':{
          top:'0rem'
        }

      },
      midArrowAnim:{
        '0%':{
            left:'-0.15rem',
            opacity:"100%",
        },
        '100%':{
            left:'-10rem',
            opacity:'0%'
        }

      },
      midArrowAnimReverse:{
        '0%':{
            
            left:'-10rem',
            opacity:'0%'
        },
        '100%':{
          left:'-.15rem',
          opacity:'100%'
        }

      },
      topArrowAnim:{
        '0%':{
            
            rotate:'0deg',
            top:"0px"
        },
        '100%':{
             rotate:'45deg',
             top:'7.3px'
        }

      },
      topArrowAnimReverse:{
        '0%':{
            
            rotate:'45deg',
            top:'7.3px'
        },
        '100%':{
             rotate:'0deg',
             top:"0px"
        }

      },
      bottomArrowAnim:{
        '0%':{
            
            rotate:'0deg',
            bottom:'0px'
        },
        '100%':{
             rotate:'135deg',
             bottom:'7.3px'
        }

      },
      bottomArrowAnimReverse:{
        '0%':{
            
            rotate:'135deg',
            bottom:'7.3px'
        },
        '100%':{
             rotate:'0deg',
             bottom:'0px'
        }

      },
    }
  },
  plugins: [],
}