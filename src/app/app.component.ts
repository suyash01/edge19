import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <particles [params]="myParams" [style]="myStyle" [width]="width" [height]="height"></particles>
    <app-logos></app-logos>
    <router-outlet></router-outlet>
    <ngx-smart-modal #myModal identifier="myModal" customClass="nsm-dialog-animation-fade">
      <div [innerHTML]="myModal.getData()"></div>
    </ngx-smart-modal>
  `,
  styles: []
})

export class AppComponent implements OnInit {

  myStyle: object = {};
	myParams: object = {};
	width: number = 100;
  height: number = 100;

  ngOnInit(){

    this.myStyle = {
      'position': 'fixed',
      'width': '100%',
      'height': '100%',
      'z-index': -1,
      'background-color': 'rgb(26,26,26)',
      'top': 0,
      'left': 0,
      'right': 0,
      'bottom': 0,
    };

    this.myParams = {
      particles: {
        fps_limit: 30,
        number: {
          value: 50,
          density: {
            enable: false,
            value_area: 800
          }
        },
        color: {
          value: "#fff"
        },
        shape: {
          type: "star",
          stroke: {
            width: 0,
            color: "#000000"
          },
          polygon: {
            nb_sides: 5
          },
          image: {
            src: "img/github.svg",
            width: 100,
            height: 100
          }
        },
        opacity: {
          value: 0.5,
          random: true,
          anim: {
            enable: false,
            speed: 1,
            opacity_min: 0.1,
            sync: false
          }
        },
        size: {
          value: 4,
          random: true,
          anim: {
            enable: false,
            speed: 40,
            size_min: 0.1,
            sync: false
          }
        },
        line_linked: {
          enable: false,
          distance: 500,
          color: "#ffffff",
          opacity: 0.4,
          width: 2
        },
        move: {
          enable: true,
          speed: 1,
          direction: "bottom",
          random: false,
          straight: false,
          out_mode: "out",
          bounce: false,
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 600
          }
        }
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: {
            enable: false,
            mode: "bubble"
          },
          onclick: {
            enable: false,
            mode: "repulse"
          },
          resize: true
        },
        modes: {
          grab: {
            distance: 400,
            line_linked: {
              opacity: 1
            }
          },
          bubble: {
            distance: 200,
            size: 0,
            duration: 2,
            opacity: 0,
            speed: 3
          },
          repulse: {
            distance: 400,
            duration: 0.4
          },
          push: {
            particles_nb: 4
          },
          remove: {
            particles_nb: 2
          }
        }
      },
      retina_detect: false
    }
  }  
}
