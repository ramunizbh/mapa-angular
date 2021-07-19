import { Injectable } from "@angular/core";
import { IRegion } from './region';

@Injectable(
  {
    providedIn: 'root'
  }
)
export class RegionService{

  getRegion(): IRegion[] {
    return [{
      "code": 1,
      "name": "Localidade 1",
      "idLoc": 101,
      "imgUrl": "assets/images/info.png",
      "status": 1,
      "obras": [{
          "desc": "Mina",
          "const": 44.5,
          "status": 28.3,
          "prazo": 100,
          "custo": 72
          },
          {
            "desc": "Usina",
            "const": 74.5,
            "status": 38.3,
            "prazo": 100,
            "custo": 82
          },
          {
            "desc": "Fábrica",
            "const": 64.5,
            "status": 78.3,
            "prazo": 100,
            "custo": 72
          }]
    },
    {
      "code": 1,
      "name": "Localidade 2",
      "idLoc": 102,
      "imgUrl": "assets/images/info.png",
      "status": 1,
      "obras": [{
        "desc": "Mina",
        "const": 64.5,
        "status": 28.3,
        "prazo": 100,
        "custo": 72
        },
        {
          "desc": "Usina",
          "const": 74.5,
          "status": 38.3,
          "prazo": 100,
          "custo": 82
        }]
    },
    {
      "code": 1,
      "name": "Localidade 3",
      "idLoc": 103,
      "imgUrl": "assets/images/info.png",
      "status": 1,
      "obras": [{
        "desc": "Mina",
        "const": 64.5,
        "status": 28.3,
        "prazo": 100,
        "custo": 72
        },
        {
          "desc": "Usina",
          "const": 74.5,
          "status": 38.3,
          "prazo": 100,
          "custo": 82
        }]
    },
    {
      "code": 1,
      "name": "Localidade 4",
      "idLoc": 104,
      "imgUrl": "assets/images/ok.png",
      "status": 0,
      "obras": [{
        "desc": "Mina",
        "const": 64.5,
        "status": 28.3,
        "prazo": 100,
        "custo": 72
        },
        {
          "desc": "Usina",
          "const": 74.5,
          "status": 38.3,
          "prazo": 100,
          "custo": 82
        }]
    },
    {
      "code": 1,
      "name": "Localidade 5",
      "idLoc": 105,
      "imgUrl": "assets/images/ok.png",
      "status": 0,
      "obras": [{
        "desc": "Mina",
        "const": 64.5,
        "status": 28.3,
        "prazo": 100,
        "custo": 72
        },
        {
          "desc": "Usina",
          "const": 74.5,
          "status": 38.3,
          "prazo": 100,
          "custo": 82
        }]
    },
    {
      "code": 2,
      "name": "Localidade 1",
      "idLoc": 201,
      "imgUrl": "assets/images/info.png",
      "status": 1,
      "obras": [{
        "desc": "Mina",
        "const": 64.5,
        "status": 28.3,
        "prazo": 100,
        "custo": 72
        },
        {
          "desc": "Usina",
          "const": 74.5,
          "status": 38.3,
          "prazo": 100,
          "custo": 82
        }]
    },
    {
      "code": 2,
      "name": "Localidade 2",
      "idLoc": 202,
      "imgUrl": "assets/images/info.png",
      "status": 1,
      "obras": [{
        "desc": "Mina",
        "const": 64.5,
        "status": 28.3,
        "prazo": 100,
        "custo": 72
        },
        {
          "desc": "Usina",
          "const": 74.5,
          "status": 38.3,
          "prazo": 100,
          "custo": 82
        }]
    },
    {
      "code": 2,
      "name": "Localidade 3",
      "idLoc": 203,
      "imgUrl": "assets/images/info.png",
      "status": 1,
      "obras": [{
        "desc": "Mina",
        "const": 64.5,
        "status": 28.3,
        "prazo": 100,
        "custo": 72
        },
        {
          "desc": "Usina",
          "const": 74.5,
          "status": 38.3,
          "prazo": 100,
          "custo": 82
        }]
    },
    {
      "code": 2,
      "name": "Localidade 4",
      "idLoc": 204,
      "imgUrl": "assets/images/info.png",
      "status": 1,
      "obras": [{
        "desc": "Mina",
        "const": 64.5,
        "status": 28.3,
        "prazo": 100,
        "custo": 72
        },
        {
          "desc": "Usina",
          "const": 74.5,
          "status": 38.3,
          "prazo": 100,
          "custo": 82
        }]
    },
    {
      "code": 2,
      "name": "Localidade 5",
      "idLoc": 205,
      "imgUrl": "assets/images/ok.png",
      "status": 0,
      "obras": [{
        "desc": "Mina",
        "const": 64.5,
        "status": 28.3,
        "prazo": 100,
        "custo": 72
        },
        {
          "desc": "Usina",
          "const": 74.5,
          "status": 38.3,
          "prazo": 100,
          "custo": 82
        }]
    },
    {
      "code": 2,
      "name": "Localidade 6",
      "idLoc": 206,
      "imgUrl": "assets/images/ok.png",
      "status": 0,
      "obras": [{
        "desc": "Mina",
        "const": 64.5,
        "status": 28.3,
        "prazo": 100,
        "custo": 72
        },
        {
          "desc": "Usina",
          "const": 74.5,
          "status": 38.3,
          "prazo": 100,
          "custo": 82
        }]
    },
    {
      "code": 2,
      "name": "Localidade 7",
      "idLoc": 207,
      "imgUrl": "assets/images/ok.png",
      "status": 0,
      "obras": [{
        "desc": "Mina",
        "const": 64.5,
        "status": 28.3,
        "prazo": 100,
        "custo": 72
        },
        {
          "desc": "Usina",
          "const": 74.5,
          "status": 38.3,
          "prazo": 100,
          "custo": 82
        }]
    },
    {
      "code": 2,
      "name": "Localidade 8",
      "idLoc": 208,
      "imgUrl": "assets/images/ok.png",
      "status": 0,
      "obras": [{
        "desc": "Mina",
        "const": 64.5,
        "status": 28.3,
        "prazo": 100,
        "custo": 72
        },
        {
          "desc": "Usina",
          "const": 74.5,
          "status": 38.3,
          "prazo": 100,
          "custo": 82
        }]
    },
    {
      "code": 2,
      "name": "Localidade 9",
      "idLoc": 209,
      "imgUrl": "assets/images/ok.png",
      "status": 0,
      "obras": [{
        "desc": "Mina",
        "const": 64.5,
        "status": 28.3,
        "prazo": 100,
        "custo": 72
        },
        {
          "desc": "Usina",
          "const": 74.5,
          "status": 38.3,
          "prazo": 100,
          "custo": 82
        }]
    },
    {
      "code": 2,
      "name": "Localidade 10",
      "idLoc": 210,
      "imgUrl": "assets/images/ok.png",
      "status": 0,
      "obras": [{
        "desc": "Mina",
        "const": 64.5,
        "status": 28.3,
        "prazo": 100,
        "custo": 72
        },
        {
          "desc": "Usina",
          "const": 64.5,
          "status": 68.3,
          "prazo": 90,
          "custo": 82
        }]
    },
    {
      "code": 3,
      "name": "Localidade 1",
      "idLoc": 301,
      "imgUrl": "assets/images/ok.png",
      "status": 0,
      "obras": [{
        "desc": "Mina",
        "const": 24.5,
        "status": 38.3,
        "prazo": 100,
        "custo": 62
        },
        {
          "desc": "Usina",
          "const": 75.5,
          "status": 42.3,
          "prazo": 90,
          "custo": 67
        }]
  },
  {
    "code": 4,
    "name": "Localidade 1",
    "idLoc": 401,
    "imgUrl": "assets/images/info.png",
    "status": 1,
    "obras": [{
      "desc": "Mina",
      "const": 64.5,
      "status": 28.3,
      "prazo": 100,
      "custo": 72
      },
      {
        "desc": "Usina",
        "const": 74.5,
        "status": 38.3,
        "prazo": 100,
        "custo": 82
      }]
  },
  {
    "code": 4,
    "name": "Localidade 2",
    "idLoc": 402,
    "imgUrl": "assets/images/info.png",
    "status": 1,
    "obras": [{
      "desc": "Mina",
      "const": 64.5,
      "status": 28.3,
      "prazo": 100,
      "custo": 72
      },
      {
        "desc": "Usina",
        "const": 74.5,
        "status": 38.3,
        "prazo": 100,
        "custo": 82
      }]
  },
  {
    "code": 4,
    "name": "Localidade 3",
    "idLoc": 403,
    "imgUrl": "assets/images/info.png",
    "status": 1,
    "obras": [{
      "desc": "Mina",
      "const": 64.5,
      "status": 28.3,
      "prazo": 100,
      "custo": 72
      },
      {
        "desc": "Usina",
        "const": 74.5,
        "status": 38.3,
        "prazo": 100,
        "custo": 82
      }]
  },
  {
    "code": 4,
    "name": "Localidade 4",
    "idLoc": 404,
    "imgUrl": "assets/images/info.png",
    "status": 1,
    "obras": [{
      "desc": "Mina",
      "const": 64.5,
      "status": 28.3,
      "prazo": 100,
      "custo": 72
      },
      {
        "desc": "Usina",
        "const": 74.5,
        "status": 38.3,
        "prazo": 100,
        "custo": 82
      }]
  },
  {
    "code": 4,
    "name": "Localidade 5",
    "idLoc": 405,
    "imgUrl": "assets/images/info.png",
    "status": 1,
    "obras": [{
      "desc": "Mina",
      "const": 64.5,
      "status": 28.3,
      "prazo": 100,
      "custo": 72
      },
      {
        "desc": "Usina",
        "const": 74.5,
        "status": 38.3,
        "prazo": 100,
        "custo": 82
      }]
  },
  {
    "code": 4,
    "name": "Localidade 6",
    "idLoc": 406,
    "imgUrl": "assets/images/info.png",
    "status": 1,
    "obras": [{
      "desc": "Mina",
      "const": 64.5,
      "status": 28.3,
      "prazo": 100,
      "custo": 72
      },
      {
        "desc": "Usina",
        "const": 74.5,
        "status": 38.3,
        "prazo": 100,
        "custo": 82
      }]
  },
  {
    "code": 4,
    "name": "Localidade 7",
    "idLoc": 407,
    "imgUrl": "assets/images/info.png",
    "status": 1,
    "obras": [{
      "desc": "Mina",
      "const": 64.5,
      "status": 28.3,
      "prazo": 100,
      "custo": 72
      },
      {
        "desc": "Usina",
        "const": 74.5,
        "status": 38.3,
        "prazo": 100,
        "custo": 82
      }]
  },
  {
    "code": 4,
    "name": "Localidade 8",
    "idLoc": 408,
    "imgUrl": "assets/images/info.png",
    "status": 1,
    "obras": [{
      "desc": "Mina",
      "const": 64.5,
      "status": 28.3,
      "prazo": 100,
      "custo": 72
      },
      {
        "desc": "Usina",
        "const": 74.5,
        "status": 38.3,
        "prazo": 100,
        "custo": 82
      }]
  },
  {
    "code": 4,
    "name": "Localidade 9",
    "idLoc": 409,
    "imgUrl": "assets/images/ok.png",
    "status": 0,
    "obras": [{
      "desc": "Mina",
      "const": 64.5,
      "status": 28.3,
      "prazo": 100,
      "custo": 72
      },
      {
        "desc": "Usina",
        "const": 74.5,
        "status": 38.3,
        "prazo": 100,
        "custo": 82
      }]
  },
  {
    "code": 4,
    "name": "Localidade 10",
    "idLoc": 410,
    "imgUrl": "assets/images/ok.png",
    "status": 0,
    "obras": [{
      "desc": "Mina",
      "const": 64.5,
      "status": 28.3,
      "prazo": 100,
      "custo": 72
      },
      {
        "desc": "Usina",
        "const": 64.5,
        "status": 68.3,
        "prazo": 90,
        "custo": 82
      }]
  },
  {
    "code": 4,
    "name": "Localidade 11",
    "idLoc": 411,
    "imgUrl": "assets/images/ok.png",
    "status": 0,
    "obras": [{
      "desc": "Mina",
      "const": 64.5,
      "status": 28.3,
      "prazo": 100,
      "custo": 72
      },
      {
        "desc": "Usina",
        "const": 64.5,
        "status": 68.3,
        "prazo": 90,
        "custo": 82
      }]
  },
  {
    "code": 4,
    "name": "Localidade 12",
    "idLoc": 412,
    "imgUrl": "assets/images/ok.png",
    "status": 0,
    "obras": [{
      "desc": "Mina",
      "const": 64.5,
      "status": 28.3,
      "prazo": 100,
      "custo": 72
      },
      {
        "desc": "Usina",
        "const": 64.5,
        "status": 68.3,
        "prazo": 90,
        "custo": 82
      }]
  },
  {
    "code": 4,
    "name": "Localidade 13",
    "idLoc": 413,
    "imgUrl": "assets/images/ok.png",
    "status": 0,
    "obras": [{
      "desc": "Mina",
      "const": 64.5,
      "status": 28.3,
      "prazo": 100,
      "custo": 72
      },
      {
        "desc": "Usina",
        "const": 64.5,
        "status": 68.3,
        "prazo": 90,
        "custo": 82
      }]
  },
  {
    "code": 5,
    "name": "Localidade 1",
    "idLoc": 513,
    "imgUrl": "assets/images/ok.png",
    "status": 0,
    "obras": [{
      "desc": "Mina",
      "const": 64.5,
      "status": 28.3,
      "prazo": 100,
      "custo": 72
      },
      {
        "desc": "Usina",
        "const": 64.5,
        "status": 68.3,
        "prazo": 90,
        "custo": 82
      }]
  },
  {
    "code": 6,
    "name": "Localidade 1",
    "idLoc": 601,
    "imgUrl": "assets/images/ok.png",
    "status": 0,
    "obras": [{
      "desc": "Mina",
      "const": 64.5,
      "status": 28.3,
      "prazo": 100,
      "custo": 72
      },
      {
        "desc": "Usina",
        "const": 74.5,
        "status": 38.3,
        "prazo": 100,
        "custo": 82
      }]
  },
  {
    "code": 6,
    "name": "Localidade 2",
    "idLoc": 602,
    "imgUrl": "assets/images/ok.png",
    "status": 0,
    "obras": [{
      "desc": "Mina",
      "const": 64.5,
      "status": 28.3,
      "prazo": 100,
      "custo": 72
      },
      {
        "desc": "Usina",
        "const": 74.5,
        "status": 38.3,
        "prazo": 100,
        "custo": 82
      }]
  },
  {
    "code": 6,
    "name": "Localidade 3",
    "idLoc": 603,
    "imgUrl": "assets/images/ok.png",
    "status": 0,
    "obras": [{
      "desc": "Mina",
      "const": 64.5,
      "status": 28.3,
      "prazo": 100,
      "custo": 72
      },
      {
        "desc": "Usina",
        "const": 74.5,
        "status": 38.3,
        "prazo": 100,
        "custo": 82
      }]
  },
  {
    "code": 6,
    "name": "Localidade 4",
    "idLoc": 604,
    "imgUrl": "assets/images/ok.png",
    "status": 0,
    "obras": [{
      "desc": "Mina",
      "const": 64.5,
      "status": 28.3,
      "prazo": 100,
      "custo": 72
      },
      {
        "desc": "Usina",
        "const": 74.5,
        "status": 38.3,
        "prazo": 100,
        "custo": 82
      }]
  },
  {
    "code": 6,
    "name": "Localidade 5",
    "idLoc": 605,
    "imgUrl": "assets/images/ok.png",
    "status": 0,
    "obras": [{
      "desc": "Mina",
      "const": 64.5,
      "status": 28.3,
      "prazo": 100,
      "custo": 72
      },
      {
        "desc": "Usina",
        "const": 74.5,
        "status": 38.3,
        "prazo": 100,
        "custo": 82
      }]
  },
  {
    "code": 6,
    "name": "Localidade 6",
    "idLoc": 606,
    "imgUrl": "assets/images/ok.png",
    "status": 0,
    "obras": [{
      "desc": "Mina",
      "const": 64.5,
      "status": 28.3,
      "prazo": 100,
      "custo": 72
      },
      {
        "desc": "Usina",
        "const": 74.5,
        "status": 38.3,
        "prazo": 100,
        "custo": 82
      }]
  },
  {
    "code": 6,
    "name": "Localidade 7",
    "idLoc": 607,
    "imgUrl": "assets/images/ok.png",
    "status": 0,
    "obras": [{
      "desc": "Mina",
      "const": 64.5,
      "status": 28.3,
      "prazo": 100,
      "custo": 72
      },
      {
        "desc": "Usina",
        "const": 74.5,
        "status": 38.3,
        "prazo": 100,
        "custo": 82
      }]
  },
  {
    "code": 6,
    "name": "Localidade 8",
    "idLoc": 608,
    "imgUrl": "assets/images/ok.png",
    "status": 0,
    "obras": [{
      "desc": "Mina",
      "const": 64.5,
      "status": 28.3,
      "prazo": 100,
      "custo": 72
      },
      {
        "desc": "Usina",
        "const": 74.5,
        "status": 38.3,
        "prazo": 100,
        "custo": 82
      }]
  },
  {
    "code": 6,
    "name": "Localidade 9",
    "idLoc": 609,
    "imgUrl": "assets/images/ok.png",
    "status": 0,
    "obras": [{
      "desc": "Mina",
      "const": 64.5,
      "status": 28.3,
      "prazo": 100,
      "custo": 72
      },
      {
        "desc": "Usina",
        "const": 74.5,
        "status": 38.3,
        "prazo": 100,
        "custo": 82
      }]
  },
  {
    "code": 6,
    "name": "Localidade 10",
    "idLoc": 610,
    "imgUrl": "assets/images/ok.png",
    "status": 0,
    "obras": [{
      "desc": "Mina",
      "const": 64.5,
      "status": 28.3,
      "prazo": 100,
      "custo": 72
      },
      {
        "desc": "Usina",
        "const": 64.5,
        "status": 68.3,
        "prazo": 90,
        "custo": 82
      }]
  },
  {
    "code": 6,
    "name": "Localidade 11",
    "idLoc": 611,
    "imgUrl": "assets/images/ok.png",
    "status": 0,
    "obras": [{
      "desc": "Mina",
      "const": 64.5,
      "status": 28.3,
      "prazo": 100,
      "custo": 72
      },
      {
        "desc": "Usina",
        "const": 64.5,
        "status": 68.3,
        "prazo": 90,
        "custo": 82
      }]
  },
  {
    "code": 6,
    "name": "Localidade 12",
    "idLoc": 612,
    "imgUrl": "assets/images/ok.png",
    "status": 0,
    "obras": [{
      "desc": "Mina",
      "const": 64.5,
      "status": 28.3,
      "prazo": 100,
      "custo": 72
      },
      {
        "desc": "Usina",
        "const": 64.5,
        "status": 68.3,
        "prazo": 90,
        "custo": 82
      }]
  },
  {
    "code": 6,
    "name": "Localidade 13",
    "idLoc": 613,
    "imgUrl": "assets/images/ok.png",
    "status": 0,
    "obras": [{
      "desc": "Mina",
      "const": 64.5,
      "status": 28.3,
      "prazo": 100,
      "custo": 72
      },
      {
        "desc": "Usina",
        "const": 64.5,
        "status": 68.3,
        "prazo": 90,
        "custo": 82
      }]
  },
  {
    "code": 8,
    "name": "Localidade 1",
    "idLoc": 801,
    "imgUrl": "assets/images/info.png",
    "status": 1,
    "obras": [{
      "desc": "Mina",
      "const": 64.5,
      "status": 28.3,
      "prazo": 100,
      "custo": 72
      },
      {
        "desc": "Usina",
        "const": 74.5,
        "status": 38.3,
        "prazo": 100,
        "custo": 82
      }]
  },
  {
    "code": 8,
    "name": "Localidade 2",
    "idLoc": 802,
    "imgUrl": "assets/images/ok.png",
    "status": 0,
    "obras": [{
      "desc": "Mina",
      "const": 64.5,
      "status": 28.3,
      "prazo": 100,
      "custo": 72
      },
      {
        "desc": "Usina",
        "const": 74.5,
        "status": 38.3,
        "prazo": 100,
        "custo": 82
      }]
  },
  {
    "code": 8,
    "name": "Localidade 3",
    "idLoc": 803,
    "imgUrl": "assets/images/ok.png",
    "status": 0,
    "obras": [{
      "desc": "Mina",
      "const": 64.5,
      "status": 28.3,
      "prazo": 100,
      "custo": 72
      },
      {
        "desc": "Usina",
        "const": 74.5,
        "status": 38.3,
        "prazo": 100,
        "custo": 82
      }]
  },
  {
    "code": 8,
    "name": "Localidade 4",
    "idLoc": 804,
    "imgUrl": "assets/images/ok.png",
    "status": 0,
    "obras": [{
      "desc": "Mina",
      "const": 64.5,
      "status": 28.3,
      "prazo": 100,
      "custo": 72
      },
      {
        "desc": "Usina",
        "const": 74.5,
        "status": 38.3,
        "prazo": 100,
        "custo": 82
      }]
  },
  {
    "code": 8,
    "name": "Localidade 5",
    "idLoc": 805,
    "imgUrl": "assets/images/ok.png",
    "status": 0,
    "obras": [{
      "desc": "Mina",
      "const": 64.5,
      "status": 28.3,
      "prazo": 100,
      "custo": 72
      },
      {
        "desc": "Usina",
        "const": 74.5,
        "status": 38.3,
        "prazo": 100,
        "custo": 82
      }]
  },
  {
    "code": 9,
    "name": "Localidade 1",
    "idLoc": 901,
    "imgUrl": "assets/images/ok.png",
    "status": 0,
    "obras": [{
      "desc": "Mina",
      "const": 64.5,
      "status": 28.3,
      "prazo": 100,
      "custo": 72
      },
      {
        "desc": "Usina",
        "const": 74.5,
        "status": 38.3,
        "prazo": 100,
        "custo": 82
      }]
  },
  {
    "code": 9,
    "name": "Localidade 2",
    "idLoc": 902,
    "imgUrl": "assets/images/ok.png",
    "status": 0,
    "obras": [{
      "desc": "Mina",
      "const": 64.5,
      "status": 28.3,
      "prazo": 100,
      "custo": 72
      },
      {
        "desc": "Usina",
        "const": 74.5,
        "status": 38.3,
        "prazo": 100,
        "custo": 82
      }]
  },
  {
    "code": 9,
    "name": "Localidade 3",
    "idLoc": 903,
    "imgUrl": "assets/images/ok.png",
    "status": 0,
    "obras": [{
      "desc": "Mina",
      "const": 64.5,
      "status": 28.3,
      "prazo": 100,
      "custo": 72
      },
      {
        "desc": "Usina",
        "const": 74.5,
        "status": 38.3,
        "prazo": 100,
        "custo": 82
      }]
  },
  {
    "code": 10,
    "name": "Localidade 1",
    "idLoc": 1001,
    "imgUrl": "assets/images/info.png",
    "status": 1,
    "obras": [{
      "desc": "Mina",
      "const": 64.5,
      "status": 28.3,
      "prazo": 100,
      "custo": 72
      },
      {
        "desc": "Usina",
        "const": 74.5,
        "status": 38.3,
        "prazo": 100,
        "custo": 82
      }]
  },
  {
    "code": 10,
    "name": "Localidade 2",
    "idLoc": 1002,
    "imgUrl": "assets/images/info.png",
    "status": 1,
    "obras": [{
      "desc": "Mina",
      "const": 64.5,
      "status": 28.3,
      "prazo": 100,
      "custo": 72
      },
      {
        "desc": "Usina",
        "const": 74.5,
        "status": 38.3,
        "prazo": 100,
        "custo": 82
      }]
  },
  {
    "code": 10,
    "name": "Localidade 3",
    "idLoc": 1003,
    "imgUrl": "assets/images/info.png",
    "status": 1,
    "obras": [{
      "desc": "Mina",
      "const": 64.5,
      "status": 28.3,
      "prazo": 100,
      "custo": 72
      },
      {
        "desc": "Usina",
        "const": 74.5,
        "status": 38.3,
        "prazo": 100,
        "custo": 82
      }]
  },
  {
    "code": 10,
    "name": "Localidade 4",
    "idLoc": 1004,
    "imgUrl": "assets/images/ok.png",
    "status": 0,
    "obras": [{
      "desc": "Mina",
      "const": 64.5,
      "status": 28.3,
      "prazo": 100,
      "custo": 72
      },
      {
        "desc": "Usina",
        "const": 74.5,
        "status": 38.3,
        "prazo": 100,
        "custo": 82
      }]
  },
  {
    "code": 10,
    "name": "Localidade 5",
    "idLoc": 1005,
    "imgUrl": "assets/images/ok.png",
    "status": 0,
    "obras": [{
      "desc": "Mina",
      "const": 64.5,
      "status": 28.3,
      "prazo": 100,
      "custo": 72
      },
      {
        "desc": "Usina",
        "const": 74.5,
        "status": 38.3,
        "prazo": 100,
        "custo": 82
      }]
  },
  {
    "code": 10,
    "name": "Localidade 6",
    "idLoc": 1006,
    "imgUrl": "assets/images/ok.png",
    "status": 0,
    "obras": [{
      "desc": "Mina",
      "const": 54.5,
      "status": 28.3,
      "prazo": 100,
      "custo": 72
      },
      {
        "desc": "Usina",
        "const": 74.5,
        "status": 38.3,
        "prazo": 100,
        "custo": 82
      },
      {
        "desc": "Fábrica",
        "const": 64.5,
        "status": 42.3,
        "prazo": 75,
        "custo": 68
      }]
  }
  ];
}}

