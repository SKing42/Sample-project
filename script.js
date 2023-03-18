TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "vfov": 180,
  "adjacentPanoramas": [
   {
    "panorama": {
     "vfov": 180,
     "adjacentPanoramas": [
      {
       "panorama": "this.panorama_C140CB97_CC58_324C_41CC_EF501F0CF72D",
       "class": "AdjacentPanorama",
       "yaw": 38.23,
       "distance": 1,
       "backwardYaw": -9.69
      },
      {
       "panorama": {
        "vfov": 180,
        "adjacentPanoramas": [
         {
          "panorama": "this.panorama_C38F7808_CFAD_15F9_41D5_C57D64D622F4",
          "class": "AdjacentPanorama",
          "yaw": -4.62,
          "distance": 1,
          "backwardYaw": -142.32
         },
         {
          "panorama": "this.panorama_C140CB97_CC58_324C_41CC_EF501F0CF72D",
          "class": "AdjacentPanorama",
          "yaw": -4.87,
          "distance": 1,
          "backwardYaw": -10.14
         },
         {
          "panorama": {
           "vfov": 180,
           "adjacentPanoramas": [
            {
             "panorama": {
              "vfov": 180,
              "adjacentPanoramas": [
               {
                "panorama": "this.panorama_C38F5BC1_CFAA_EA6B_41E1_8125E2043944",
                "class": "AdjacentPanorama",
                "yaw": 35.17,
                "distance": 1,
                "backwardYaw": -83.16
               }
              ],
              "hfovMin": 70,
              "thumbnailUrl": "media/panorama_C38E7574_CFAB_1E29_41CE_7A87CFA9BD69_t.jpg",
              "id": "panorama_C38E7574_CFAB_1E29_41CE_7A87CFA9BD69",
              "pitch": 0,
              "partial": false,
              "class": "Panorama",
              "frames": [
               {
                "sphere": {
                 "class": "ImageResource",
                 "levels": [
                  {
                   "height": 3040,
                   "width": 6080,
                   "class": "ImageResourceLevel",
                   "url": "media/panorama_C38E7574_CFAB_1E29_41CE_7A87CFA9BD69_hq.jpeg"
                  },
                  {
                   "height": 1608,
                   "width": 3217,
                   "class": "ImageResourceLevel",
                   "url": "media/panorama_C38E7574_CFAB_1E29_41CE_7A87CFA9BD69.jpeg"
                  }
                 ]
                },
                "thumbnailUrl": "media/panorama_C38E7574_CFAB_1E29_41CE_7A87CFA9BD69_t.jpg",
                "class": "SphericPanoramaFrame",
                "overlays": [
                 {
                  "maps": [
                   {
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 75,
                       "width": 75,
                       "class": "ImageResourceLevel",
                       "url": "media/panorama_C38E7574_CFAB_1E29_41CE_7A87CFA9BD69_0_HS_0_0_0_map.gif"
                      }
                     ]
                    },
                    "hfov": 7.74,
                    "class": "HotspotPanoramaOverlayMap",
                    "yaw": 35.17,
                    "pitch": -29.42
                   }
                  ],
                  "rollOverDisplay": false,
                  "enabledInCardboard": true,
                  "class": "HotspotPanoramaOverlay",
                  "areas": [
                   {
                    "mapColor": "#FF0000",
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.startPanoramaWithCamera(this.panorama_C38F5BC1_CFAA_EA6B_41E1_8125E2043944, this.camera_E634D280_F2E0_BAD2_41A4_B663E316BE9A); this.mainPlayList.set('selectedIndex', 10)"
                   }
                  ],
                  "useHandCursor": true,
                  "id": "overlay_C0630392_D1BD_609C_41BC_EE6E1C1B1939",
                  "items": [
                   {
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 150,
                       "width": 150,
                       "class": "ImageResourceLevel",
                       "url": "media/panorama_C38E7574_CFAB_1E29_41CE_7A87CFA9BD69_0_HS_0_0.png"
                      }
                     ]
                    },
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": 35.17,
                    "hfov": 7.74,
                    "pitch": -29.42
                   }
                  ]
                 },
                 {
                  "maps": [
                   {
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 49,
                       "width": 49,
                       "class": "ImageResourceLevel",
                       "url": "media/panorama_C38E7574_CFAB_1E29_41CE_7A87CFA9BD69_0_HS_1_0_0_map.gif"
                      }
                     ]
                    },
                    "hfov": 5.67,
                    "class": "HotspotPanoramaOverlayMap",
                    "yaw": -13.46,
                    "pitch": -16.86
                   }
                  ],
                  "rollOverDisplay": false,
                  "enabledInCardboard": true,
                  "class": "HotspotPanoramaOverlay",
                  "areas": [
                   {
                    "mapColor": "#FF0000",
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.mainPlayList.set('selectedIndex', 9)"
                   }
                  ],
                  "useHandCursor": true,
                  "id": "overlay_C318E1BB_D1BE_A08C_41E3_72933DC59A04",
                  "items": [
                   {
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 99,
                       "width": 99,
                       "class": "ImageResourceLevel",
                       "url": "media/panorama_C38E7574_CFAB_1E29_41CE_7A87CFA9BD69_0_HS_1_0.png"
                      }
                     ]
                    },
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": -13.46,
                    "hfov": 5.67,
                    "pitch": -16.86
                   }
                  ]
                 },
                 {
                  "maps": [
                   {
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 41,
                       "width": 16,
                       "class": "ImageResourceLevel",
                       "url": "media/panorama_C38E7574_CFAB_1E29_41CE_7A87CFA9BD69_0_HS_2_0_0_map.gif"
                      }
                     ]
                    },
                    "hfov": 8.82,
                    "class": "HotspotPanoramaOverlayMap",
                    "yaw": -43.95,
                    "pitch": -3.84
                   }
                  ],
                  "rollOverDisplay": true,
                  "enabledInCardboard": true,
                  "class": "HotspotPanoramaOverlay",
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000"
                   }
                  ],
                  "useHandCursor": true,
                  "id": "overlay_C355B11B_D1BD_A18D_41D1_4EC74E382ABC",
                  "items": [
                   {
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 388,
                       "width": 149,
                       "class": "ImageResourceLevel",
                       "url": "media/panorama_C38E7574_CFAB_1E29_41CE_7A87CFA9BD69_0_HS_2_0.png"
                      }
                     ]
                    },
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": -43.95,
                    "hfov": 8.82,
                    "pitch": -3.84
                   }
                  ]
                 },
                 {
                  "maps": [
                   {
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 38,
                       "width": 16,
                       "class": "ImageResourceLevel",
                       "url": "media/panorama_C38E7574_CFAB_1E29_41CE_7A87CFA9BD69_0_HS_3_0_0_map.gif"
                      }
                     ]
                    },
                    "hfov": 8.98,
                    "class": "HotspotPanoramaOverlayMap",
                    "yaw": -19.98,
                    "pitch": -3.75
                   }
                  ],
                  "rollOverDisplay": true,
                  "enabledInCardboard": true,
                  "class": "HotspotPanoramaOverlay",
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000"
                   }
                  ],
                  "useHandCursor": true,
                  "id": "overlay_C2F8DAD7_D1BD_6085_41E8_8F44B7878000",
                  "items": [
                   {
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 360,
                       "width": 151,
                       "class": "ImageResourceLevel",
                       "url": "media/panorama_C38E7574_CFAB_1E29_41CE_7A87CFA9BD69_0_HS_3_0.png"
                      }
                     ]
                    },
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": -19.98,
                    "hfov": 8.98,
                    "pitch": -3.75
                   }
                  ]
                 },
                 {
                  "maps": [
                   {
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 37,
                       "width": 16,
                       "class": "ImageResourceLevel",
                       "url": "media/panorama_C38E7574_CFAB_1E29_41CE_7A87CFA9BD69_0_HS_7_0_0_map.gif"
                      }
                     ]
                    },
                    "hfov": 26.14,
                    "class": "HotspotPanoramaOverlayMap",
                    "yaw": 78.82,
                    "pitch": 2.34
                   }
                  ],
                  "rollOverDisplay": true,
                  "enabledInCardboard": true,
                  "class": "HotspotPanoramaOverlay",
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000"
                   }
                  ],
                  "useHandCursor": true,
                  "id": "overlay_F6088522_D568_55BB_41DC_88255F06E54A",
                  "items": [
                   {
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 1024,
                       "width": 441,
                       "class": "ImageResourceLevel",
                       "url": "media/panorama_C38E7574_CFAB_1E29_41CE_7A87CFA9BD69_0_HS_7_0.png"
                      }
                     ]
                    },
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": 78.82,
                    "hfov": 26.14,
                    "pitch": 2.34
                   }
                  ]
                 },
                 {
                  "maps": [
                   {
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 187,
                       "width": 92,
                       "class": "ImageResourceLevel",
                       "url": "media/panorama_C38E7574_CFAB_1E29_41CE_7A87CFA9BD69_0_HS_4_1_0_map.gif"
                      }
                     ]
                    },
                    "hfov": 10.9,
                    "class": "HotspotPanoramaOverlayMap",
                    "yaw": -19.7,
                    "pitch": -3.58
                   }
                  ],
                  "rollOverDisplay": false,
                  "enabledInCardboard": true,
                  "class": "HotspotPanoramaOverlay",
                  "areas": [
                   {
                    "toolTip": "Go to\u000aTV LOUNGE",
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.mainPlayList.set('selectedIndex', 0)",
                    "displayTooltipInTouchScreens": true,
                    "mapColor": "#FF0000"
                   }
                  ],
                  "useHandCursor": true,
                  "id": "overlay_C210C2C2_D1BF_E0FC_41DA_1BD15CE2EA3E",
                  "items": [
                   {
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 375,
                       "width": 184,
                       "class": "ImageResourceLevel",
                       "url": "media/panorama_C38E7574_CFAB_1E29_41CE_7A87CFA9BD69_0_HS_4_0.png"
                      }
                     ]
                    },
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": -19.7,
                    "hfov": 10.9,
                    "roll": 0,
                    "pitch": -3.58
                   }
                  ]
                 },
                 {
                  "maps": [
                   {
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 200,
                       "width": 83,
                       "class": "ImageResourceLevel",
                       "url": "media/panorama_C38E7574_CFAB_1E29_41CE_7A87CFA9BD69_0_HS_5_1_0_map.gif"
                      }
                     ]
                    },
                    "hfov": 9.99,
                    "class": "HotspotPanoramaOverlayMap",
                    "yaw": -44.19,
                    "pitch": -3.79
                   }
                  ],
                  "rollOverDisplay": false,
                  "enabledInCardboard": true,
                  "class": "HotspotPanoramaOverlay",
                  "areas": [
                   {
                    "toolTip": "Go to\u000aBATHROOM",
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.mainPlayList.set('selectedIndex', 13)",
                    "displayTooltipInTouchScreens": true,
                    "mapColor": "#FF0000"
                   }
                  ],
                  "useHandCursor": true,
                  "id": "overlay_C583993F_D1BF_A184_41E1_EAE4B63246A9",
                  "items": [
                   {
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 405,
                       "width": 169,
                       "class": "ImageResourceLevel",
                       "url": "media/panorama_C38E7574_CFAB_1E29_41CE_7A87CFA9BD69_0_HS_5_0.png"
                      }
                     ]
                    },
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": -44.19,
                    "hfov": 9.99,
                    "roll": 0,
                    "pitch": -3.79
                   }
                  ]
                 },
                 {
                  "maps": [
                   {
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 200,
                       "width": 88,
                       "class": "ImageResourceLevel",
                       "url": "media/panorama_C38E7574_CFAB_1E29_41CE_7A87CFA9BD69_0_HS_6_1_0_map.gif"
                      }
                     ]
                    },
                    "hfov": 40.63,
                    "class": "HotspotPanoramaOverlayMap",
                    "yaw": 80.8,
                    "pitch": 3.68
                   }
                  ],
                  "rollOverDisplay": false,
                  "enabledInCardboard": true,
                  "class": "HotspotPanoramaOverlay",
                  "areas": [
                   {
                    "toolTip": "Go to\u000aBALCONY",
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.mainPlayList.set('selectedIndex', 23)",
                    "displayTooltipInTouchScreens": true,
                    "mapColor": "#FF0000"
                   }
                  ],
                  "useHandCursor": true,
                  "id": "overlay_DAFC95D8_D40A_F5E2_41E8_E97ECE96886F",
                  "items": [
                   {
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 1624,
                       "width": 716,
                       "class": "ImageResourceLevel",
                       "url": "media/panorama_C38E7574_CFAB_1E29_41CE_7A87CFA9BD69_0_HS_6_0.png"
                      }
                     ]
                    },
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": 80.8,
                    "hfov": 40.63,
                    "roll": 0,
                    "pitch": 3.68
                   }
                  ]
                 }
                ]
               }
              ],
              "label": "12",
              "hfov": 360,
              "hfovMax": 140
             },
             "class": "AdjacentPanorama",
             "yaw": -83.16,
             "distance": 1,
             "backwardYaw": 35.17
            },
            {
             "panorama": {
              "vfov": 180,
              "adjacentPanoramas": [
               {
                "panorama": "this.panorama_C38F7808_CFAD_15F9_41D5_C57D64D622F4",
                "class": "AdjacentPanorama",
                "yaw": -8.46,
                "distance": 1,
                "backwardYaw": -140.75
               },
               {
                "panorama": {
                 "vfov": 180,
                 "adjacentPanoramas": [
                  {
                   "panorama": {
                    "vfov": 180,
                    "adjacentPanoramas": [
                     {
                      "panorama": "this.panorama_C38F43B8_CFAD_3A19_41E9_7D6FC4197EA0",
                      "class": "AdjacentPanorama",
                      "yaw": 87.79,
                      "distance": 1,
                      "backwardYaw": 48.47
                     },
                     {
                      "panorama": {
                       "vfov": 180,
                       "adjacentPanoramas": [
                        {
                         "panorama": "this.panorama_C140CB97_CC58_324C_41CC_EF501F0CF72D",
                         "class": "AdjacentPanorama",
                         "yaw": 66.9,
                         "distance": 1,
                         "backwardYaw": -96.11
                        },
                        {
                         "panorama": "this.panorama_C38F9A09_CFAD_15FB_41D2_530F2E7196E8",
                         "class": "AdjacentPanorama",
                         "yaw": -29.19,
                         "distance": 1,
                         "backwardYaw": -142.39
                        },
                        {
                         "panorama": {
                          "vfov": 180,
                          "adjacentPanoramas": [
                           {
                            "panorama": "this.panorama_C38F43B8_CFAD_3A19_41E9_7D6FC4197EA0",
                            "class": "AdjacentPanorama",
                            "yaw": 165.6,
                            "distance": 1,
                            "backwardYaw": 170.93
                           },
                           {
                            "panorama": "this.panorama_C38F9A09_CFAD_15FB_41D2_530F2E7196E8",
                            "class": "AdjacentPanorama",
                            "yaw": -166.89,
                            "distance": 1,
                            "backwardYaw": 75.69
                           },
                           {
                            "panorama": "this.panorama_C38F3FF0_CFAD_6A29_41D8_A9DC4E7E1521",
                            "class": "AdjacentPanorama",
                            "yaw": 177.42,
                            "distance": 1,
                            "backwardYaw": -18.31
                           },
                           {
                            "panorama": {
                             "vfov": 180,
                             "adjacentPanoramas": [
                              {
                               "panorama": {
                                "vfov": 180,
                                "adjacentPanoramas": [
                                 {
                                  "panorama": {
                                   "vfov": 180,
                                   "adjacentPanoramas": [
                                    {
                                     "panorama": "this.panorama_C38EFD85_CFAB_2EEB_41AA_1FA5F8AEA01D",
                                     "class": "AdjacentPanorama",
                                     "yaw": 25.62,
                                     "distance": 1,
                                     "backwardYaw": -142.53
                                    },
                                    {
                                     "panorama": "this.panorama_C38EF781_CFAB_7AEB_418A_B750EAA1CAF9",
                                     "class": "AdjacentPanorama",
                                     "yaw": 25.64,
                                     "distance": 1,
                                     "backwardYaw": -174.92
                                    }
                                   ],
                                   "hfovMin": 70,
                                   "thumbnailUrl": "media/panorama_C38ED2B1_CFAB_1A2B_41B2_633C8B4C5CE1_t.jpg",
                                   "id": "panorama_C38ED2B1_CFAB_1A2B_41B2_633C8B4C5CE1",
                                   "pitch": 0,
                                   "partial": false,
                                   "class": "Panorama",
                                   "frames": [
                                    {
                                     "sphere": {
                                      "class": "ImageResource",
                                      "levels": [
                                       {
                                        "height": 3040,
                                        "width": 6080,
                                        "class": "ImageResourceLevel",
                                        "url": "media/panorama_C38ED2B1_CFAB_1A2B_41B2_633C8B4C5CE1_hq.jpeg"
                                       },
                                       {
                                        "height": 1608,
                                        "width": 3217,
                                        "class": "ImageResourceLevel",
                                        "url": "media/panorama_C38ED2B1_CFAB_1A2B_41B2_633C8B4C5CE1.jpeg"
                                       }
                                      ]
                                     },
                                     "thumbnailUrl": "media/panorama_C38ED2B1_CFAB_1A2B_41B2_633C8B4C5CE1_t.jpg",
                                     "class": "SphericPanoramaFrame",
                                     "overlays": [
                                      {
                                       "maps": [
                                        {
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "height": 16,
                                            "width": 16,
                                            "class": "ImageResourceLevel",
                                            "url": "media/panorama_C38ED2B1_CFAB_1A2B_41B2_633C8B4C5CE1_0_HS_0_0_0_map.gif"
                                           }
                                          ]
                                         },
                                         "hfov": 7.32,
                                         "class": "HotspotPanoramaOverlayMap",
                                         "yaw": 25.64,
                                         "pitch": -34.46
                                        }
                                       ],
                                       "rollOverDisplay": false,
                                       "enabledInCardboard": true,
                                       "class": "HotspotPanoramaOverlay",
                                       "areas": [
                                        {
                                         "mapColor": "#FF0000",
                                         "class": "HotspotPanoramaOverlayArea",
                                         "click": "this.startPanoramaWithCamera(this.panorama_C38EF781_CFAB_7AEB_418A_B750EAA1CAF9, this.camera_E1DA535A_F2E0_BA76_41D1_2D39EE16A3B5); this.mainPlayList.set('selectedIndex', 15)"
                                        }
                                       ],
                                       "useHandCursor": true,
                                       "id": "overlay_FEBC93B0_D528_4C97_41E1_A53DA11C0975",
                                       "items": [
                                        {
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "height": 150,
                                            "width": 150,
                                            "class": "ImageResourceLevel",
                                            "url": "media/panorama_C38ED2B1_CFAB_1A2B_41B2_633C8B4C5CE1_0_HS_0_0.png"
                                           }
                                          ]
                                         },
                                         "class": "HotspotPanoramaOverlayImage",
                                         "yaw": 25.64,
                                         "hfov": 7.32,
                                         "pitch": -34.46
                                        }
                                       ]
                                      },
                                      {
                                       "maps": [
                                        {
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "height": 16,
                                            "width": 16,
                                            "class": "ImageResourceLevel",
                                            "url": "media/panorama_C38ED2B1_CFAB_1A2B_41B2_633C8B4C5CE1_0_HS_1_0_0_map.gif"
                                           }
                                          ]
                                         },
                                         "hfov": 5.54,
                                         "class": "HotspotPanoramaOverlayMap",
                                         "yaw": 25.62,
                                         "pitch": -20.63
                                        }
                                       ],
                                       "rollOverDisplay": false,
                                       "enabledInCardboard": true,
                                       "class": "HotspotPanoramaOverlay",
                                       "areas": [
                                        {
                                         "mapColor": "#FF0000",
                                         "class": "HotspotPanoramaOverlayArea",
                                         "click": "this.startPanoramaWithCamera(this.panorama_C38EFD85_CFAB_2EEB_41AA_1FA5F8AEA01D, this.camera_E1DDD33E_F2E0_BA2E_41E1_9B74196C3C02); this.mainPlayList.set('selectedIndex', 17)"
                                        }
                                       ],
                                       "useHandCursor": true,
                                       "id": "overlay_FC4EED2B_D528_B589_41CA_42B633AE74BB",
                                       "items": [
                                        {
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "height": 100,
                                            "width": 100,
                                            "class": "ImageResourceLevel",
                                            "url": "media/panorama_C38ED2B1_CFAB_1A2B_41B2_633C8B4C5CE1_0_HS_1_0.png"
                                           }
                                          ]
                                         },
                                         "class": "HotspotPanoramaOverlayImage",
                                         "yaw": 25.62,
                                         "hfov": 5.54,
                                         "pitch": -20.63
                                        }
                                       ]
                                      },
                                      {
                                       "maps": [
                                        {
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "height": 33,
                                            "width": 16,
                                            "class": "ImageResourceLevel",
                                            "url": "media/panorama_C38ED2B1_CFAB_1A2B_41B2_633C8B4C5CE1_0_HS_2_0_0_map.gif"
                                           }
                                          ]
                                         },
                                         "hfov": 9.16,
                                         "class": "HotspotPanoramaOverlayMap",
                                         "yaw": 33.53,
                                         "pitch": -0.1
                                        }
                                       ],
                                       "rollOverDisplay": true,
                                       "enabledInCardboard": true,
                                       "class": "HotspotPanoramaOverlay",
                                       "areas": [
                                        {
                                         "class": "HotspotPanoramaOverlayArea",
                                         "mapColor": "#FF0000"
                                        }
                                       ],
                                       "useHandCursor": true,
                                       "id": "overlay_FF732336_D528_4D9B_41BB_91A1F4A539C8",
                                       "items": [
                                        {
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "height": 319,
                                            "width": 154,
                                            "class": "ImageResourceLevel",
                                            "url": "media/panorama_C38ED2B1_CFAB_1A2B_41B2_633C8B4C5CE1_0_HS_2_0.png"
                                           }
                                          ]
                                         },
                                         "class": "HotspotPanoramaOverlayImage",
                                         "yaw": 33.53,
                                         "hfov": 9.16,
                                         "pitch": -0.1
                                        }
                                       ]
                                      },
                                      {
                                       "maps": [
                                        {
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "height": 162,
                                            "width": 152,
                                            "class": "ImageResourceLevel",
                                            "url": "media/panorama_C38ED2B1_CFAB_1A2B_41B2_633C8B4C5CE1_0_HS_3_1_0_map.gif"
                                           }
                                          ]
                                         },
                                         "hfov": 17.97,
                                         "class": "HotspotPanoramaOverlayMap",
                                         "yaw": 33.38,
                                         "pitch": 0.24
                                        }
                                       ],
                                       "rollOverDisplay": false,
                                       "enabledInCardboard": true,
                                       "class": "HotspotPanoramaOverlay",
                                       "areas": [
                                        {
                                         "toolTip": "Go to\u000aBALCONY",
                                         "class": "HotspotPanoramaOverlayArea",
                                         "click": "this.mainPlayList.set('selectedIndex', 22)",
                                         "displayTooltipInTouchScreens": true,
                                         "mapColor": "#FF0000"
                                        }
                                       ],
                                       "useHandCursor": true,
                                       "id": "overlay_FFCB148C_D528_748E_41CF_388660E7FC66",
                                       "items": [
                                        {
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "height": 325,
                                            "width": 305,
                                            "class": "ImageResourceLevel",
                                            "url": "media/panorama_C38ED2B1_CFAB_1A2B_41B2_633C8B4C5CE1_0_HS_3_0.png"
                                           }
                                          ]
                                         },
                                         "class": "HotspotPanoramaOverlayImage",
                                         "yaw": 33.38,
                                         "hfov": 17.97,
                                         "roll": 0,
                                         "pitch": 0.24
                                        }
                                       ]
                                      }
                                     ]
                                    }
                                   ],
                                   "label": "18",
                                   "hfov": 360,
                                   "hfovMax": 140
                                  },
                                  "class": "AdjacentPanorama",
                                  "yaw": -174.92,
                                  "distance": 1,
                                  "backwardYaw": 25.64
                                 },
                                 {
                                  "panorama": "this.panorama_C38E83E8_CFAB_1A39_41E9_D67B70C790DA",
                                  "class": "AdjacentPanorama",
                                  "yaw": 106.63,
                                  "distance": 1,
                                  "backwardYaw": -89.25
                                 },
                                 {
                                  "panorama": {
                                   "vfov": 180,
                                   "adjacentPanoramas": [
                                    {
                                     "panorama": "this.panorama_C38EF781_CFAB_7AEB_418A_B750EAA1CAF9",
                                     "class": "AdjacentPanorama",
                                     "yaw": -163.69,
                                     "distance": 1,
                                     "backwardYaw": 14.97
                                    },
                                    {
                                     "panorama": "this.panorama_C38EFD85_CFAB_2EEB_41AA_1FA5F8AEA01D",
                                     "class": "AdjacentPanorama",
                                     "yaw": -154.37,
                                     "distance": 1,
                                     "backwardYaw": 64.15
                                    }
                                   ],
                                   "hfovMin": 70,
                                   "thumbnailUrl": "media/panorama_C38ED68D_CFAB_3AFB_41E8_AFFE674CE495_t.jpg",
                                   "id": "panorama_C38ED68D_CFAB_3AFB_41E8_AFFE674CE495",
                                   "pitch": 0,
                                   "partial": false,
                                   "class": "Panorama",
                                   "frames": [
                                    {
                                     "sphere": {
                                      "class": "ImageResource",
                                      "levels": [
                                       {
                                        "height": 3040,
                                        "width": 6080,
                                        "class": "ImageResourceLevel",
                                        "url": "media/panorama_C38ED68D_CFAB_3AFB_41E8_AFFE674CE495_hq.jpeg"
                                       },
                                       {
                                        "height": 1608,
                                        "width": 3217,
                                        "class": "ImageResourceLevel",
                                        "url": "media/panorama_C38ED68D_CFAB_3AFB_41E8_AFFE674CE495.jpeg"
                                       }
                                      ]
                                     },
                                     "thumbnailUrl": "media/panorama_C38ED68D_CFAB_3AFB_41E8_AFFE674CE495_t.jpg",
                                     "class": "SphericPanoramaFrame",
                                     "overlays": [
                                      {
                                       "maps": [
                                        {
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "height": 74,
                                            "width": 74,
                                            "class": "ImageResourceLevel",
                                            "url": "media/panorama_C38ED68D_CFAB_3AFB_41E8_AFFE674CE495_0_HS_0_0_0_map.gif"
                                           }
                                          ]
                                         },
                                         "hfov": 7.36,
                                         "class": "HotspotPanoramaOverlayMap",
                                         "yaw": -154.37,
                                         "pitch": -34.04
                                        }
                                       ],
                                       "rollOverDisplay": false,
                                       "enabledInCardboard": true,
                                       "class": "HotspotPanoramaOverlay",
                                       "areas": [
                                        {
                                         "mapColor": "#FF0000",
                                         "class": "HotspotPanoramaOverlayArea",
                                         "click": "this.startPanoramaWithCamera(this.panorama_C38EFD85_CFAB_2EEB_41AA_1FA5F8AEA01D, this.camera_E196345B_F2E0_BE76_41BC_7EB4E1C45BEA); this.mainPlayList.set('selectedIndex', 17)"
                                        }
                                       ],
                                       "useHandCursor": true,
                                       "id": "overlay_CA2AFEAE_D1ED_6087_41D6_A4E9952F90FA",
                                       "items": [
                                        {
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "height": 149,
                                            "width": 149,
                                            "class": "ImageResourceLevel",
                                            "url": "media/panorama_C38ED68D_CFAB_3AFB_41E8_AFFE674CE495_0_HS_0_0.png"
                                           }
                                          ]
                                         },
                                         "class": "HotspotPanoramaOverlayImage",
                                         "yaw": -154.37,
                                         "hfov": 7.36,
                                         "pitch": -34.04
                                        }
                                       ]
                                      },
                                      {
                                       "maps": [
                                        {
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "height": 49,
                                            "width": 49,
                                            "class": "ImageResourceLevel",
                                            "url": "media/panorama_C38ED68D_CFAB_3AFB_41E8_AFFE674CE495_0_HS_1_0_0_map.gif"
                                           }
                                          ]
                                         },
                                         "hfov": 5.46,
                                         "class": "HotspotPanoramaOverlayMap",
                                         "yaw": -163.69,
                                         "pitch": -22.68
                                        }
                                       ],
                                       "rollOverDisplay": false,
                                       "enabledInCardboard": true,
                                       "class": "HotspotPanoramaOverlay",
                                       "areas": [
                                        {
                                         "mapColor": "#FF0000",
                                         "class": "HotspotPanoramaOverlayArea",
                                         "click": "this.startPanoramaWithCamera(this.panorama_C38EF781_CFAB_7AEB_418A_B750EAA1CAF9, this.camera_E1AA0447_F2E0_BE5E_41E2_B93D5E591312); this.mainPlayList.set('selectedIndex', 15)"
                                        }
                                       ],
                                       "useHandCursor": true,
                                       "id": "overlay_CD329ABE_D1ED_A084_41B1_F35F90473060",
                                       "items": [
                                        {
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "height": 99,
                                            "width": 99,
                                            "class": "ImageResourceLevel",
                                            "url": "media/panorama_C38ED68D_CFAB_3AFB_41E8_AFFE674CE495_0_HS_1_0.png"
                                           }
                                          ]
                                         },
                                         "class": "HotspotPanoramaOverlayImage",
                                         "yaw": -163.69,
                                         "hfov": 5.46,
                                         "pitch": -22.68
                                        }
                                       ]
                                      },
                                      {
                                       "maps": [
                                        {
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "height": 25,
                                            "width": 25,
                                            "class": "ImageResourceLevel",
                                            "url": "media/panorama_C38ED68D_CFAB_3AFB_41E8_AFFE674CE495_0_HS_2_0_0_map.gif"
                                           }
                                          ]
                                         },
                                         "hfov": 2.79,
                                         "class": "HotspotPanoramaOverlayMap",
                                         "yaw": 163.95,
                                         "pitch": -19.54
                                        }
                                       ],
                                       "rollOverDisplay": false,
                                       "enabledInCardboard": true,
                                       "class": "HotspotPanoramaOverlay",
                                       "areas": [
                                        {
                                         "mapColor": "#FF0000",
                                         "class": "HotspotPanoramaOverlayArea",
                                         "click": "this.mainPlayList.set('selectedIndex', 14)"
                                        }
                                       ],
                                       "useHandCursor": true,
                                       "id": "overlay_CDA3467E_D1ED_E384_41E5_3BEA7A3EB5A8",
                                       "items": [
                                        {
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "height": 50,
                                            "width": 50,
                                            "class": "ImageResourceLevel",
                                            "url": "media/panorama_C38ED68D_CFAB_3AFB_41E8_AFFE674CE495_0_HS_2_0.png"
                                           }
                                          ]
                                         },
                                         "class": "HotspotPanoramaOverlayImage",
                                         "yaw": 163.95,
                                         "hfov": 2.79,
                                         "pitch": -19.54
                                        }
                                       ]
                                      },
                                      {
                                       "maps": [
                                        {
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "height": 43,
                                            "width": 16,
                                            "class": "ImageResourceLevel",
                                            "url": "media/panorama_C38ED68D_CFAB_3AFB_41E8_AFFE674CE495_0_HS_6_0_0_map.gif"
                                           }
                                          ]
                                         },
                                         "hfov": 8.89,
                                         "class": "HotspotPanoramaOverlayMap",
                                         "yaw": -168.26,
                                         "pitch": -6.05
                                        }
                                       ],
                                       "rollOverDisplay": true,
                                       "enabledInCardboard": true,
                                       "class": "HotspotPanoramaOverlay",
                                       "areas": [
                                        {
                                         "class": "HotspotPanoramaOverlayArea",
                                         "mapColor": "#FF0000"
                                        }
                                       ],
                                       "useHandCursor": true,
                                       "id": "overlay_C09D27B0_D3D7_8959_41B7_462B841B409D",
                                       "items": [
                                        {
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "height": 406,
                                            "width": 150,
                                            "class": "ImageResourceLevel",
                                            "url": "media/panorama_C38ED68D_CFAB_3AFB_41E8_AFFE674CE495_0_HS_6_0.png"
                                           }
                                          ]
                                         },
                                         "class": "HotspotPanoramaOverlayImage",
                                         "yaw": -168.26,
                                         "hfov": 8.89,
                                         "pitch": -6.05
                                        }
                                       ]
                                      },
                                      {
                                       "maps": [
                                        {
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "height": 36,
                                            "width": 16,
                                            "class": "ImageResourceLevel",
                                            "url": "media/panorama_C38ED68D_CFAB_3AFB_41E8_AFFE674CE495_0_HS_7_0_0_map.gif"
                                           }
                                          ]
                                         },
                                         "hfov": 10.34,
                                         "class": "HotspotPanoramaOverlayMap",
                                         "yaw": 165.02,
                                         "pitch": -5.79
                                        }
                                       ],
                                       "rollOverDisplay": true,
                                       "enabledInCardboard": true,
                                       "class": "HotspotPanoramaOverlay",
                                       "areas": [
                                        {
                                         "class": "HotspotPanoramaOverlayArea",
                                         "mapColor": "#FF0000"
                                        }
                                       ],
                                       "useHandCursor": true,
                                       "id": "overlay_C0A9404A_D3D1_87CE_41CA_D9D117D6CBDB",
                                       "items": [
                                        {
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "height": 398,
                                            "width": 175,
                                            "class": "ImageResourceLevel",
                                            "url": "media/panorama_C38ED68D_CFAB_3AFB_41E8_AFFE674CE495_0_HS_7_0.png"
                                           }
                                          ]
                                         },
                                         "class": "HotspotPanoramaOverlayImage",
                                         "yaw": 165.02,
                                         "hfov": 10.34,
                                         "pitch": -5.79
                                        }
                                       ]
                                      },
                                      {
                                       "maps": [
                                        {
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "height": 31,
                                            "width": 16,
                                            "class": "ImageResourceLevel",
                                            "url": "media/panorama_C38ED68D_CFAB_3AFB_41E8_AFFE674CE495_0_HS_10_0_0_map.gif"
                                           }
                                          ]
                                         },
                                         "hfov": 47.46,
                                         "class": "HotspotPanoramaOverlayMap",
                                         "yaw": -0.64,
                                         "pitch": -0.11
                                        }
                                       ],
                                       "rollOverDisplay": true,
                                       "enabledInCardboard": true,
                                       "class": "HotspotPanoramaOverlay",
                                       "areas": [
                                        {
                                         "class": "HotspotPanoramaOverlayArea",
                                         "mapColor": "#FF0000"
                                        }
                                       ],
                                       "useHandCursor": true,
                                       "id": "overlay_F6EE78EA_D578_5C8B_41E5_51A503B6649C",
                                       "items": [
                                        {
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "height": 1591,
                                            "width": 801,
                                            "class": "ImageResourceLevel",
                                            "url": "media/panorama_C38ED68D_CFAB_3AFB_41E8_AFFE674CE495_0_HS_10_0.png"
                                           }
                                          ]
                                         },
                                         "class": "HotspotPanoramaOverlayImage",
                                         "yaw": -0.64,
                                         "hfov": 47.46,
                                         "pitch": -0.11
                                        }
                                       ]
                                      },
                                      {
                                       "maps": [
                                        {
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "height": 44,
                                            "width": 16,
                                            "class": "ImageResourceLevel",
                                            "url": "media/panorama_C38ED68D_CFAB_3AFB_41E8_AFFE674CE495_0_HS_11_0_0_map.gif"
                                           }
                                          ]
                                         },
                                         "hfov": 15.52,
                                         "class": "HotspotPanoramaOverlayMap",
                                         "yaw": -131.14,
                                         "pitch": 0.04
                                        }
                                       ],
                                       "rollOverDisplay": true,
                                       "enabledInCardboard": true,
                                       "class": "HotspotPanoramaOverlay",
                                       "areas": [
                                        {
                                         "class": "HotspotPanoramaOverlayArea",
                                         "mapColor": "#FF0000"
                                        }
                                       ],
                                       "useHandCursor": true,
                                       "id": "overlay_F1705191_D578_4C99_41DC_27A66E544802",
                                       "items": [
                                        {
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "height": 735,
                                            "width": 262,
                                            "class": "ImageResourceLevel",
                                            "url": "media/panorama_C38ED68D_CFAB_3AFB_41E8_AFFE674CE495_0_HS_11_0.png"
                                           }
                                          ]
                                         },
                                         "class": "HotspotPanoramaOverlayImage",
                                         "yaw": -131.14,
                                         "hfov": 15.52,
                                         "pitch": 0.04
                                        }
                                       ]
                                      },
                                      {
                                       "maps": [
                                        {
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "height": 200,
                                            "width": 106,
                                            "class": "ImageResourceLevel",
                                            "url": "media/panorama_C38ED68D_CFAB_3AFB_41E8_AFFE674CE495_0_HS_3_1_0_map.gif"
                                           }
                                          ]
                                         },
                                         "hfov": 26.33,
                                         "class": "HotspotPanoramaOverlayMap",
                                         "yaw": -131.41,
                                         "pitch": -0.88
                                        }
                                       ],
                                       "rollOverDisplay": false,
                                       "enabledInCardboard": true,
                                       "class": "HotspotPanoramaOverlay",
                                       "areas": [
                                        {
                                         "toolTip": "Go to\u000aBALCONY",
                                         "class": "HotspotPanoramaOverlayArea",
                                         "click": "this.mainPlayList.set('selectedIndex', 19)",
                                         "displayTooltipInTouchScreens": true,
                                         "mapColor": "#FF0000"
                                        }
                                       ],
                                       "useHandCursor": true,
                                       "id": "overlay_CFA63046_D1ED_5F87_41C1_3AC2C463A13F",
                                       "items": [
                                        {
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "height": 853,
                                            "width": 452,
                                            "class": "ImageResourceLevel",
                                            "url": "media/panorama_C38ED68D_CFAB_3AFB_41E8_AFFE674CE495_0_HS_3_0.png"
                                           }
                                          ]
                                         },
                                         "class": "HotspotPanoramaOverlayImage",
                                         "yaw": -131.41,
                                         "hfov": 26.33,
                                         "roll": 0,
                                         "pitch": -0.88
                                        }
                                       ]
                                      },
                                      {
                                       "maps": [
                                        {
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "height": 200,
                                            "width": 105,
                                            "class": "ImageResourceLevel",
                                            "url": "media/panorama_C38ED68D_CFAB_3AFB_41E8_AFFE674CE495_0_HS_5_1_0_map.gif"
                                           }
                                          ]
                                         },
                                         "hfov": 13.48,
                                         "class": "HotspotPanoramaOverlayMap",
                                         "yaw": 164.86,
                                         "pitch": -5.87
                                        }
                                       ],
                                       "rollOverDisplay": false,
                                       "enabledInCardboard": true,
                                       "class": "HotspotPanoramaOverlay",
                                       "areas": [
                                        {
                                         "toolTip": "Go to\u000aTV LOUNGE",
                                         "class": "HotspotPanoramaOverlayArea",
                                         "click": "this.mainPlayList.set('selectedIndex', 6)",
                                         "displayTooltipInTouchScreens": true,
                                         "mapColor": "#FF0000"
                                        }
                                       ],
                                       "useHandCursor": true,
                                       "id": "overlay_CC59AB10_D192_A19B_41D8_6790C2D7CC52",
                                       "items": [
                                        {
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "height": 434,
                                            "width": 228,
                                            "class": "ImageResourceLevel",
                                            "url": "media/panorama_C38ED68D_CFAB_3AFB_41E8_AFFE674CE495_0_HS_5_0.png"
                                           }
                                          ]
                                         },
                                         "class": "HotspotPanoramaOverlayImage",
                                         "yaw": 164.86,
                                         "hfov": 13.48,
                                         "roll": 0,
                                         "pitch": -5.87
                                        }
                                       ]
                                      },
                                      {
                                       "maps": [
                                        {
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "height": 200,
                                            "width": 80,
                                            "class": "ImageResourceLevel",
                                            "url": "media/panorama_C38ED68D_CFAB_3AFB_41E8_AFFE674CE495_0_HS_8_1_0_map.gif"
                                           }
                                          ]
                                         },
                                         "hfov": 10.05,
                                         "class": "HotspotPanoramaOverlayMap",
                                         "yaw": -168.42,
                                         "pitch": -6.09
                                        }
                                       ],
                                       "rollOverDisplay": false,
                                       "enabledInCardboard": true,
                                       "class": "HotspotPanoramaOverlay",
                                       "areas": [
                                        {
                                         "toolTip": "Go to\u000aBATHROOM",
                                         "class": "HotspotPanoramaOverlayArea",
                                         "click": "this.mainPlayList.set('selectedIndex', 16)",
                                         "displayTooltipInTouchScreens": true,
                                         "mapColor": "#FF0000"
                                        }
                                       ],
                                       "useHandCursor": true,
                                       "id": "overlay_C05513EB_D3D6_88CE_41D3_01DF7702B7BC",
                                       "items": [
                                        {
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "height": 423,
                                            "width": 170,
                                            "class": "ImageResourceLevel",
                                            "url": "media/panorama_C38ED68D_CFAB_3AFB_41E8_AFFE674CE495_0_HS_8_0.png"
                                           }
                                          ]
                                         },
                                         "class": "HotspotPanoramaOverlayImage",
                                         "yaw": -168.42,
                                         "hfov": 10.05,
                                         "roll": 0,
                                         "pitch": -6.09
                                        }
                                       ]
                                      },
                                      {
                                       "maps": [
                                        {
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "height": 200,
                                            "width": 183,
                                            "class": "ImageResourceLevel",
                                            "url": "media/panorama_C38ED68D_CFAB_3AFB_41E8_AFFE674CE495_0_HS_9_1_0_map.gif"
                                           }
                                          ]
                                         },
                                         "hfov": 100.39,
                                         "class": "HotspotPanoramaOverlayMap",
                                         "yaw": 3.26,
                                         "pitch": 0.12
                                        }
                                       ],
                                       "rollOverDisplay": false,
                                       "enabledInCardboard": true,
                                       "class": "HotspotPanoramaOverlay",
                                       "areas": [
                                        {
                                         "toolTip": "Go to\u000aBALCONY",
                                         "class": "HotspotPanoramaOverlayArea",
                                         "click": "this.mainPlayList.set('selectedIndex', 22)",
                                         "displayTooltipInTouchScreens": true,
                                         "mapColor": "#FF0000"
                                        }
                                       ],
                                       "useHandCursor": true,
                                       "id": "overlay_C3333425_D40B_4AA2_41E0_CC6B2F174B62",
                                       "items": [
                                        {
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "height": 2048,
                                            "width": 1880,
                                            "class": "ImageResourceLevel",
                                            "url": "media/panorama_C38ED68D_CFAB_3AFB_41E8_AFFE674CE495_0_HS_9_0.png"
                                           }
                                          ]
                                         },
                                         "class": "HotspotPanoramaOverlayImage",
                                         "yaw": 3.26,
                                         "hfov": 100.39,
                                         "roll": 0,
                                         "pitch": 0.12
                                        }
                                       ]
                                      }
                                     ]
                                    }
                                   ],
                                   "label": "20",
                                   "hfov": 360,
                                   "hfovMax": 140
                                  },
                                  "class": "AdjacentPanorama",
                                  "yaw": 14.97,
                                  "distance": 1,
                                  "backwardYaw": -163.69
                                 },
                                 {
                                  "panorama": "this.panorama_C38EFD85_CFAB_2EEB_41AA_1FA5F8AEA01D",
                                  "class": "AdjacentPanorama",
                                  "yaw": 1.46,
                                  "distance": 1,
                                  "backwardYaw": -141.73
                                 }
                                ],
                                "hfovMin": 70,
                                "thumbnailUrl": "media/panorama_C38EF781_CFAB_7AEB_418A_B750EAA1CAF9_t.jpg",
                                "id": "panorama_C38EF781_CFAB_7AEB_418A_B750EAA1CAF9",
                                "pitch": 0,
                                "partial": false,
                                "class": "Panorama",
                                "frames": [
                                 {
                                  "sphere": {
                                   "class": "ImageResource",
                                   "levels": [
                                    {
                                     "height": 3040,
                                     "width": 6080,
                                     "class": "ImageResourceLevel",
                                     "url": "media/panorama_C38EF781_CFAB_7AEB_418A_B750EAA1CAF9_hq.jpeg"
                                    },
                                    {
                                     "height": 1608,
                                     "width": 3217,
                                     "class": "ImageResourceLevel",
                                     "url": "media/panorama_C38EF781_CFAB_7AEB_418A_B750EAA1CAF9.jpeg"
                                    }
                                   ]
                                  },
                                  "thumbnailUrl": "media/panorama_C38EF781_CFAB_7AEB_418A_B750EAA1CAF9_t.jpg",
                                  "class": "SphericPanoramaFrame",
                                  "overlays": [
                                   {
                                    "maps": [
                                     {
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "height": 50,
                                         "width": 50,
                                         "class": "ImageResourceLevel",
                                         "url": "media/panorama_C38EF781_CFAB_7AEB_418A_B750EAA1CAF9_0_HS_0_0_0_map.gif"
                                        }
                                       ]
                                      },
                                      "hfov": 5.52,
                                      "class": "HotspotPanoramaOverlayMap",
                                      "yaw": 14.97,
                                      "pitch": -21.33
                                     }
                                    ],
                                    "rollOverDisplay": false,
                                    "enabledInCardboard": true,
                                    "class": "HotspotPanoramaOverlay",
                                    "areas": [
                                     {
                                      "mapColor": "#FF0000",
                                      "class": "HotspotPanoramaOverlayArea",
                                      "click": "this.startPanoramaWithCamera(this.panorama_C38ED68D_CFAB_3AFB_41E8_AFFE674CE495, this.camera_E1244FE8_F2E0_AA52_41E9_088F4E0CB99D); this.mainPlayList.set('selectedIndex', 18)"
                                     }
                                    ],
                                    "useHandCursor": true,
                                    "id": "overlay_C903EC68_D1F7_E78C_41E3_75B6B12D144E",
                                    "items": [
                                     {
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "height": 100,
                                         "width": 100,
                                         "class": "ImageResourceLevel",
                                         "url": "media/panorama_C38EF781_CFAB_7AEB_418A_B750EAA1CAF9_0_HS_0_0.png"
                                        }
                                       ]
                                      },
                                      "class": "HotspotPanoramaOverlayImage",
                                      "yaw": 14.97,
                                      "hfov": 5.52,
                                      "pitch": -21.33
                                     }
                                    ]
                                   },
                                   {
                                    "maps": [
                                     {
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "height": 74,
                                         "width": 74,
                                         "class": "ImageResourceLevel",
                                         "url": "media/panorama_C38EF781_CFAB_7AEB_418A_B750EAA1CAF9_0_HS_1_0_0_map.gif"
                                        }
                                       ]
                                      },
                                      "hfov": 6.42,
                                      "class": "HotspotPanoramaOverlayMap",
                                      "yaw": 1.46,
                                      "pitch": -43.69
                                     }
                                    ],
                                    "rollOverDisplay": false,
                                    "enabledInCardboard": true,
                                    "class": "HotspotPanoramaOverlay",
                                    "areas": [
                                     {
                                      "mapColor": "#FF0000",
                                      "class": "HotspotPanoramaOverlayArea",
                                      "click": "this.startPanoramaWithCamera(this.panorama_C38EFD85_CFAB_2EEB_41AA_1FA5F8AEA01D, this.camera_E129AFFA_F2E0_AA36_41E6_ACEB8ABB68C0); this.mainPlayList.set('selectedIndex', 17)"
                                     }
                                    ],
                                    "useHandCursor": true,
                                    "id": "overlay_C90CD64F_D1F7_A385_41E6_4CCA0750B794",
                                    "items": [
                                     {
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "height": 149,
                                         "width": 149,
                                         "class": "ImageResourceLevel",
                                         "url": "media/panorama_C38EF781_CFAB_7AEB_418A_B750EAA1CAF9_0_HS_1_0.png"
                                        }
                                       ]
                                      },
                                      "class": "HotspotPanoramaOverlayImage",
                                      "yaw": 1.46,
                                      "hfov": 6.42,
                                      "pitch": -43.69
                                     }
                                    ]
                                   },
                                   {
                                    "maps": [
                                     {
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "height": 74,
                                         "width": 74,
                                         "class": "ImageResourceLevel",
                                         "url": "media/panorama_C38EF781_CFAB_7AEB_418A_B750EAA1CAF9_0_HS_2_0_0_map.gif"
                                        }
                                       ]
                                      },
                                      "hfov": 7.53,
                                      "class": "HotspotPanoramaOverlayMap",
                                      "yaw": 106.63,
                                      "pitch": -31.99
                                     }
                                    ],
                                    "rollOverDisplay": false,
                                    "enabledInCardboard": true,
                                    "class": "HotspotPanoramaOverlay",
                                    "areas": [
                                     {
                                      "mapColor": "#FF0000",
                                      "class": "HotspotPanoramaOverlayArea",
                                      "click": "this.startPanoramaWithCamera(this.panorama_C38E83E8_CFAB_1A39_41E9_D67B70C790DA, this.camera_E130CFD6_F2E0_AA7F_41C2_1201BEC19443); this.mainPlayList.set('selectedIndex', 14)"
                                     }
                                    ],
                                    "useHandCursor": true,
                                    "id": "overlay_C8760FDF_D1F7_6085_41BF_E718D0E9A1B4",
                                    "items": [
                                     {
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "height": 149,
                                         "width": 149,
                                         "class": "ImageResourceLevel",
                                         "url": "media/panorama_C38EF781_CFAB_7AEB_418A_B750EAA1CAF9_0_HS_2_0.png"
                                        }
                                       ]
                                      },
                                      "class": "HotspotPanoramaOverlayImage",
                                      "yaw": 106.63,
                                      "hfov": 7.53,
                                      "pitch": -31.99
                                     }
                                    ]
                                   },
                                   {
                                    "maps": [
                                     {
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "height": 74,
                                         "width": 74,
                                         "class": "ImageResourceLevel",
                                         "url": "media/panorama_C38EF781_CFAB_7AEB_418A_B750EAA1CAF9_0_HS_3_0_0_map.gif"
                                        }
                                       ]
                                      },
                                      "hfov": 7.08,
                                      "class": "HotspotPanoramaOverlayMap",
                                      "yaw": -174.92,
                                      "pitch": -37.1
                                     }
                                    ],
                                    "rollOverDisplay": false,
                                    "enabledInCardboard": true,
                                    "class": "HotspotPanoramaOverlay",
                                    "areas": [
                                     {
                                      "mapColor": "#FF0000",
                                      "class": "HotspotPanoramaOverlayArea",
                                      "click": "this.startPanoramaWithCamera(this.panorama_C38ED2B1_CFAB_1A2B_41B2_633C8B4C5CE1, this.camera_E14ACFC5_F2E0_AA52_41D6_F9D6477F8BBE); this.mainPlayList.set('selectedIndex', 16)"
                                     }
                                    ],
                                    "useHandCursor": true,
                                    "id": "overlay_C9C525D9_D1F5_A08D_41E9_ABA19C09DE2D",
                                    "items": [
                                     {
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "height": 149,
                                         "width": 149,
                                         "class": "ImageResourceLevel",
                                         "url": "media/panorama_C38EF781_CFAB_7AEB_418A_B750EAA1CAF9_0_HS_3_0.png"
                                        }
                                       ]
                                      },
                                      "class": "HotspotPanoramaOverlayImage",
                                      "yaw": -174.92,
                                      "hfov": 7.08,
                                      "pitch": -37.1
                                     }
                                    ]
                                   },
                                   {
                                    "maps": [
                                     {
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "height": 64,
                                         "width": 16,
                                         "class": "ImageResourceLevel",
                                         "url": "media/panorama_C38EF781_CFAB_7AEB_418A_B750EAA1CAF9_0_HS_7_0_0_map.gif"
                                        }
                                       ]
                                      },
                                      "hfov": 10.39,
                                      "class": "HotspotPanoramaOverlayMap",
                                      "yaw": 118.36,
                                      "pitch": -6.85
                                     }
                                    ],
                                    "rollOverDisplay": true,
                                    "enabledInCardboard": true,
                                    "class": "HotspotPanoramaOverlay",
                                    "areas": [
                                     {
                                      "class": "HotspotPanoramaOverlayArea",
                                      "mapColor": "#FF0000"
                                     }
                                    ],
                                    "useHandCursor": true,
                                    "id": "overlay_DC3FFB66_D3D6_79F9_41D0_3DB3D2B69597",
                                    "items": [
                                     {
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "height": 705,
                                         "width": 176,
                                         "class": "ImageResourceLevel",
                                         "url": "media/panorama_C38EF781_CFAB_7AEB_418A_B750EAA1CAF9_0_HS_7_0.png"
                                        }
                                       ]
                                      },
                                      "class": "HotspotPanoramaOverlayImage",
                                      "yaw": 118.36,
                                      "hfov": 10.39,
                                      "pitch": -6.85
                                     }
                                    ]
                                   },
                                   {
                                    "maps": [
                                     {
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "height": 32,
                                         "width": 16,
                                         "class": "ImageResourceLevel",
                                         "url": "media/panorama_C38EF781_CFAB_7AEB_418A_B750EAA1CAF9_0_HS_8_0_0_map.gif"
                                        }
                                       ]
                                      },
                                      "hfov": 12.65,
                                      "class": "HotspotPanoramaOverlayMap",
                                      "yaw": 13.58,
                                      "pitch": 1.3
                                     }
                                    ],
                                    "rollOverDisplay": true,
                                    "enabledInCardboard": true,
                                    "class": "HotspotPanoramaOverlay",
                                    "areas": [
                                     {
                                      "class": "HotspotPanoramaOverlayArea",
                                      "mapColor": "#FF0000"
                                     }
                                    ],
                                    "useHandCursor": true,
                                    "id": "overlay_F677E68E_D568_D48B_41E9_E805BCF9552D",
                                    "items": [
                                     {
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "height": 428,
                                         "width": 213,
                                         "class": "ImageResourceLevel",
                                         "url": "media/panorama_C38EF781_CFAB_7AEB_418A_B750EAA1CAF9_0_HS_8_0.png"
                                        }
                                       ]
                                      },
                                      "class": "HotspotPanoramaOverlayImage",
                                      "yaw": 13.58,
                                      "hfov": 12.65,
                                      "pitch": 1.3
                                     }
                                    ]
                                   },
                                   {
                                    "maps": [
                                     {
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "height": 44,
                                         "width": 16,
                                         "class": "ImageResourceLevel",
                                         "url": "media/panorama_C38EF781_CFAB_7AEB_418A_B750EAA1CAF9_0_HS_9_0_0_map.gif"
                                        }
                                       ]
                                      },
                                      "hfov": 22.22,
                                      "class": "HotspotPanoramaOverlayMap",
                                      "yaw": -41.14,
                                      "pitch": -0.72
                                     }
                                    ],
                                    "rollOverDisplay": true,
                                    "enabledInCardboard": true,
                                    "class": "HotspotPanoramaOverlay",
                                    "areas": [
                                     {
                                      "class": "HotspotPanoramaOverlayArea",
                                      "mapColor": "#FF0000"
                                     }
                                    ],
                                    "useHandCursor": true,
                                    "id": "overlay_F1504EBD_D568_B489_41BE_B168E2752B1B",
                                    "items": [
                                     {
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "height": 1036,
                                         "width": 375,
                                         "class": "ImageResourceLevel",
                                         "url": "media/panorama_C38EF781_CFAB_7AEB_418A_B750EAA1CAF9_0_HS_9_0.png"
                                        }
                                       ]
                                      },
                                      "class": "HotspotPanoramaOverlayImage",
                                      "yaw": -41.14,
                                      "hfov": 22.22,
                                      "pitch": -0.72
                                     }
                                    ]
                                   },
                                   {
                                    "maps": [
                                     {
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "height": 200,
                                         "width": 83,
                                         "class": "ImageResourceLevel",
                                         "url": "media/panorama_C38EF781_CFAB_7AEB_418A_B750EAA1CAF9_0_HS_4_1_0_map.gif"
                                        }
                                       ]
                                      },
                                      "hfov": 36.01,
                                      "class": "HotspotPanoramaOverlayMap",
                                      "yaw": -43.61,
                                      "pitch": 1.36
                                     }
                                    ],
                                    "rollOverDisplay": false,
                                    "enabledInCardboard": true,
                                    "class": "HotspotPanoramaOverlay",
                                    "areas": [
                                     {
                                      "toolTip": "Go to\u000aBALCONY",
                                      "class": "HotspotPanoramaOverlayArea",
                                      "click": "this.mainPlayList.set('selectedIndex', 19)",
                                      "displayTooltipInTouchScreens": true,
                                      "mapColor": "#FF0000"
                                     }
                                    ],
                                    "useHandCursor": true,
                                    "id": "overlay_C832A0F7_D1FD_6084_41C3_FEDAEE89AEC7",
                                    "items": [
                                     {
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "height": 1506,
                                         "width": 629,
                                         "class": "ImageResourceLevel",
                                         "url": "media/panorama_C38EF781_CFAB_7AEB_418A_B750EAA1CAF9_0_HS_4_0.png"
                                        }
                                       ]
                                      },
                                      "class": "HotspotPanoramaOverlayImage",
                                      "yaw": -43.61,
                                      "hfov": 36.01,
                                      "roll": 0,
                                      "pitch": 1.36
                                     }
                                    ]
                                   },
                                   {
                                    "maps": [
                                     {
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "height": 200,
                                         "width": 178,
                                         "class": "ImageResourceLevel",
                                         "url": "media/panorama_C38EF781_CFAB_7AEB_418A_B750EAA1CAF9_0_HS_5_1_0_map.gif"
                                        }
                                       ]
                                      },
                                      "hfov": 24.85,
                                      "class": "HotspotPanoramaOverlayMap",
                                      "yaw": 12.99,
                                      "pitch": 0.05
                                     }
                                    ],
                                    "rollOverDisplay": false,
                                    "enabledInCardboard": true,
                                    "class": "HotspotPanoramaOverlay",
                                    "areas": [
                                     {
                                      "toolTip": "Go to\u000aBALCONY",
                                      "class": "HotspotPanoramaOverlayArea",
                                      "click": "this.mainPlayList.set('selectedIndex', 22)",
                                      "displayTooltipInTouchScreens": true,
                                      "mapColor": "#FF0000"
                                     }
                                    ],
                                    "useHandCursor": true,
                                    "id": "overlay_CB56B676_D1FD_E384_41D4_799C7A3C329A",
                                    "items": [
                                     {
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "height": 479,
                                         "width": 426,
                                         "class": "ImageResourceLevel",
                                         "url": "media/panorama_C38EF781_CFAB_7AEB_418A_B750EAA1CAF9_0_HS_5_0.png"
                                        }
                                       ]
                                      },
                                      "class": "HotspotPanoramaOverlayImage",
                                      "yaw": 12.99,
                                      "hfov": 24.85,
                                      "roll": 0,
                                      "pitch": 0.05
                                     }
                                    ]
                                   },
                                   {
                                    "maps": [
                                     {
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "height": 200,
                                         "width": 56,
                                         "class": "ImageResourceLevel",
                                         "url": "media/panorama_C38EF781_CFAB_7AEB_418A_B750EAA1CAF9_0_HS_6_1_0_map.gif"
                                        }
                                       ]
                                      },
                                      "hfov": 12.1,
                                      "class": "HotspotPanoramaOverlayMap",
                                      "yaw": 117.86,
                                      "pitch": -4.06
                                     }
                                    ],
                                    "rollOverDisplay": false,
                                    "enabledInCardboard": true,
                                    "class": "HotspotPanoramaOverlay",
                                    "areas": [
                                     {
                                      "toolTip": "Go to\u000aTV LOUNGE",
                                      "class": "HotspotPanoramaOverlayArea",
                                      "click": "this.mainPlayList.set('selectedIndex', 6)",
                                      "displayTooltipInTouchScreens": true,
                                      "mapColor": "#FF0000"
                                     }
                                    ],
                                    "useHandCursor": true,
                                    "id": "overlay_CB9861F3_D1FF_609C_41E4_BCF638F509F6",
                                    "items": [
                                     {
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "height": 725,
                                         "width": 205,
                                         "class": "ImageResourceLevel",
                                         "url": "media/panorama_C38EF781_CFAB_7AEB_418A_B750EAA1CAF9_0_HS_6_0.png"
                                        }
                                       ]
                                      },
                                      "class": "HotspotPanoramaOverlayImage",
                                      "yaw": 117.86,
                                      "hfov": 12.1,
                                      "roll": 0,
                                      "pitch": -4.06
                                     }
                                    ]
                                   }
                                  ]
                                 }
                                ],
                                "label": "17",
                                "hfov": 360,
                                "hfovMax": 140
                               },
                               "class": "AdjacentPanorama",
                               "yaw": -141.73,
                               "distance": 1,
                               "backwardYaw": 1.46
                              },
                              {
                               "panorama": {
                                "vfov": 180,
                                "adjacentPanoramas": [
                                 {
                                  "panorama": {
                                   "vfov": 180,
                                   "adjacentPanoramas": [
                                    {
                                     "panorama": "this.panorama_C38ED0A5_CFAB_162B_41C2_538CF86DC268",
                                     "class": "AdjacentPanorama",
                                     "yaw": -155.57,
                                     "distance": 1,
                                     "backwardYaw": 57.92
                                    },
                                    {
                                     "panorama": {
                                      "vfov": 180,
                                      "adjacentPanoramas": [
                                       {
                                        "panorama": "this.panorama_C38EFA64_CFAB_EA29_41C3_C9002B55D89F",
                                        "class": "AdjacentPanorama",
                                        "yaw": -177.17,
                                        "distance": 1,
                                        "backwardYaw": -99.67
                                       },
                                       {
                                        "panorama": {
                                         "vfov": 180,
                                         "adjacentPanoramas": [
                                          {
                                           "panorama": "this.panorama_D9414400_D3FD_CA62_41E7_FCEB987BA188",
                                           "class": "AdjacentPanorama",
                                           "yaw": -142.83,
                                           "distance": 1,
                                           "backwardYaw": 179.9
                                          },
                                          {
                                           "panorama": "this.panorama_C38EFA64_CFAB_EA29_41C3_C9002B55D89F",
                                           "class": "AdjacentPanorama",
                                           "yaw": -140.32,
                                           "distance": 1,
                                           "backwardYaw": 73.77
                                          },
                                          {
                                           "panorama": {
                                            "vfov": 180,
                                            "adjacentPanoramas": [
                                             {
                                              "panorama": {
                                               "vfov": 180,
                                               "adjacentPanoramas": [
                                                {
                                                 "panorama": "this.panorama_D940AB24_D3FD_FEA2_41E2_CA89539FFD1F",
                                                 "class": "AdjacentPanorama",
                                                 "yaw": 126.45,
                                                 "distance": 1,
                                                 "backwardYaw": -92.93
                                                },
                                                {
                                                 "panorama": "this.panorama_D8A3BCE1_D3FD_5BA2_41E5_68EBE3ED1FA6",
                                                 "class": "AdjacentPanorama",
                                                 "yaw": -61.01,
                                                 "distance": 1,
                                                 "backwardYaw": 94.4
                                                }
                                               ],
                                               "hfovMin": 70,
                                               "thumbnailUrl": "media/panorama_D93F22C3_D3FD_CFE6_41E8_6411D8B756B6_t.jpg",
                                               "id": "panorama_D93F22C3_D3FD_CFE6_41E8_6411D8B756B6",
                                               "pitch": 0,
                                               "partial": false,
                                               "class": "Panorama",
                                               "frames": [
                                                {
                                                 "sphere": {
                                                  "class": "ImageResource",
                                                  "levels": [
                                                   {
                                                    "height": 3040,
                                                    "width": 6080,
                                                    "class": "ImageResourceLevel",
                                                    "url": "media/panorama_D93F22C3_D3FD_CFE6_41E8_6411D8B756B6_hq.jpeg"
                                                   },
                                                   {
                                                    "height": 1608,
                                                    "width": 3217,
                                                    "class": "ImageResourceLevel",
                                                    "url": "media/panorama_D93F22C3_D3FD_CFE6_41E8_6411D8B756B6.jpeg"
                                                   }
                                                  ]
                                                 },
                                                 "thumbnailUrl": "media/panorama_D93F22C3_D3FD_CFE6_41E8_6411D8B756B6_t.jpg",
                                                 "class": "SphericPanoramaFrame",
                                                 "overlays": [
                                                  {
                                                   "maps": [
                                                    {
                                                     "image": {
                                                      "class": "ImageResource",
                                                      "levels": [
                                                       {
                                                        "height": 30,
                                                        "width": 16,
                                                        "class": "ImageResourceLevel",
                                                        "url": "media/panorama_D93F22C3_D3FD_CFE6_41E8_6411D8B756B6_0_HS_5_0_0_map.gif"
                                                       }
                                                      ]
                                                     },
                                                     "hfov": 52.31,
                                                     "class": "HotspotPanoramaOverlayMap",
                                                     "yaw": -155.04,
                                                     "pitch": 2.96
                                                    }
                                                   ],
                                                   "rollOverDisplay": true,
                                                   "enabledInCardboard": true,
                                                   "class": "HotspotPanoramaOverlay",
                                                   "areas": [
                                                    {
                                                     "class": "HotspotPanoramaOverlayArea",
                                                     "mapColor": "#FF0000"
                                                    }
                                                   ],
                                                   "useHandCursor": true,
                                                   "id": "overlay_F6ECBD8E_D578_548A_41C7_65D94BD09B8D",
                                                   "items": [
                                                    {
                                                     "image": {
                                                      "class": "ImageResource",
                                                      "levels": [
                                                       {
                                                        "height": 1681,
                                                        "width": 884,
                                                        "class": "ImageResourceLevel",
                                                        "url": "media/panorama_D93F22C3_D3FD_CFE6_41E8_6411D8B756B6_0_HS_5_0.png"
                                                       }
                                                      ]
                                                     },
                                                     "class": "HotspotPanoramaOverlayImage",
                                                     "yaw": -155.04,
                                                     "hfov": 52.31,
                                                     "pitch": 2.96
                                                    }
                                                   ]
                                                  },
                                                  {
                                                   "maps": [
                                                    {
                                                     "image": {
                                                      "class": "ImageResource",
                                                      "levels": [
                                                       {
                                                        "height": 16,
                                                        "width": 16,
                                                        "class": "ImageResourceLevel",
                                                        "url": "media/panorama_D93F22C3_D3FD_CFE6_41E8_6411D8B756B6_0_HS_3_0_0_map.gif"
                                                       }
                                                      ]
                                                     },
                                                     "hfov": 8.44,
                                                     "class": "HotspotPanoramaOverlayMap",
                                                     "yaw": 126.45,
                                                     "pitch": -18.17
                                                    }
                                                   ],
                                                   "rollOverDisplay": false,
                                                   "enabledInCardboard": true,
                                                   "class": "HotspotPanoramaOverlay",
                                                   "areas": [
                                                    {
                                                     "mapColor": "#FF0000",
                                                     "class": "HotspotPanoramaOverlayArea",
                                                     "click": "this.startPanoramaWithCamera(this.panorama_D940AB24_D3FD_FEA2_41E2_CA89539FFD1F, this.camera_E1BEF3E9_F2E0_BA52_41BE_F6185F39A1A1); this.mainPlayList.set('selectedIndex', 23)"
                                                    }
                                                   ],
                                                   "useHandCursor": true,
                                                   "id": "overlay_CD766150_D43B_4AE2_41CF_5C77A498399D",
                                                   "items": [
                                                    {
                                                     "image": {
                                                      "class": "ImageResource",
                                                      "levels": [
                                                       {
                                                        "height": 150,
                                                        "width": 150,
                                                        "class": "ImageResourceLevel",
                                                        "url": "media/panorama_D93F22C3_D3FD_CFE6_41E8_6411D8B756B6_0_HS_3_0.png"
                                                       }
                                                      ]
                                                     },
                                                     "class": "HotspotPanoramaOverlayImage",
                                                     "yaw": 126.45,
                                                     "hfov": 8.44,
                                                     "pitch": -18.17
                                                    }
                                                   ]
                                                  },
                                                  {
                                                   "maps": [
                                                    {
                                                     "image": {
                                                      "class": "ImageResource",
                                                      "levels": [
                                                       {
                                                        "height": 16,
                                                        "width": 16,
                                                        "class": "ImageResourceLevel",
                                                        "url": "media/panorama_D93F22C3_D3FD_CFE6_41E8_6411D8B756B6_0_HS_4_0_0_map.gif"
                                                       }
                                                      ]
                                                     },
                                                     "hfov": 7.79,
                                                     "class": "HotspotPanoramaOverlayMap",
                                                     "yaw": -61.01,
                                                     "pitch": -28.67
                                                    }
                                                   ],
                                                   "rollOverDisplay": false,
                                                   "enabledInCardboard": true,
                                                   "class": "HotspotPanoramaOverlay",
                                                   "areas": [
                                                    {
                                                     "mapColor": "#FF0000",
                                                     "class": "HotspotPanoramaOverlayArea",
                                                     "click": "this.startPanoramaWithCamera(this.panorama_D8A3BCE1_D3FD_5BA2_41E5_68EBE3ED1FA6, this.camera_E1BAE404_F2E0_BDD2_41E4_006F9E76AFB9); this.mainPlayList.set('selectedIndex', 21)"
                                                    }
                                                   ],
                                                   "useHandCursor": true,
                                                   "id": "overlay_CD690DA2_D43A_B5A6_41D5_8A89B7CEB485",
                                                   "items": [
                                                    {
                                                     "image": {
                                                      "class": "ImageResource",
                                                      "levels": [
                                                       {
                                                        "height": 150,
                                                        "width": 150,
                                                        "class": "ImageResourceLevel",
                                                        "url": "media/panorama_D93F22C3_D3FD_CFE6_41E8_6411D8B756B6_0_HS_4_0.png"
                                                       }
                                                      ]
                                                     },
                                                     "class": "HotspotPanoramaOverlayImage",
                                                     "yaw": -61.01,
                                                     "hfov": 7.79,
                                                     "pitch": -28.67
                                                    }
                                                   ]
                                                  },
                                                  {
                                                   "maps": [
                                                    {
                                                     "image": {
                                                      "class": "ImageResource",
                                                      "levels": [
                                                       {
                                                        "height": 77,
                                                        "width": 16,
                                                        "class": "ImageResourceLevel",
                                                        "url": "media/panorama_D93F22C3_D3FD_CFE6_41E8_6411D8B756B6_0_HS_6_0_0_map.gif"
                                                       }
                                                      ]
                                                     },
                                                     "hfov": 6,
                                                     "class": "HotspotPanoramaOverlayMap",
                                                     "yaw": 135.71,
                                                     "pitch": 1.79
                                                    }
                                                   ],
                                                   "rollOverDisplay": true,
                                                   "enabledInCardboard": true,
                                                   "class": "HotspotPanoramaOverlay",
                                                   "areas": [
                                                    {
                                                     "class": "HotspotPanoramaOverlayArea",
                                                     "mapColor": "#FF0000"
                                                    }
                                                   ],
                                                   "useHandCursor": true,
                                                   "id": "overlay_F1C997AB_D578_D489_41C5_7AAF25E6F4BF",
                                                   "items": [
                                                    {
                                                     "image": {
                                                      "class": "ImageResource",
                                                      "levels": [
                                                       {
                                                        "height": 490,
                                                        "width": 101,
                                                        "class": "ImageResourceLevel",
                                                        "url": "media/panorama_D93F22C3_D3FD_CFE6_41E8_6411D8B756B6_0_HS_6_0.png"
                                                       }
                                                      ]
                                                     },
                                                     "class": "HotspotPanoramaOverlayImage",
                                                     "yaw": 135.71,
                                                     "hfov": 6,
                                                     "pitch": 1.79
                                                    }
                                                   ]
                                                  },
                                                  {
                                                   "maps": [
                                                    {
                                                     "image": {
                                                      "class": "ImageResource",
                                                      "levels": [
                                                       {
                                                        "height": 200,
                                                        "width": 118,
                                                        "class": "ImageResourceLevel",
                                                        "url": "media/panorama_D93F22C3_D3FD_CFE6_41E8_6411D8B756B6_0_HS_0_1_0_map.gif"
                                                       }
                                                      ]
                                                     },
                                                     "hfov": 75.25,
                                                     "class": "HotspotPanoramaOverlayMap",
                                                     "yaw": -143.16,
                                                     "pitch": 1.95
                                                    }
                                                   ],
                                                   "rollOverDisplay": false,
                                                   "enabledInCardboard": true,
                                                   "class": "HotspotPanoramaOverlay",
                                                   "areas": [
                                                    {
                                                     "toolTip": "Go to\u000aBEDROOM 2",
                                                     "class": "HotspotPanoramaOverlayArea",
                                                     "click": "this.mainPlayList.set('selectedIndex', 18)",
                                                     "displayTooltipInTouchScreens": true,
                                                     "mapColor": "#FF0000"
                                                    }
                                                   ],
                                                   "useHandCursor": true,
                                                   "id": "overlay_C3DDAFB4_D407_D5A3_41D2_69A98F6913C6",
                                                   "items": [
                                                    {
                                                     "image": {
                                                      "class": "ImageResource",
                                                      "levels": [
                                                       {
                                                        "height": 2048,
                                                        "width": 1211,
                                                        "class": "ImageResourceLevel",
                                                        "url": "media/panorama_D93F22C3_D3FD_CFE6_41E8_6411D8B756B6_0_HS_0_0.png"
                                                       }
                                                      ]
                                                     },
                                                     "class": "HotspotPanoramaOverlayImage",
                                                     "yaw": -143.16,
                                                     "hfov": 75.25,
                                                     "roll": 0,
                                                     "pitch": 1.95
                                                    }
                                                   ]
                                                  },
                                                  {
                                                   "maps": [
                                                    {
                                                     "image": {
                                                      "class": "ImageResource",
                                                      "levels": [
                                                       {
                                                        "height": 200,
                                                        "width": 47,
                                                        "class": "ImageResourceLevel",
                                                        "url": "media/panorama_D93F22C3_D3FD_CFE6_41E8_6411D8B756B6_0_HS_1_1_0_map.gif"
                                                       }
                                                      ]
                                                     },
                                                     "hfov": 27.75,
                                                     "class": "HotspotPanoramaOverlayMap",
                                                     "yaw": 166.08,
                                                     "pitch": 1.54
                                                    }
                                                   ],
                                                   "rollOverDisplay": false,
                                                   "enabledInCardboard": true,
                                                   "class": "HotspotPanoramaOverlay",
                                                   "areas": [
                                                    {
                                                     "toolTip": "Go to\u000aBEDROOM 2",
                                                     "class": "HotspotPanoramaOverlayArea",
                                                     "click": "this.mainPlayList.set('selectedIndex', 18)",
                                                     "displayTooltipInTouchScreens": true,
                                                     "mapColor": "#FF0000"
                                                    }
                                                   ],
                                                   "useHandCursor": true,
                                                   "id": "overlay_CC39FB86_D407_7E6E_41E1_531F35A8770E",
                                                   "items": [
                                                    {
                                                     "image": {
                                                      "class": "ImageResource",
                                                      "levels": [
                                                       {
                                                        "height": 2022,
                                                        "width": 478,
                                                        "class": "ImageResourceLevel",
                                                        "url": "media/panorama_D93F22C3_D3FD_CFE6_41E8_6411D8B756B6_0_HS_1_0.png"
                                                       }
                                                      ]
                                                     },
                                                     "class": "HotspotPanoramaOverlayImage",
                                                     "yaw": 166.08,
                                                     "hfov": 27.75,
                                                     "roll": 0,
                                                     "pitch": 1.54
                                                    }
                                                   ]
                                                  },
                                                  {
                                                   "maps": [
                                                    {
                                                     "image": {
                                                      "class": "ImageResource",
                                                      "levels": [
                                                       {
                                                        "height": 200,
                                                        "width": 30,
                                                        "class": "ImageResourceLevel",
                                                        "url": "media/panorama_D93F22C3_D3FD_CFE6_41E8_6411D8B756B6_0_HS_2_1_0_map.gif"
                                                       }
                                                      ]
                                                     },
                                                     "hfov": 6.18,
                                                     "class": "HotspotPanoramaOverlayMap",
                                                     "yaw": 135.56,
                                                     "pitch": -0.92
                                                    }
                                                   ],
                                                   "rollOverDisplay": false,
                                                   "enabledInCardboard": true,
                                                   "class": "HotspotPanoramaOverlay",
                                                   "areas": [
                                                    {
                                                     "toolTip": "Go to\u000aBEDROOM 1",
                                                     "class": "HotspotPanoramaOverlayArea",
                                                     "click": "this.mainPlayList.set('selectedIndex', 10)",
                                                     "displayTooltipInTouchScreens": true,
                                                     "mapColor": "#FF0000"
                                                    }
                                                   ],
                                                   "useHandCursor": true,
                                                   "id": "overlay_CCFA5DBC_D405_B5A2_41D7_2B0160911FBF",
                                                   "items": [
                                                    {
                                                     "image": {
                                                      "class": "ImageResource",
                                                      "levels": [
                                                       {
                                                        "height": 676,
                                                        "width": 104,
                                                        "class": "ImageResourceLevel",
                                                        "url": "media/panorama_D93F22C3_D3FD_CFE6_41E8_6411D8B756B6_0_HS_2_0.png"
                                                       }
                                                      ]
                                                     },
                                                     "class": "HotspotPanoramaOverlayImage",
                                                     "yaw": 135.56,
                                                     "hfov": 6.18,
                                                     "roll": 0,
                                                     "pitch": -0.92
                                                    }
                                                   ]
                                                  }
                                                 ]
                                                }
                                               ],
                                               "label": "24",
                                               "hfov": 360,
                                               "hfovMax": 140
                                              },
                                              "class": "AdjacentPanorama",
                                              "yaw": -92.93,
                                              "distance": 1,
                                              "backwardYaw": 126.45
                                             },
                                             {
                                              "panorama": "this.panorama_D8A3BCE1_D3FD_5BA2_41E5_68EBE3ED1FA6",
                                              "class": "AdjacentPanorama",
                                              "yaw": -93.04,
                                              "distance": 1,
                                              "backwardYaw": 94.45
                                             }
                                            ],
                                            "hfovMin": 70,
                                            "thumbnailUrl": "media/panorama_D940AB24_D3FD_FEA2_41E2_CA89539FFD1F_t.jpg",
                                            "id": "panorama_D940AB24_D3FD_FEA2_41E2_CA89539FFD1F",
                                            "pitch": 0,
                                            "partial": false,
                                            "class": "Panorama",
                                            "frames": [
                                             {
                                              "sphere": {
                                               "class": "ImageResource",
                                               "levels": [
                                                {
                                                 "height": 3040,
                                                 "width": 6080,
                                                 "class": "ImageResourceLevel",
                                                 "url": "media/panorama_D940AB24_D3FD_FEA2_41E2_CA89539FFD1F_hq.jpeg"
                                                },
                                                {
                                                 "height": 1608,
                                                 "width": 3217,
                                                 "class": "ImageResourceLevel",
                                                 "url": "media/panorama_D940AB24_D3FD_FEA2_41E2_CA89539FFD1F.jpeg"
                                                }
                                               ]
                                              },
                                              "thumbnailUrl": "media/panorama_D940AB24_D3FD_FEA2_41E2_CA89539FFD1F_t.jpg",
                                              "class": "SphericPanoramaFrame",
                                              "overlays": [
                                               {
                                                "maps": [
                                                 {
                                                  "image": {
                                                   "class": "ImageResource",
                                                   "levels": [
                                                    {
                                                     "height": 16,
                                                     "width": 16,
                                                     "class": "ImageResourceLevel",
                                                     "url": "media/panorama_D940AB24_D3FD_FEA2_41E2_CA89539FFD1F_0_HS_0_0_0_map.gif"
                                                    }
                                                   ]
                                                  },
                                                  "hfov": 8.21,
                                                  "class": "HotspotPanoramaOverlayMap",
                                                  "yaw": -92.93,
                                                  "pitch": -22.5
                                                 }
                                                ],
                                                "rollOverDisplay": false,
                                                "enabledInCardboard": true,
                                                "class": "HotspotPanoramaOverlay",
                                                "areas": [
                                                 {
                                                  "mapColor": "#FF0000",
                                                  "class": "HotspotPanoramaOverlayArea",
                                                  "click": "this.startPanoramaWithCamera(this.panorama_D93F22C3_D3FD_CFE6_41E8_6411D8B756B6, this.camera_E17F7F2B_F2E0_ABD6_41D1_26AC2059F3EC); this.mainPlayList.set('selectedIndex', 22)"
                                                 }
                                                ],
                                                "useHandCursor": true,
                                                "id": "overlay_C853E779_D43E_D6A2_41B8_CCF32BC1A83C",
                                                "items": [
                                                 {
                                                  "image": {
                                                   "class": "ImageResource",
                                                   "levels": [
                                                    {
                                                     "height": 150,
                                                     "width": 150,
                                                     "class": "ImageResourceLevel",
                                                     "url": "media/panorama_D940AB24_D3FD_FEA2_41E2_CA89539FFD1F_0_HS_0_0.png"
                                                    }
                                                   ]
                                                  },
                                                  "class": "HotspotPanoramaOverlayImage",
                                                  "yaw": -92.93,
                                                  "hfov": 8.21,
                                                  "pitch": -22.5
                                                 }
                                                ]
                                               },
                                               {
                                                "maps": [
                                                 {
                                                  "image": {
                                                   "class": "ImageResource",
                                                   "levels": [
                                                    {
                                                     "height": 16,
                                                     "width": 16,
                                                     "class": "ImageResourceLevel",
                                                     "url": "media/panorama_D940AB24_D3FD_FEA2_41E2_CA89539FFD1F_0_HS_1_0_0_map.gif"
                                                    }
                                                   ]
                                                  },
                                                  "hfov": 5.79,
                                                  "class": "HotspotPanoramaOverlayMap",
                                                  "yaw": -93.04,
                                                  "pitch": -12.28
                                                 }
                                                ],
                                                "rollOverDisplay": false,
                                                "enabledInCardboard": true,
                                                "class": "HotspotPanoramaOverlay",
                                                "areas": [
                                                 {
                                                  "mapColor": "#FF0000",
                                                  "class": "HotspotPanoramaOverlayArea",
                                                  "click": "this.startPanoramaWithCamera(this.panorama_D8A3BCE1_D3FD_5BA2_41E5_68EBE3ED1FA6, this.camera_E179FF48_F2E0_AA53_41EB_B4DB47512E2F); this.mainPlayList.set('selectedIndex', 21)"
                                                 }
                                                ],
                                                "useHandCursor": true,
                                                "id": "overlay_CE6244F1_D43E_CBA2_41E1_CB2FFED0288F",
                                                "items": [
                                                 {
                                                  "image": {
                                                   "class": "ImageResource",
                                                   "levels": [
                                                    {
                                                     "height": 100,
                                                     "width": 100,
                                                     "class": "ImageResourceLevel",
                                                     "url": "media/panorama_D940AB24_D3FD_FEA2_41E2_CA89539FFD1F_0_HS_1_0.png"
                                                    }
                                                   ]
                                                  },
                                                  "class": "HotspotPanoramaOverlayImage",
                                                  "yaw": -93.04,
                                                  "hfov": 5.79,
                                                  "pitch": -12.28
                                                 }
                                                ]
                                               },
                                               {
                                                "maps": [
                                                 {
                                                  "image": {
                                                   "class": "ImageResource",
                                                   "levels": [
                                                    {
                                                     "height": 61,
                                                     "width": 16,
                                                     "class": "ImageResourceLevel",
                                                     "url": "media/panorama_D940AB24_D3FD_FEA2_41E2_CA89539FFD1F_0_HS_5_0_0_map.gif"
                                                    }
                                                   ]
                                                  },
                                                  "hfov": 8.96,
                                                  "class": "HotspotPanoramaOverlayMap",
                                                  "yaw": -106.02,
                                                  "pitch": 0.81
                                                 }
                                                ],
                                                "rollOverDisplay": true,
                                                "enabledInCardboard": true,
                                                "class": "HotspotPanoramaOverlay",
                                                "areas": [
                                                 {
                                                  "class": "HotspotPanoramaOverlayArea",
                                                  "mapColor": "#FF0000"
                                                 }
                                                ],
                                                "useHandCursor": true,
                                                "id": "overlay_F1C47D2E_D579_D58B_41DB_A5D4F72CF476",
                                                "items": [
                                                 {
                                                  "image": {
                                                   "class": "ImageResource",
                                                   "levels": [
                                                    {
                                                     "height": 578,
                                                     "width": 151,
                                                     "class": "ImageResourceLevel",
                                                     "url": "media/panorama_D940AB24_D3FD_FEA2_41E2_CA89539FFD1F_0_HS_5_0.png"
                                                    }
                                                   ]
                                                  },
                                                  "class": "HotspotPanoramaOverlayImage",
                                                  "yaw": -106.02,
                                                  "hfov": 8.96,
                                                  "pitch": 0.81
                                                 }
                                                ]
                                               },
                                               {
                                                "maps": [
                                                 {
                                                  "image": {
                                                   "class": "ImageResource",
                                                   "levels": [
                                                    {
                                                     "height": 33,
                                                     "width": 16,
                                                     "class": "ImageResourceLevel",
                                                     "url": "media/panorama_D940AB24_D3FD_FEA2_41E2_CA89539FFD1F_0_HS_6_0_0_map.gif"
                                                    }
                                                   ]
                                                  },
                                                  "hfov": 47,
                                                  "class": "HotspotPanoramaOverlayMap",
                                                  "yaw": 160.65,
                                                  "pitch": 2.47
                                                 }
                                                ],
                                                "rollOverDisplay": true,
                                                "enabledInCardboard": true,
                                                "class": "HotspotPanoramaOverlay",
                                                "areas": [
                                                 {
                                                  "class": "HotspotPanoramaOverlayArea",
                                                  "mapColor": "#FF0000"
                                                 }
                                                ],
                                                "useHandCursor": true,
                                                "id": "overlay_F6E026EA_D579_B48A_41D1_EC83553C9C95",
                                                "items": [
                                                 {
                                                  "image": {
                                                   "class": "ImageResource",
                                                   "levels": [
                                                    {
                                                     "height": 1664,
                                                     "width": 794,
                                                     "class": "ImageResourceLevel",
                                                     "url": "media/panorama_D940AB24_D3FD_FEA2_41E2_CA89539FFD1F_0_HS_6_0.png"
                                                    }
                                                   ]
                                                  },
                                                  "class": "HotspotPanoramaOverlayImage",
                                                  "yaw": 160.65,
                                                  "hfov": 47,
                                                  "pitch": 2.47
                                                 }
                                                ]
                                               },
                                               {
                                                "maps": [
                                                 {
                                                  "image": {
                                                   "class": "ImageResource",
                                                   "levels": [
                                                    {
                                                     "height": 200,
                                                     "width": 39,
                                                     "class": "ImageResourceLevel",
                                                     "url": "media/panorama_D940AB24_D3FD_FEA2_41E2_CA89539FFD1F_0_HS_2_1_0_map.gif"
                                                    }
                                                   ]
                                                  },
                                                  "hfov": 10.06,
                                                  "class": "HotspotPanoramaOverlayMap",
                                                  "yaw": -106.18,
                                                  "pitch": 1.55
                                                 }
                                                ],
                                                "rollOverDisplay": false,
                                                "enabledInCardboard": true,
                                                "class": "HotspotPanoramaOverlay",
                                                "areas": [
                                                 {
                                                  "toolTip": "Go to\u000aBEDROOM 2",
                                                  "class": "HotspotPanoramaOverlayArea",
                                                  "click": "this.mainPlayList.set('selectedIndex', 18)",
                                                  "displayTooltipInTouchScreens": true,
                                                  "mapColor": "#FF0000"
                                                 }
                                                ],
                                                "useHandCursor": true,
                                                "id": "overlay_CFDFAD14_D43F_5A62_41C6_26DAC9B67705",
                                                "items": [
                                                 {
                                                  "image": {
                                                   "class": "ImageResource",
                                                   "levels": [
                                                    {
                                                     "height": 859,
                                                     "width": 170,
                                                     "class": "ImageResourceLevel",
                                                     "url": "media/panorama_D940AB24_D3FD_FEA2_41E2_CA89539FFD1F_0_HS_2_0.png"
                                                    }
                                                   ]
                                                  },
                                                  "class": "HotspotPanoramaOverlayImage",
                                                  "yaw": -106.18,
                                                  "hfov": 10.06,
                                                  "roll": 0,
                                                  "pitch": 1.55
                                                 }
                                                ]
                                               },
                                               {
                                                "maps": [
                                                 {
                                                  "image": {
                                                   "class": "ImageResource",
                                                   "levels": [
                                                    {
                                                     "height": 200,
                                                     "width": 55,
                                                     "class": "ImageResourceLevel",
                                                     "url": "media/panorama_D940AB24_D3FD_FEA2_41E2_CA89539FFD1F_0_HS_3_1_0_map.gif"
                                                    }
                                                   ]
                                                  },
                                                  "hfov": 39.61,
                                                  "class": "HotspotPanoramaOverlayMap",
                                                  "yaw": -160.44,
                                                  "pitch": 1.77
                                                 }
                                                ],
                                                "rollOverDisplay": false,
                                                "enabledInCardboard": true,
                                                "class": "HotspotPanoramaOverlay",
                                                "areas": [
                                                 {
                                                  "toolTip": "Go to\u000aBEDROOM 1",
                                                  "class": "HotspotPanoramaOverlayArea",
                                                  "click": "this.mainPlayList.set('selectedIndex', 10)",
                                                  "displayTooltipInTouchScreens": true,
                                                  "mapColor": "#FF0000"
                                                 }
                                                ],
                                                "useHandCursor": true,
                                                "id": "overlay_CE7EFE6D_D43D_D6BD_41D5_9FA5E75890F6",
                                                "items": [
                                                 {
                                                  "image": {
                                                   "class": "ImageResource",
                                                   "levels": [
                                                    {
                                                     "height": 2048,
                                                     "width": 569,
                                                     "class": "ImageResourceLevel",
                                                     "url": "media/panorama_D940AB24_D3FD_FEA2_41E2_CA89539FFD1F_0_HS_3_0.png"
                                                    }
                                                   ]
                                                  },
                                                  "class": "HotspotPanoramaOverlayImage",
                                                  "yaw": -160.44,
                                                  "hfov": 39.61,
                                                  "roll": 0,
                                                  "pitch": 1.77
                                                 }
                                                ]
                                               },
                                               {
                                                "maps": [
                                                 {
                                                  "image": {
                                                   "class": "ImageResource",
                                                   "levels": [
                                                    {
                                                     "height": 200,
                                                     "width": 82,
                                                     "class": "ImageResourceLevel",
                                                     "url": "media/panorama_D940AB24_D3FD_FEA2_41E2_CA89539FFD1F_0_HS_4_1_0_map.gif"
                                                    }
                                                   ]
                                                  },
                                                  "hfov": 60.4,
                                                  "class": "HotspotPanoramaOverlayMap",
                                                  "yaw": 150.68,
                                                  "pitch": 1.66
                                                 }
                                                ],
                                                "rollOverDisplay": false,
                                                "enabledInCardboard": true,
                                                "class": "HotspotPanoramaOverlay",
                                                "areas": [
                                                 {
                                                  "toolTip": "Go to\u000aBEDROOM 1",
                                                  "class": "HotspotPanoramaOverlayArea",
                                                  "click": "this.mainPlayList.set('selectedIndex', 10)",
                                                  "displayTooltipInTouchScreens": true,
                                                  "mapColor": "#FF0000"
                                                 }
                                                ],
                                                "useHandCursor": true,
                                                "id": "overlay_CEC4C1EF_D43A_CDBE_41D9_14A1902C77D5",
                                                "items": [
                                                 {
                                                  "image": {
                                                   "class": "ImageResource",
                                                   "levels": [
                                                    {
                                                     "height": 2048,
                                                     "width": 846,
                                                     "class": "ImageResourceLevel",
                                                     "url": "media/panorama_D940AB24_D3FD_FEA2_41E2_CA89539FFD1F_0_HS_4_0.png"
                                                    }
                                                   ]
                                                  },
                                                  "class": "HotspotPanoramaOverlayImage",
                                                  "yaw": 150.68,
                                                  "hfov": 60.4,
                                                  "roll": 0,
                                                  "pitch": 1.66
                                                 }
                                                ]
                                               }
                                              ]
                                             }
                                            ],
                                            "label": "25",
                                            "hfov": 360,
                                            "hfovMax": 140
                                           },
                                           "class": "AdjacentPanorama",
                                           "yaw": 94.45,
                                           "distance": 1,
                                           "backwardYaw": -93.04
                                          },
                                          {
                                           "panorama": "this.panorama_D93F22C3_D3FD_CFE6_41E8_6411D8B756B6",
                                           "class": "AdjacentPanorama",
                                           "yaw": 94.4,
                                           "distance": 1,
                                           "backwardYaw": -61.01
                                          }
                                         ],
                                         "hfovMin": 70,
                                         "thumbnailUrl": "media/panorama_D8A3BCE1_D3FD_5BA2_41E5_68EBE3ED1FA6_t.jpg",
                                         "id": "panorama_D8A3BCE1_D3FD_5BA2_41E5_68EBE3ED1FA6",
                                         "pitch": 0,
                                         "partial": false,
                                         "class": "Panorama",
                                         "frames": [
                                          {
                                           "sphere": {
                                            "class": "ImageResource",
                                            "levels": [
                                             {
                                              "height": 3040,
                                              "width": 6080,
                                              "class": "ImageResourceLevel",
                                              "url": "media/panorama_D8A3BCE1_D3FD_5BA2_41E5_68EBE3ED1FA6_hq.jpeg"
                                             },
                                             {
                                              "height": 1608,
                                              "width": 3217,
                                              "class": "ImageResourceLevel",
                                              "url": "media/panorama_D8A3BCE1_D3FD_5BA2_41E5_68EBE3ED1FA6.jpeg"
                                             }
                                            ]
                                           },
                                           "thumbnailUrl": "media/panorama_D8A3BCE1_D3FD_5BA2_41E5_68EBE3ED1FA6_t.jpg",
                                           "class": "SphericPanoramaFrame",
                                           "overlays": [
                                            {
                                             "maps": [
                                              {
                                               "image": {
                                                "class": "ImageResource",
                                                "levels": [
                                                 {
                                                  "height": 16,
                                                  "width": 16,
                                                  "class": "ImageResourceLevel",
                                                  "url": "media/panorama_D8A3BCE1_D3FD_5BA2_41E5_68EBE3ED1FA6_0_HS_0_0_0_map.gif"
                                                 }
                                                ]
                                               },
                                               "hfov": 7.72,
                                               "class": "HotspotPanoramaOverlayMap",
                                               "yaw": 94.4,
                                               "pitch": -29.63
                                              }
                                             ],
                                             "rollOverDisplay": false,
                                             "enabledInCardboard": true,
                                             "class": "HotspotPanoramaOverlay",
                                             "areas": [
                                              {
                                               "mapColor": "#FF0000",
                                               "class": "HotspotPanoramaOverlayArea",
                                               "click": "this.startPanoramaWithCamera(this.panorama_D93F22C3_D3FD_CFE6_41E8_6411D8B756B6, this.camera_E1469FB4_F2E0_AA32_41EA_D32082BB663D); this.mainPlayList.set('selectedIndex', 22)"
                                              }
                                             ],
                                             "useHandCursor": true,
                                             "id": "overlay_C08AC314_D41D_4E62_41E7_C15D800EAE81",
                                             "items": [
                                              {
                                               "image": {
                                                "class": "ImageResource",
                                                "levels": [
                                                 {
                                                  "height": 149,
                                                  "width": 149,
                                                  "class": "ImageResourceLevel",
                                                  "url": "media/panorama_D8A3BCE1_D3FD_5BA2_41E5_68EBE3ED1FA6_0_HS_0_0.png"
                                                 }
                                                ]
                                               },
                                               "class": "HotspotPanoramaOverlayImage",
                                               "yaw": 94.4,
                                               "hfov": 7.72,
                                               "pitch": -29.63
                                              }
                                             ]
                                            },
                                            {
                                             "maps": [
                                              {
                                               "image": {
                                                "class": "ImageResource",
                                                "levels": [
                                                 {
                                                  "height": 16,
                                                  "width": 16,
                                                  "class": "ImageResourceLevel",
                                                  "url": "media/panorama_D8A3BCE1_D3FD_5BA2_41E5_68EBE3ED1FA6_0_HS_1_0_0_map.gif"
                                                 }
                                                ]
                                               },
                                               "hfov": 5.79,
                                               "class": "HotspotPanoramaOverlayMap",
                                               "yaw": 94.45,
                                               "pitch": -12.19
                                              }
                                             ],
                                             "rollOverDisplay": false,
                                             "enabledInCardboard": true,
                                             "class": "HotspotPanoramaOverlay",
                                             "areas": [
                                              {
                                               "mapColor": "#FF0000",
                                               "class": "HotspotPanoramaOverlayArea",
                                               "click": "this.startPanoramaWithCamera(this.panorama_D940AB24_D3FD_FEA2_41E2_CA89539FFD1F, this.camera_E1508F97_F2E0_AAFE_41AC_63A0713C9610); this.mainPlayList.set('selectedIndex', 23)"
                                              }
                                             ],
                                             "useHandCursor": true,
                                             "id": "overlay_C0B90A9B_D41D_5E66_41D7_CFA696ADD2DE",
                                             "items": [
                                              {
                                               "image": {
                                                "class": "ImageResource",
                                                "levels": [
                                                 {
                                                  "height": 99,
                                                  "width": 99,
                                                  "class": "ImageResourceLevel",
                                                  "url": "media/panorama_D8A3BCE1_D3FD_5BA2_41E5_68EBE3ED1FA6_0_HS_1_0.png"
                                                 }
                                                ]
                                               },
                                               "class": "HotspotPanoramaOverlayImage",
                                               "yaw": 94.45,
                                               "hfov": 5.79,
                                               "pitch": -12.19
                                              }
                                             ]
                                            },
                                            {
                                             "maps": [
                                              {
                                               "image": {
                                                "class": "ImageResource",
                                                "levels": [
                                                 {
                                                  "height": 16,
                                                  "width": 16,
                                                  "class": "ImageResourceLevel",
                                                  "url": "media/panorama_D8A3BCE1_D3FD_5BA2_41E5_68EBE3ED1FA6_0_HS_2_0_0_map.gif"
                                                 }
                                                ]
                                               },
                                               "hfov": 6.87,
                                               "class": "HotspotPanoramaOverlayMap",
                                               "yaw": -140.32,
                                               "pitch": -39.31
                                              }
                                             ],
                                             "rollOverDisplay": false,
                                             "enabledInCardboard": true,
                                             "class": "HotspotPanoramaOverlay",
                                             "areas": [
                                              {
                                               "mapColor": "#FF0000",
                                               "class": "HotspotPanoramaOverlayArea",
                                               "click": "this.startPanoramaWithCamera(this.panorama_C38EFA64_CFAB_EA29_41C3_C9002B55D89F, this.camera_E169EF7E_F2E0_AA2E_41CF_6EDE198D6711); this.mainPlayList.set('selectedIndex', 20)"
                                              }
                                             ],
                                             "useHandCursor": true,
                                             "id": "overlay_C21E94D7_D41D_CBEE_41E1_C337FACCDEDE",
                                             "items": [
                                              {
                                               "image": {
                                                "class": "ImageResource",
                                                "levels": [
                                                 {
                                                  "height": 149,
                                                  "width": 149,
                                                  "class": "ImageResourceLevel",
                                                  "url": "media/panorama_D8A3BCE1_D3FD_5BA2_41E5_68EBE3ED1FA6_0_HS_2_0.png"
                                                 }
                                                ]
                                               },
                                               "class": "HotspotPanoramaOverlayImage",
                                               "yaw": -140.32,
                                               "hfov": 6.87,
                                               "pitch": -39.31
                                              }
                                             ]
                                            },
                                            {
                                             "maps": [
                                              {
                                               "image": {
                                                "class": "ImageResource",
                                                "levels": [
                                                 {
                                                  "height": 15,
                                                  "width": 15,
                                                  "class": "ImageResourceLevel",
                                                  "url": "media/panorama_D8A3BCE1_D3FD_5BA2_41E5_68EBE3ED1FA6_0_HS_3_0_0_map.gif"
                                                 }
                                                ]
                                               },
                                               "hfov": 2.88,
                                               "class": "HotspotPanoramaOverlayMap",
                                               "yaw": -142.83,
                                               "pitch": -12.99
                                              }
                                             ],
                                             "rollOverDisplay": false,
                                             "enabledInCardboard": true,
                                             "class": "HotspotPanoramaOverlay",
                                             "areas": [
                                              {
                                               "mapColor": "#FF0000",
                                               "class": "HotspotPanoramaOverlayArea",
                                               "click": "this.startPanoramaWithCamera(this.panorama_D9414400_D3FD_CA62_41E7_FCEB987BA188, this.camera_E160EF65_F2E0_AA52_41AC_EF124ED9E628); this.mainPlayList.set('selectedIndex', 24)"
                                              }
                                             ],
                                             "useHandCursor": true,
                                             "id": "overlay_C0E8EBEC_D41D_BDA2_41D8_87F3EE5D71D8",
                                             "items": [
                                              {
                                               "image": {
                                                "class": "ImageResource",
                                                "levels": [
                                                 {
                                                  "height": 49,
                                                  "width": 49,
                                                  "class": "ImageResourceLevel",
                                                  "url": "media/panorama_D8A3BCE1_D3FD_5BA2_41E5_68EBE3ED1FA6_0_HS_3_0.png"
                                                 }
                                                ]
                                               },
                                               "class": "HotspotPanoramaOverlayImage",
                                               "yaw": -142.83,
                                               "hfov": 2.88,
                                               "pitch": -12.99
                                              }
                                             ]
                                            },
                                            {
                                             "maps": [
                                              {
                                               "image": {
                                                "class": "ImageResource",
                                                "levels": [
                                                 {
                                                  "height": 58,
                                                  "width": 16,
                                                  "class": "ImageResourceLevel",
                                                  "url": "media/panorama_D8A3BCE1_D3FD_5BA2_41E5_68EBE3ED1FA6_0_HS_6_0_0_map.gif"
                                                 }
                                                ]
                                               },
                                               "hfov": 4.96,
                                               "class": "HotspotPanoramaOverlayMap",
                                               "yaw": 100.13,
                                               "pitch": 0.72
                                              }
                                             ],
                                             "rollOverDisplay": true,
                                             "enabledInCardboard": true,
                                             "class": "HotspotPanoramaOverlay",
                                             "areas": [
                                              {
                                               "class": "HotspotPanoramaOverlayArea",
                                               "mapColor": "#FF0000"
                                              }
                                             ],
                                             "useHandCursor": true,
                                             "id": "overlay_F12843C3_D578_4CFA_41E4_2E9530B3CC73",
                                             "items": [
                                              {
                                               "image": {
                                                "class": "ImageResource",
                                                "levels": [
                                                 {
                                                  "height": 306,
                                                  "width": 83,
                                                  "class": "ImageResourceLevel",
                                                  "url": "media/panorama_D8A3BCE1_D3FD_5BA2_41E5_68EBE3ED1FA6_0_HS_6_0.png"
                                                 }
                                                ]
                                               },
                                               "class": "HotspotPanoramaOverlayImage",
                                               "yaw": 100.13,
                                               "hfov": 4.96,
                                               "pitch": 0.72
                                              }
                                             ]
                                            },
                                            {
                                             "maps": [
                                              {
                                               "image": {
                                                "class": "ImageResource",
                                                "levels": [
                                                 {
                                                  "height": 54,
                                                  "width": 16,
                                                  "class": "ImageResourceLevel",
                                                  "url": "media/panorama_D8A3BCE1_D3FD_5BA2_41E5_68EBE3ED1FA6_0_HS_7_0_0_map.gif"
                                                 }
                                                ]
                                               },
                                               "hfov": 14.98,
                                               "class": "HotspotPanoramaOverlayMap",
                                               "yaw": 112.61,
                                               "pitch": 0.46
                                              }
                                             ],
                                             "rollOverDisplay": true,
                                             "enabledInCardboard": true,
                                             "class": "HotspotPanoramaOverlay",
                                             "areas": [
                                              {
                                               "class": "HotspotPanoramaOverlayArea",
                                               "mapColor": "#FF0000"
                                              }
                                             ],
                                             "useHandCursor": true,
                                             "id": "overlay_F6CA4B3C_D578_5D8E_41AB_55961E3E67DC",
                                             "items": [
                                              {
                                               "image": {
                                                "class": "ImageResource",
                                                "levels": [
                                                 {
                                                  "height": 855,
                                                  "width": 252,
                                                  "class": "ImageResourceLevel",
                                                  "url": "media/panorama_D8A3BCE1_D3FD_5BA2_41E5_68EBE3ED1FA6_0_HS_7_0.png"
                                                 }
                                                ]
                                               },
                                               "class": "HotspotPanoramaOverlayImage",
                                               "yaw": 112.61,
                                               "hfov": 14.98,
                                               "pitch": 0.46
                                              }
                                             ]
                                            },
                                            {
                                             "maps": [
                                              {
                                               "image": {
                                                "class": "ImageResource",
                                                "levels": [
                                                 {
                                                  "height": 200,
                                                  "width": 40,
                                                  "class": "ImageResourceLevel",
                                                  "url": "media/panorama_D8A3BCE1_D3FD_5BA2_41E5_68EBE3ED1FA6_0_HS_4_1_0_map.gif"
                                                 }
                                                ]
                                               },
                                               "hfov": 18.15,
                                               "class": "HotspotPanoramaOverlayMap",
                                               "yaw": 113.09,
                                               "pitch": 1.45
                                              }
                                             ],
                                             "rollOverDisplay": false,
                                             "enabledInCardboard": true,
                                             "class": "HotspotPanoramaOverlay",
                                             "areas": [
                                              {
                                               "toolTip": "Go to\u000aBEDROOM 2",
                                               "class": "HotspotPanoramaOverlayArea",
                                               "click": "this.mainPlayList.set('selectedIndex', 18)",
                                               "displayTooltipInTouchScreens": true,
                                               "mapColor": "#FF0000"
                                              }
                                             ],
                                             "useHandCursor": true,
                                             "id": "overlay_C1ED28F6_D406_FBAE_41B2_AF9F943B639D",
                                             "items": [
                                              {
                                               "image": {
                                                "class": "ImageResource",
                                                "levels": [
                                                 {
                                                  "height": 1504,
                                                  "width": 309,
                                                  "class": "ImageResourceLevel",
                                                  "url": "media/panorama_D8A3BCE1_D3FD_5BA2_41E5_68EBE3ED1FA6_0_HS_4_0.png"
                                                 }
                                                ]
                                               },
                                               "class": "HotspotPanoramaOverlayImage",
                                               "yaw": 113.09,
                                               "hfov": 18.15,
                                               "roll": 0,
                                               "pitch": 1.45
                                              }
                                             ]
                                            },
                                            {
                                             "maps": [
                                              {
                                               "image": {
                                                "class": "ImageResource",
                                                "levels": [
                                                 {
                                                  "height": 199,
                                                  "width": 19,
                                                  "class": "ImageResourceLevel",
                                                  "url": "media/panorama_D8A3BCE1_D3FD_5BA2_41E5_68EBE3ED1FA6_0_HS_5_1_0_map.gif"
                                                 }
                                                ]
                                               },
                                               "hfov": 2.28,
                                               "class": "HotspotPanoramaOverlayMap",
                                               "yaw": 100.27,
                                               "pitch": 0.14
                                              }
                                             ],
                                             "rollOverDisplay": false,
                                             "enabledInCardboard": true,
                                             "class": "HotspotPanoramaOverlay",
                                             "areas": [
                                              {
                                               "toolTip": "Go to\u000aBEDROOM 1",
                                               "class": "HotspotPanoramaOverlayArea",
                                               "click": "this.mainPlayList.set('selectedIndex', 10)",
                                               "displayTooltipInTouchScreens": true,
                                               "mapColor": "#FF0000"
                                              }
                                             ],
                                             "useHandCursor": true,
                                             "id": "overlay_C211FBD9_D407_5DE2_41E4_929096FDF1BD",
                                             "items": [
                                              {
                                               "image": {
                                                "class": "ImageResource",
                                                "levels": [
                                                 {
                                                  "height": 398,
                                                  "width": 38,
                                                  "class": "ImageResourceLevel",
                                                  "url": "media/panorama_D8A3BCE1_D3FD_5BA2_41E5_68EBE3ED1FA6_0_HS_5_0.png"
                                                 }
                                                ]
                                               },
                                               "class": "HotspotPanoramaOverlayImage",
                                               "yaw": 100.27,
                                               "hfov": 2.28,
                                               "roll": 0,
                                               "pitch": 0.14
                                              }
                                             ]
                                            }
                                           ]
                                          }
                                         ],
                                         "label": "23",
                                         "hfov": 360,
                                         "hfovMax": 140
                                        },
                                        "class": "AdjacentPanorama",
                                        "yaw": 179.9,
                                        "distance": 1,
                                        "backwardYaw": -142.83
                                       }
                                      ],
                                      "hfovMin": 70,
                                      "thumbnailUrl": "media/panorama_D9414400_D3FD_CA62_41E7_FCEB987BA188_t.jpg",
                                      "id": "panorama_D9414400_D3FD_CA62_41E7_FCEB987BA188",
                                      "pitch": 0,
                                      "partial": false,
                                      "class": "Panorama",
                                      "frames": [
                                       {
                                        "sphere": {
                                         "class": "ImageResource",
                                         "levels": [
                                          {
                                           "height": 3040,
                                           "width": 6080,
                                           "class": "ImageResourceLevel",
                                           "url": "media/panorama_D9414400_D3FD_CA62_41E7_FCEB987BA188_hq.jpeg"
                                          },
                                          {
                                           "height": 1608,
                                           "width": 3217,
                                           "class": "ImageResourceLevel",
                                           "url": "media/panorama_D9414400_D3FD_CA62_41E7_FCEB987BA188.jpeg"
                                          }
                                         ]
                                        },
                                        "thumbnailUrl": "media/panorama_D9414400_D3FD_CA62_41E7_FCEB987BA188_t.jpg",
                                        "class": "SphericPanoramaFrame",
                                        "overlays": [
                                         {
                                          "maps": [
                                           {
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "height": 25,
                                               "width": 50,
                                               "class": "ImageResourceLevel",
                                               "url": "media/panorama_D9414400_D3FD_CA62_41E7_FCEB987BA188_0_HS_0_0_0_map.gif"
                                              }
                                             ]
                                            },
                                            "hfov": 5.7,
                                            "class": "HotspotPanoramaOverlayMap",
                                            "yaw": -177.17,
                                            "pitch": -15.54
                                           }
                                          ],
                                          "rollOverDisplay": false,
                                          "enabledInCardboard": true,
                                          "class": "HotspotPanoramaOverlay",
                                          "areas": [
                                           {
                                            "mapColor": "#FF0000",
                                            "class": "HotspotPanoramaOverlayArea",
                                            "click": "this.startPanoramaWithCamera(this.panorama_C38EFA64_CFAB_EA29_41C3_C9002B55D89F, this.camera_E6BC0135_F2E0_B632_41C6_D154FFC0A01F); this.mainPlayList.set('selectedIndex', 20)"
                                           }
                                          ],
                                          "useHandCursor": true,
                                          "id": "overlay_F1E3C35B_D568_4D89_41E2_5328BC9EFB2B",
                                          "items": [
                                           {
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "height": 50,
                                               "width": 100,
                                               "class": "ImageResourceLevel",
                                               "url": "media/panorama_D9414400_D3FD_CA62_41E7_FCEB987BA188_0_HS_0_0.png"
                                              }
                                             ]
                                            },
                                            "class": "HotspotPanoramaOverlayImage",
                                            "yaw": -177.17,
                                            "hfov": 5.7,
                                            "pitch": -15.54
                                           }
                                          ]
                                         },
                                         {
                                          "maps": [
                                           {
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "height": 16,
                                               "width": 16,
                                               "class": "ImageResourceLevel",
                                               "url": "media/panorama_D9414400_D3FD_CA62_41E7_FCEB987BA188_0_HS_1_0_0_map.gif"
                                              }
                                             ]
                                            },
                                            "hfov": 2.88,
                                            "class": "HotspotPanoramaOverlayMap",
                                            "yaw": 179.9,
                                            "pitch": -13.13
                                           }
                                          ],
                                          "rollOverDisplay": false,
                                          "enabledInCardboard": true,
                                          "class": "HotspotPanoramaOverlay",
                                          "areas": [
                                           {
                                            "mapColor": "#FF0000",
                                            "class": "HotspotPanoramaOverlayArea",
                                            "click": "this.startPanoramaWithCamera(this.panorama_D8A3BCE1_D3FD_5BA2_41E5_68EBE3ED1FA6, this.camera_E6A22154_F2E0_B672_41E4_D57ED3E06E96); this.mainPlayList.set('selectedIndex', 21)"
                                           }
                                          ],
                                          "useHandCursor": true,
                                          "id": "overlay_F18E3ECF_D56B_B489_41D0_FE78FF5B8105",
                                          "items": [
                                           {
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "height": 50,
                                               "width": 50,
                                               "class": "ImageResourceLevel",
                                               "url": "media/panorama_D9414400_D3FD_CA62_41E7_FCEB987BA188_0_HS_1_0.png"
                                              }
                                             ]
                                            },
                                            "class": "HotspotPanoramaOverlayImage",
                                            "yaw": 179.9,
                                            "hfov": 2.88,
                                            "pitch": -13.13
                                           }
                                          ]
                                         },
                                         {
                                          "maps": [
                                           {
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "height": 33,
                                               "width": 16,
                                               "class": "ImageResourceLevel",
                                               "url": "media/panorama_D9414400_D3FD_CA62_41E7_FCEB987BA188_0_HS_2_0_0_map.gif"
                                              }
                                             ]
                                            },
                                            "hfov": 15.88,
                                            "class": "HotspotPanoramaOverlayMap",
                                            "yaw": -144.13,
                                            "pitch": 0.23
                                           }
                                          ],
                                          "rollOverDisplay": true,
                                          "enabledInCardboard": true,
                                          "class": "HotspotPanoramaOverlay",
                                          "areas": [
                                           {
                                            "class": "HotspotPanoramaOverlayArea",
                                            "mapColor": "#FF0000"
                                           }
                                          ],
                                          "useHandCursor": true,
                                          "id": "overlay_F05CA703_D569_B579_41E6_20A96CB1E2D7",
                                          "items": [
                                           {
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "height": 557,
                                               "width": 268,
                                               "class": "ImageResourceLevel",
                                               "url": "media/panorama_D9414400_D3FD_CA62_41E7_FCEB987BA188_0_HS_2_0.png"
                                              }
                                             ]
                                            },
                                            "class": "HotspotPanoramaOverlayImage",
                                            "yaw": -144.13,
                                            "hfov": 15.88,
                                            "pitch": 0.23
                                           }
                                          ]
                                         },
                                         {
                                          "maps": [
                                           {
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "height": 199,
                                               "width": 174,
                                               "class": "ImageResourceLevel",
                                               "url": "media/panorama_D9414400_D3FD_CA62_41E7_FCEB987BA188_0_HS_3_1_0_map.gif"
                                              }
                                             ]
                                            },
                                            "hfov": 32.49,
                                            "class": "HotspotPanoramaOverlayMap",
                                            "yaw": -143.31,
                                            "pitch": 1.56
                                           }
                                          ],
                                          "rollOverDisplay": false,
                                          "enabledInCardboard": true,
                                          "class": "HotspotPanoramaOverlay",
                                          "areas": [
                                           {
                                            "toolTip": "Go to\u000aBEDROOM 2",
                                            "class": "HotspotPanoramaOverlayArea",
                                            "click": "this.mainPlayList.set('selectedIndex', 17)",
                                            "displayTooltipInTouchScreens": true,
                                            "mapColor": "#FF0000"
                                           }
                                          ],
                                          "useHandCursor": true,
                                          "id": "overlay_F3FA0EBD_D568_B48E_41E7_319AB0D10ADC",
                                          "items": [
                                           {
                                            "image": {
                                             "class": "ImageResource",
                                             "levels": [
                                              {
                                               "height": 644,
                                               "width": 563,
                                               "class": "ImageResourceLevel",
                                               "url": "media/panorama_D9414400_D3FD_CA62_41E7_FCEB987BA188_0_HS_3_0.png"
                                              }
                                             ]
                                            },
                                            "class": "HotspotPanoramaOverlayImage",
                                            "yaw": -143.31,
                                            "hfov": 32.49,
                                            "roll": 0,
                                            "pitch": 1.56
                                           }
                                          ]
                                         }
                                        ]
                                       }
                                      ],
                                      "label": "26",
                                      "hfov": 360,
                                      "hfovMax": 140
                                     },
                                     "class": "AdjacentPanorama",
                                     "yaw": -99.67,
                                     "distance": 1,
                                     "backwardYaw": -177.17
                                    },
                                    {
                                     "panorama": "this.panorama_D8A3BCE1_D3FD_5BA2_41E5_68EBE3ED1FA6",
                                     "class": "AdjacentPanorama",
                                     "yaw": 73.77,
                                     "distance": 1,
                                     "backwardYaw": -140.32
                                    }
                                   ],
                                   "hfovMin": 70,
                                   "thumbnailUrl": "media/panorama_C38EFA64_CFAB_EA29_41C3_C9002B55D89F_t.jpg",
                                   "id": "panorama_C38EFA64_CFAB_EA29_41C3_C9002B55D89F",
                                   "pitch": 0,
                                   "partial": false,
                                   "class": "Panorama",
                                   "frames": [
                                    {
                                     "sphere": {
                                      "class": "ImageResource",
                                      "levels": [
                                       {
                                        "height": 3040,
                                        "width": 6080,
                                        "class": "ImageResourceLevel",
                                        "url": "media/panorama_C38EFA64_CFAB_EA29_41C3_C9002B55D89F_hq.jpeg"
                                       },
                                       {
                                        "height": 1608,
                                        "width": 3217,
                                        "class": "ImageResourceLevel",
                                        "url": "media/panorama_C38EFA64_CFAB_EA29_41C3_C9002B55D89F.jpeg"
                                       }
                                      ]
                                     },
                                     "thumbnailUrl": "media/panorama_C38EFA64_CFAB_EA29_41C3_C9002B55D89F_t.jpg",
                                     "class": "SphericPanoramaFrame",
                                     "overlays": [
                                      {
                                       "maps": [
                                        {
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "height": 75,
                                            "width": 75,
                                            "class": "ImageResourceLevel",
                                            "url": "media/panorama_C38EFA64_CFAB_EA29_41C3_C9002B55D89F_0_HS_0_0_0_map.gif"
                                           }
                                          ]
                                         },
                                         "hfov": 7.63,
                                         "class": "HotspotPanoramaOverlayMap",
                                         "yaw": -155.57,
                                         "pitch": -30.84
                                        }
                                       ],
                                       "rollOverDisplay": false,
                                       "enabledInCardboard": true,
                                       "class": "HotspotPanoramaOverlay",
                                       "areas": [
                                        {
                                         "mapColor": "#FF0000",
                                         "class": "HotspotPanoramaOverlayArea",
                                         "click": "this.startPanoramaWithCamera(this.panorama_C38ED0A5_CFAB_162B_41C2_538CF86DC268, this.camera_E18FE4BC_F2E0_BE32_41E3_3BEA66898C9D); this.mainPlayList.set('selectedIndex', 19)"
                                        }
                                       ],
                                       "useHandCursor": true,
                                       "id": "overlay_CA8B4190_D1F7_609C_41CE_8955F4D5B2FC",
                                       "items": [
                                        {
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "height": 150,
                                            "width": 150,
                                            "class": "ImageResourceLevel",
                                            "url": "media/panorama_C38EFA64_CFAB_EA29_41C3_C9002B55D89F_0_HS_0_0.png"
                                           }
                                          ]
                                         },
                                         "class": "HotspotPanoramaOverlayImage",
                                         "yaw": -155.57,
                                         "hfov": 7.63,
                                         "pitch": -30.84
                                        }
                                       ]
                                      },
                                      {
                                       "maps": [
                                        {
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "height": 16,
                                            "width": 16,
                                            "class": "ImageResourceLevel",
                                            "url": "media/panorama_C38EFA64_CFAB_EA29_41C3_C9002B55D89F_0_HS_3_0_0_map.gif"
                                           }
                                          ]
                                         },
                                         "hfov": 7.27,
                                         "class": "HotspotPanoramaOverlayMap",
                                         "yaw": 73.77,
                                         "pitch": -35.05
                                        }
                                       ],
                                       "rollOverDisplay": false,
                                       "enabledInCardboard": true,
                                       "class": "HotspotPanoramaOverlay",
                                       "areas": [
                                        {
                                         "mapColor": "#FF0000",
                                         "class": "HotspotPanoramaOverlayArea",
                                         "click": "this.startPanoramaWithCamera(this.panorama_D8A3BCE1_D3FD_5BA2_41E5_68EBE3ED1FA6, this.camera_E17364EC_F2E0_BE52_41D5_BA5DB890DB2B); this.mainPlayList.set('selectedIndex', 21)"
                                        }
                                       ],
                                       "useHandCursor": true,
                                       "id": "overlay_C7FEEC31_D41E_BAA5_41D1_8511D9383F34",
                                       "items": [
                                        {
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "height": 150,
                                            "width": 150,
                                            "class": "ImageResourceLevel",
                                            "url": "media/panorama_C38EFA64_CFAB_EA29_41C3_C9002B55D89F_0_HS_3_0.png"
                                           }
                                          ]
                                         },
                                         "class": "HotspotPanoramaOverlayImage",
                                         "yaw": 73.77,
                                         "hfov": 7.27,
                                         "pitch": -35.05
                                        }
                                       ]
                                      },
                                      {
                                       "maps": [
                                        {
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "height": 16,
                                            "width": 16,
                                            "class": "ImageResourceLevel",
                                            "url": "media/panorama_C38EFA64_CFAB_EA29_41C3_C9002B55D89F_0_HS_4_0_0_map.gif"
                                           }
                                          ]
                                         },
                                         "hfov": 8.4,
                                         "class": "HotspotPanoramaOverlayMap",
                                         "yaw": -99.67,
                                         "pitch": -18.96
                                        }
                                       ],
                                       "rollOverDisplay": false,
                                       "enabledInCardboard": true,
                                       "class": "HotspotPanoramaOverlay",
                                       "areas": [
                                        {
                                         "mapColor": "#FF0000",
                                         "class": "HotspotPanoramaOverlayArea",
                                         "click": "this.startPanoramaWithCamera(this.panorama_D9414400_D3FD_CA62_41E7_FCEB987BA188, this.camera_E18864D7_F2E0_BE7E_41E6_7B8B124075AF); this.mainPlayList.set('selectedIndex', 24)"
                                        }
                                       ],
                                       "useHandCursor": true,
                                       "id": "overlay_C111D824_D41F_7AA2_41E8_8F240CC0E4A3",
                                       "items": [
                                        {
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "height": 149,
                                            "width": 149,
                                            "class": "ImageResourceLevel",
                                            "url": "media/panorama_C38EFA64_CFAB_EA29_41C3_C9002B55D89F_0_HS_4_0.png"
                                           }
                                          ]
                                         },
                                         "class": "HotspotPanoramaOverlayImage",
                                         "yaw": -99.67,
                                         "hfov": 8.4,
                                         "pitch": -18.96
                                        }
                                       ]
                                      },
                                      {
                                       "maps": [
                                        {
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "height": 36,
                                            "width": 15,
                                            "class": "ImageResourceLevel",
                                            "url": "media/panorama_C38EFA64_CFAB_EA29_41C3_C9002B55D89F_0_HS_5_0_0_map.gif"
                                           }
                                          ]
                                         },
                                         "hfov": 23.23,
                                         "class": "HotspotPanoramaOverlayMap",
                                         "yaw": -172.87,
                                         "pitch": 1.33
                                        }
                                       ],
                                       "rollOverDisplay": true,
                                       "enabledInCardboard": true,
                                       "class": "HotspotPanoramaOverlay",
                                       "areas": [
                                        {
                                         "class": "HotspotPanoramaOverlayArea",
                                         "mapColor": "#FF0000"
                                        }
                                       ],
                                       "useHandCursor": true,
                                       "id": "overlay_F63F49D3_D578_5C99_41E7_6A9C6EB948D4",
                                       "items": [
                                        {
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "height": 892,
                                            "width": 392,
                                            "class": "ImageResourceLevel",
                                            "url": "media/panorama_C38EFA64_CFAB_EA29_41C3_C9002B55D89F_0_HS_5_0.png"
                                           }
                                          ]
                                         },
                                         "class": "HotspotPanoramaOverlayImage",
                                         "yaw": -172.87,
                                         "hfov": 23.23,
                                         "pitch": 1.33
                                        }
                                       ]
                                      },
                                      {
                                       "maps": [
                                        {
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "height": 200,
                                            "width": 69,
                                            "class": "ImageResourceLevel",
                                            "url": "media/panorama_C38EFA64_CFAB_EA29_41C3_C9002B55D89F_0_HS_1_1_0_map.gif"
                                           }
                                          ]
                                         },
                                         "hfov": 23.07,
                                         "class": "HotspotPanoramaOverlayMap",
                                         "yaw": -168.87,
                                         "pitch": 1.01
                                        }
                                       ],
                                       "rollOverDisplay": false,
                                       "enabledInCardboard": true,
                                       "class": "HotspotPanoramaOverlay",
                                       "areas": [
                                        {
                                         "toolTip": "Go to\u000aBEDROOM 2",
                                         "class": "HotspotPanoramaOverlayArea",
                                         "click": "this.mainPlayList.set('selectedIndex', 17)",
                                         "displayTooltipInTouchScreens": true,
                                         "mapColor": "#FF0000"
                                        }
                                       ],
                                       "useHandCursor": true,
                                       "id": "overlay_CA645F11_D1F5_A19C_41CC_66EA1C4583A8",
                                       "items": [
                                        {
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "height": 1132,
                                            "width": 394,
                                            "class": "ImageResourceLevel",
                                            "url": "media/panorama_C38EFA64_CFAB_EA29_41C3_C9002B55D89F_0_HS_1_0.png"
                                           }
                                          ]
                                         },
                                         "class": "HotspotPanoramaOverlayImage",
                                         "yaw": -168.87,
                                         "hfov": 23.07,
                                         "roll": 0,
                                         "pitch": 1.01
                                        }
                                       ]
                                      },
                                      {
                                       "maps": [
                                        {
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "height": 200,
                                            "width": 47,
                                            "class": "ImageResourceLevel",
                                            "url": "media/panorama_C38EFA64_CFAB_EA29_41C3_C9002B55D89F_0_HS_2_1_0_map.gif"
                                           }
                                          ]
                                         },
                                         "hfov": 18.81,
                                         "class": "HotspotPanoramaOverlayMap",
                                         "yaw": 170.35,
                                         "pitch": 1.76
                                        }
                                       ],
                                       "rollOverDisplay": false,
                                       "enabledInCardboard": true,
                                       "class": "HotspotPanoramaOverlay",
                                       "areas": [
                                        {
                                         "toolTip": "Go to\u000aBEDROOM 2",
                                         "class": "HotspotPanoramaOverlayArea",
                                         "click": "this.mainPlayList.set('selectedIndex', 17)",
                                         "displayTooltipInTouchScreens": true,
                                         "mapColor": "#FF0000"
                                        }
                                       ],
                                       "useHandCursor": true,
                                       "id": "overlay_C0E9C4BA_D3D3_8F49_41D9_6609E5B2E9C1",
                                       "items": [
                                        {
                                         "image": {
                                          "class": "ImageResource",
                                          "levels": [
                                           {
                                            "height": 1353,
                                            "width": 320,
                                            "class": "ImageResourceLevel",
                                            "url": "media/panorama_C38EFA64_CFAB_EA29_41C3_C9002B55D89F_0_HS_2_0.png"
                                           }
                                          ]
                                         },
                                         "class": "HotspotPanoramaOverlayImage",
                                         "yaw": 170.35,
                                         "hfov": 18.81,
                                         "roll": 0,
                                         "pitch": 1.76
                                        }
                                       ]
                                      }
                                     ]
                                    }
                                   ],
                                   "label": "22",
                                   "hfov": 360,
                                   "hfovMax": 140
                                  },
                                  "class": "AdjacentPanorama",
                                  "yaw": 57.92,
                                  "distance": 1,
                                  "backwardYaw": -155.57
                                 },
                                 {
                                  "panorama": "this.panorama_C38EFD85_CFAB_2EEB_41AA_1FA5F8AEA01D",
                                  "class": "AdjacentPanorama",
                                  "yaw": 161.02,
                                  "distance": 1,
                                  "backwardYaw": -54.82
                                 }
                                ],
                                "hfovMin": 70,
                                "thumbnailUrl": "media/panorama_C38ED0A5_CFAB_162B_41C2_538CF86DC268_t.jpg",
                                "id": "panorama_C38ED0A5_CFAB_162B_41C2_538CF86DC268",
                                "pitch": 0,
                                "partial": false,
                                "class": "Panorama",
                                "frames": [
                                 {
                                  "sphere": {
                                   "class": "ImageResource",
                                   "levels": [
                                    {
                                     "height": 3040,
                                     "width": 6080,
                                     "class": "ImageResourceLevel",
                                     "url": "media/panorama_C38ED0A5_CFAB_162B_41C2_538CF86DC268_hq.jpeg"
                                    },
                                    {
                                     "height": 1608,
                                     "width": 3217,
                                     "class": "ImageResourceLevel",
                                     "url": "media/panorama_C38ED0A5_CFAB_162B_41C2_538CF86DC268.jpeg"
                                    }
                                   ]
                                  },
                                  "thumbnailUrl": "media/panorama_C38ED0A5_CFAB_162B_41C2_538CF86DC268_t.jpg",
                                  "class": "SphericPanoramaFrame",
                                  "overlays": [
                                   {
                                    "maps": [
                                     {
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "height": 16,
                                         "width": 16,
                                         "class": "ImageResourceLevel",
                                         "url": "media/panorama_C38ED0A5_CFAB_162B_41C2_538CF86DC268_0_HS_0_0_0_map.gif"
                                        }
                                       ]
                                      },
                                      "hfov": 7.78,
                                      "class": "HotspotPanoramaOverlayMap",
                                      "yaw": 57.92,
                                      "pitch": -28.8
                                     }
                                    ],
                                    "rollOverDisplay": false,
                                    "enabledInCardboard": true,
                                    "class": "HotspotPanoramaOverlay",
                                    "areas": [
                                     {
                                      "mapColor": "#FF0000",
                                      "class": "HotspotPanoramaOverlayArea",
                                      "click": "this.startPanoramaWithCamera(this.panorama_C38EFA64_CFAB_EA29_41C3_C9002B55D89F, this.camera_E6C220F5_F2E0_B632_41E5_7AF4046C8DA9); this.mainPlayList.set('selectedIndex', 20)"
                                     }
                                    ],
                                    "useHandCursor": true,
                                    "id": "overlay_CA48850E_D1F5_A180_41E0_11529E1C94E7",
                                    "items": [
                                     {
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "height": 150,
                                         "width": 150,
                                         "class": "ImageResourceLevel",
                                         "url": "media/panorama_C38ED0A5_CFAB_162B_41C2_538CF86DC268_0_HS_0_0.png"
                                        }
                                       ]
                                      },
                                      "class": "HotspotPanoramaOverlayImage",
                                      "yaw": 57.92,
                                      "hfov": 7.78,
                                      "pitch": -28.8
                                     }
                                    ]
                                   },
                                   {
                                    "maps": [
                                     {
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "height": 75,
                                         "width": 75,
                                         "class": "ImageResourceLevel",
                                         "url": "media/panorama_C38ED0A5_CFAB_162B_41C2_538CF86DC268_0_HS_1_0_0_map.gif"
                                        }
                                       ]
                                      },
                                      "hfov": 7.53,
                                      "class": "HotspotPanoramaOverlayMap",
                                      "yaw": 161.02,
                                      "pitch": -32.01
                                     }
                                    ],
                                    "rollOverDisplay": false,
                                    "enabledInCardboard": true,
                                    "class": "HotspotPanoramaOverlay",
                                    "areas": [
                                     {
                                      "mapColor": "#FF0000",
                                      "class": "HotspotPanoramaOverlayArea",
                                      "click": "this.startPanoramaWithCamera(this.panorama_C38EFD85_CFAB_2EEB_41AA_1FA5F8AEA01D, this.camera_E6C89116_F2E0_B7FE_41DB_E4B738653D6C); this.mainPlayList.set('selectedIndex', 17)"
                                     }
                                    ],
                                    "useHandCursor": true,
                                    "id": "overlay_CA584B37_D1F6_E184_41C9_94AB31F49CC7",
                                    "items": [
                                     {
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "height": 150,
                                         "width": 150,
                                         "class": "ImageResourceLevel",
                                         "url": "media/panorama_C38ED0A5_CFAB_162B_41C2_538CF86DC268_0_HS_1_0.png"
                                        }
                                       ]
                                      },
                                      "class": "HotspotPanoramaOverlayImage",
                                      "yaw": 161.02,
                                      "hfov": 7.53,
                                      "pitch": -32.01
                                     }
                                    ]
                                   },
                                   {
                                    "maps": [
                                     {
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "height": 16,
                                         "width": 16,
                                         "class": "ImageResourceLevel",
                                         "url": "media/panorama_C38ED0A5_CFAB_162B_41C2_538CF86DC268_0_HS_2_0_0_map.gif"
                                        }
                                       ]
                                      },
                                      "hfov": 5.58,
                                      "class": "HotspotPanoramaOverlayMap",
                                      "yaw": 71.24,
                                      "pitch": -19.68
                                     }
                                    ],
                                    "rollOverDisplay": false,
                                    "enabledInCardboard": true,
                                    "class": "HotspotPanoramaOverlay",
                                    "areas": [
                                     {
                                      "mapColor": "#FF0000",
                                      "class": "HotspotPanoramaOverlayArea",
                                      "click": "this.mainPlayList.set('selectedIndex', 21)"
                                     }
                                    ],
                                    "useHandCursor": true,
                                    "id": "overlay_C65BCC02_D41B_5A66_41D1_759D183B485C",
                                    "items": [
                                     {
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "height": 100,
                                         "width": 100,
                                         "class": "ImageResourceLevel",
                                         "url": "media/panorama_C38ED0A5_CFAB_162B_41C2_538CF86DC268_0_HS_2_0.png"
                                        }
                                       ]
                                      },
                                      "class": "HotspotPanoramaOverlayImage",
                                      "yaw": 71.24,
                                      "hfov": 5.58,
                                      "pitch": -19.68
                                     }
                                    ]
                                   },
                                   {
                                    "maps": [
                                     {
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "height": 16,
                                         "width": 16,
                                         "class": "ImageResourceLevel",
                                         "url": "media/panorama_C38ED0A5_CFAB_162B_41C2_538CF86DC268_0_HS_3_0_0_map.gif"
                                        }
                                       ]
                                      },
                                      "hfov": 5.47,
                                      "class": "HotspotPanoramaOverlayMap",
                                      "yaw": -45.31,
                                      "pitch": -22.51
                                     }
                                    ],
                                    "rollOverDisplay": false,
                                    "enabledInCardboard": true,
                                    "class": "HotspotPanoramaOverlay",
                                    "areas": [
                                     {
                                      "mapColor": "#FF0000",
                                      "class": "HotspotPanoramaOverlayArea",
                                      "click": "this.mainPlayList.set('selectedIndex', 24)"
                                     }
                                    ],
                                    "useHandCursor": true,
                                    "id": "overlay_C67F3907_D41D_DA6D_4176_612C1FBC47E3",
                                    "items": [
                                     {
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "height": 100,
                                         "width": 100,
                                         "class": "ImageResourceLevel",
                                         "url": "media/panorama_C38ED0A5_CFAB_162B_41C2_538CF86DC268_0_HS_3_0.png"
                                        }
                                       ]
                                      },
                                      "class": "HotspotPanoramaOverlayImage",
                                      "yaw": -45.31,
                                      "hfov": 5.47,
                                      "pitch": -22.51
                                     }
                                    ]
                                   }
                                  ]
                                 }
                                ],
                                "label": "21",
                                "hfov": 360,
                                "hfovMax": 140
                               },
                               "class": "AdjacentPanorama",
                               "yaw": -54.82,
                               "distance": 1,
                               "backwardYaw": 161.02
                              },
                              {
                               "panorama": "this.panorama_C38ED2B1_CFAB_1A2B_41B2_633C8B4C5CE1",
                               "class": "AdjacentPanorama",
                               "yaw": -142.53,
                               "distance": 1,
                               "backwardYaw": 25.62
                              },
                              {
                               "panorama": "this.panorama_C38ED68D_CFAB_3AFB_41E8_AFFE674CE495",
                               "class": "AdjacentPanorama",
                               "yaw": 64.15,
                               "distance": 1,
                               "backwardYaw": -154.37
                              },
                              {
                               "panorama": "this.panorama_C38E83E8_CFAB_1A39_41E9_D67B70C790DA",
                               "class": "AdjacentPanorama",
                               "yaw": 170.13,
                               "distance": 1,
                               "backwardYaw": -59.26
                              }
                             ],
                             "hfovMin": 70,
                             "thumbnailUrl": "media/panorama_C38EFD85_CFAB_2EEB_41AA_1FA5F8AEA01D_t.jpg",
                             "id": "panorama_C38EFD85_CFAB_2EEB_41AA_1FA5F8AEA01D",
                             "pitch": 0,
                             "partial": false,
                             "class": "Panorama",
                             "frames": [
                              {
                               "sphere": {
                                "class": "ImageResource",
                                "levels": [
                                 {
                                  "height": 3040,
                                  "width": 6080,
                                  "class": "ImageResourceLevel",
                                  "url": "media/panorama_C38EFD85_CFAB_2EEB_41AA_1FA5F8AEA01D_hq.jpeg"
                                 },
                                 {
                                  "height": 1608,
                                  "width": 3217,
                                  "class": "ImageResourceLevel",
                                  "url": "media/panorama_C38EFD85_CFAB_2EEB_41AA_1FA5F8AEA01D.jpeg"
                                 }
                                ]
                               },
                               "thumbnailUrl": "media/panorama_C38EFD85_CFAB_2EEB_41AA_1FA5F8AEA01D_t.jpg",
                               "class": "SphericPanoramaFrame",
                               "overlays": [
                                {
                                 "maps": [
                                  {
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "height": 16,
                                      "width": 16,
                                      "class": "ImageResourceLevel",
                                      "url": "media/panorama_C38EFD85_CFAB_2EEB_41AA_1FA5F8AEA01D_0_HS_0_0_0_map.gif"
                                     }
                                    ]
                                   },
                                   "hfov": 7.3,
                                   "class": "HotspotPanoramaOverlayMap",
                                   "yaw": -54.82,
                                   "pitch": -34.73
                                  }
                                 ],
                                 "rollOverDisplay": false,
                                 "enabledInCardboard": true,
                                 "class": "HotspotPanoramaOverlay",
                                 "areas": [
                                  {
                                   "mapColor": "#FF0000",
                                   "class": "HotspotPanoramaOverlayArea",
                                   "click": "this.startPanoramaWithCamera(this.panorama_C38ED0A5_CFAB_162B_41C2_538CF86DC268, this.camera_E166A515_F2E0_BFF2_41E4_49FF288E8B79); this.mainPlayList.set('selectedIndex', 19)"
                                  }
                                 ],
                                 "useHandCursor": true,
                                 "id": "overlay_DC5EC32D_D3D1_894B_41CE_D35E2F299F61",
                                 "items": [
                                  {
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "height": 150,
                                      "width": 150,
                                      "class": "ImageResourceLevel",
                                      "url": "media/panorama_C38EFD85_CFAB_2EEB_41AA_1FA5F8AEA01D_0_HS_0_0.png"
                                     }
                                    ]
                                   },
                                   "class": "HotspotPanoramaOverlayImage",
                                   "yaw": -54.82,
                                   "hfov": 7.3,
                                   "pitch": -34.73
                                  }
                                 ]
                                },
                                {
                                 "maps": [
                                  {
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "height": 16,
                                      "width": 16,
                                      "class": "ImageResourceLevel",
                                      "url": "media/panorama_C38EFD85_CFAB_2EEB_41AA_1FA5F8AEA01D_0_HS_1_0_0_map.gif"
                                     }
                                    ]
                                   },
                                   "hfov": 7.51,
                                   "class": "HotspotPanoramaOverlayMap",
                                   "yaw": 64.15,
                                   "pitch": -32.27
                                  }
                                 ],
                                 "rollOverDisplay": false,
                                 "enabledInCardboard": true,
                                 "class": "HotspotPanoramaOverlay",
                                 "areas": [
                                  {
                                   "mapColor": "#FF0000",
                                   "class": "HotspotPanoramaOverlayArea",
                                   "click": "this.startPanoramaWithCamera(this.panorama_C38ED68D_CFAB_3AFB_41E8_AFFE674CE495, this.camera_E156353C_F2E0_BE32_41EC_5C7F584B6262); this.mainPlayList.set('selectedIndex', 18)"
                                  }
                                 ],
                                 "useHandCursor": true,
                                 "id": "overlay_C3A61EF7_D3D1_B8C6_41E2_CAC2A361333E",
                                 "items": [
                                  {
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "height": 150,
                                      "width": 150,
                                      "class": "ImageResourceLevel",
                                      "url": "media/panorama_C38EFD85_CFAB_2EEB_41AA_1FA5F8AEA01D_0_HS_1_0.png"
                                     }
                                    ]
                                   },
                                   "class": "HotspotPanoramaOverlayImage",
                                   "yaw": 64.15,
                                   "hfov": 7.51,
                                   "pitch": -32.27
                                  }
                                 ]
                                },
                                {
                                 "maps": [
                                  {
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "height": 16,
                                      "width": 16,
                                      "class": "ImageResourceLevel",
                                      "url": "media/panorama_C38EFD85_CFAB_2EEB_41AA_1FA5F8AEA01D_0_HS_2_0_0_map.gif"
                                     }
                                    ]
                                   },
                                   "hfov": 6.68,
                                   "class": "HotspotPanoramaOverlayMap",
                                   "yaw": -141.73,
                                   "pitch": -41.21
                                  }
                                 ],
                                 "rollOverDisplay": false,
                                 "enabledInCardboard": true,
                                 "class": "HotspotPanoramaOverlay",
                                 "areas": [
                                  {
                                   "mapColor": "#FF0000",
                                   "class": "HotspotPanoramaOverlayArea",
                                   "click": "this.startPanoramaWithCamera(this.panorama_C38EF781_CFAB_7AEB_418A_B750EAA1CAF9, this.camera_E17CB503_F2E0_BFD6_41E6_1124B9CCCEA9); this.mainPlayList.set('selectedIndex', 15)"
                                  }
                                 ],
                                 "useHandCursor": true,
                                 "id": "overlay_C3866B70_D3D1_F9D9_41E3_218412EA7D1A",
                                 "items": [
                                  {
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "height": 150,
                                      "width": 150,
                                      "class": "ImageResourceLevel",
                                      "url": "media/panorama_C38EFD85_CFAB_2EEB_41AA_1FA5F8AEA01D_0_HS_2_0.png"
                                     }
                                    ]
                                   },
                                   "class": "HotspotPanoramaOverlayImage",
                                   "yaw": -141.73,
                                   "hfov": 6.68,
                                   "pitch": -41.21
                                  }
                                 ]
                                },
                                {
                                 "maps": [
                                  {
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "height": 43,
                                      "width": 16,
                                      "class": "ImageResourceLevel",
                                      "url": "media/panorama_C38EFD85_CFAB_2EEB_41AA_1FA5F8AEA01D_0_HS_3_0_0_map.gif"
                                     }
                                    ]
                                   },
                                   "hfov": 15.1,
                                   "class": "HotspotPanoramaOverlayMap",
                                   "yaw": -142.74,
                                   "pitch": -9.2
                                  }
                                 ],
                                 "rollOverDisplay": true,
                                 "enabledInCardboard": true,
                                 "class": "HotspotPanoramaOverlay",
                                 "areas": [
                                  {
                                   "class": "HotspotPanoramaOverlayArea",
                                   "mapColor": "#FF0000"
                                  }
                                 ],
                                 "useHandCursor": true,
                                 "id": "overlay_C274273C_D3DF_8949_41E4_DFC2AC51018A",
                                 "items": [
                                  {
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "height": 706,
                                      "width": 258,
                                      "class": "ImageResourceLevel",
                                      "url": "media/panorama_C38EFD85_CFAB_2EEB_41AA_1FA5F8AEA01D_0_HS_3_0.png"
                                     }
                                    ]
                                   },
                                   "class": "HotspotPanoramaOverlayImage",
                                   "yaw": -142.74,
                                   "hfov": 15.1,
                                   "pitch": -9.2
                                  }
                                 ]
                                },
                                {
                                 "maps": [
                                  {
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "height": 49,
                                      "width": 16,
                                      "class": "ImageResourceLevel",
                                      "url": "media/panorama_C38EFD85_CFAB_2EEB_41AA_1FA5F8AEA01D_0_HS_4_0_0_map.gif"
                                     }
                                    ]
                                   },
                                   "hfov": 9.69,
                                   "class": "HotspotPanoramaOverlayMap",
                                   "yaw": 176.81,
                                   "pitch": -6.69
                                  }
                                 ],
                                 "rollOverDisplay": true,
                                 "enabledInCardboard": true,
                                 "class": "HotspotPanoramaOverlay",
                                 "areas": [
                                  {
                                   "mapColor": "#FF0000",
                                   "class": "HotspotPanoramaOverlayArea",
                                   "click": "this.mainPlayList.set('selectedIndex', 6)"
                                  }
                                 ],
                                 "useHandCursor": true,
                                 "id": "overlay_C1B1AF77_D3D1_F9C7_41E1_7CBA4B26E46D",
                                 "items": [
                                  {
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "height": 511,
                                      "width": 164,
                                      "class": "ImageResourceLevel",
                                      "url": "media/panorama_C38EFD85_CFAB_2EEB_41AA_1FA5F8AEA01D_0_HS_4_0.png"
                                     }
                                    ]
                                   },
                                   "class": "HotspotPanoramaOverlayImage",
                                   "yaw": 176.81,
                                   "hfov": 9.69,
                                   "pitch": -6.69
                                  }
                                 ]
                                },
                                {
                                 "maps": [
                                  {
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "height": 28,
                                      "width": 16,
                                      "class": "ImageResourceLevel",
                                      "url": "media/panorama_C38EFD85_CFAB_2EEB_41AA_1FA5F8AEA01D_0_HS_9_0_0_map.gif"
                                     }
                                    ]
                                   },
                                   "hfov": 20.23,
                                   "class": "HotspotPanoramaOverlayMap",
                                   "yaw": 57.28,
                                   "pitch": 0.78
                                  }
                                 ],
                                 "rollOverDisplay": true,
                                 "enabledInCardboard": true,
                                 "class": "HotspotPanoramaOverlay",
                                 "areas": [
                                  {
                                   "class": "HotspotPanoramaOverlayArea",
                                   "mapColor": "#FF0000"
                                  }
                                 ],
                                 "useHandCursor": true,
                                 "id": "overlay_F67EB692_D579_D49B_41EA_0B30DFB0B793",
                                 "items": [
                                  {
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "height": 615,
                                      "width": 341,
                                      "class": "ImageResourceLevel",
                                      "url": "media/panorama_C38EFD85_CFAB_2EEB_41AA_1FA5F8AEA01D_0_HS_9_0.png"
                                     }
                                    ]
                                   },
                                   "class": "HotspotPanoramaOverlayImage",
                                   "yaw": 57.28,
                                   "hfov": 20.23,
                                   "pitch": 0.78
                                  }
                                 ]
                                },
                                {
                                 "maps": [
                                  {
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "height": 200,
                                      "width": 86,
                                      "class": "ImageResourceLevel",
                                      "url": "media/panorama_C38EFD85_CFAB_2EEB_41AA_1FA5F8AEA01D_0_HS_5_1_0_map.gif"
                                     }
                                    ]
                                   },
                                   "hfov": 19.42,
                                   "class": "HotspotPanoramaOverlayMap",
                                   "yaw": -142.53,
                                   "pitch": -8.83
                                  }
                                 ],
                                 "rollOverDisplay": false,
                                 "enabledInCardboard": true,
                                 "class": "HotspotPanoramaOverlay",
                                 "areas": [
                                  {
                                   "toolTip": "Go to\u000aBATHROOM",
                                   "class": "HotspotPanoramaOverlayArea",
                                   "click": "this.startPanoramaWithCamera(this.panorama_C38ED2B1_CFAB_1A2B_41B2_633C8B4C5CE1, this.camera_E16E2525_F2E0_BFD2_41D2_8CC11A8A982A); this.mainPlayList.set('selectedIndex', 16)",
                                   "displayTooltipInTouchScreens": true,
                                   "mapColor": "#FF0000"
                                  }
                                 ],
                                 "useHandCursor": true,
                                 "id": "overlay_C2B1E49D_D3DE_8F4B_4196_BAAD68F759BA",
                                 "items": [
                                  {
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "height": 763,
                                      "width": 331,
                                      "class": "ImageResourceLevel",
                                      "url": "media/panorama_C38EFD85_CFAB_2EEB_41AA_1FA5F8AEA01D_0_HS_5_0.png"
                                     }
                                    ]
                                   },
                                   "class": "HotspotPanoramaOverlayImage",
                                   "yaw": -142.53,
                                   "hfov": 19.42,
                                   "roll": 0,
                                   "pitch": -8.83
                                  }
                                 ]
                                },
                                {
                                 "maps": [
                                  {
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "height": 200,
                                      "width": 56,
                                      "class": "ImageResourceLevel",
                                      "url": "media/panorama_C38EFD85_CFAB_2EEB_41AA_1FA5F8AEA01D_0_HS_6_1_0_map.gif"
                                     }
                                    ]
                                   },
                                   "hfov": 9.48,
                                   "class": "HotspotPanoramaOverlayMap",
                                   "yaw": 175.26,
                                   "pitch": -6.67
                                  }
                                 ],
                                 "rollOverDisplay": false,
                                 "enabledInCardboard": true,
                                 "class": "HotspotPanoramaOverlay",
                                 "areas": [
                                  {
                                   "toolTip": "Go to\u000aTV LOUNGE",
                                   "class": "HotspotPanoramaOverlayArea",
                                   "click": "this.mainPlayList.set('selectedIndex', 6)",
                                   "displayTooltipInTouchScreens": true,
                                   "mapColor": "#FF0000"
                                  }
                                 ],
                                 "useHandCursor": true,
                                 "id": "overlay_C222F432_D3DE_8F59_41C3_455A9B652CA4",
                                 "items": [
                                  {
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "height": 569,
                                      "width": 160,
                                      "class": "ImageResourceLevel",
                                      "url": "media/panorama_C38EFD85_CFAB_2EEB_41AA_1FA5F8AEA01D_0_HS_6_0.png"
                                     }
                                    ]
                                   },
                                   "class": "HotspotPanoramaOverlayImage",
                                   "yaw": 175.26,
                                   "hfov": 9.48,
                                   "roll": 0,
                                   "pitch": -6.67
                                  }
                                 ]
                                },
                                {
                                 "maps": [
                                  {
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "height": 199,
                                      "width": 26,
                                      "class": "ImageResourceLevel",
                                      "url": "media/panorama_C38EFD85_CFAB_2EEB_41AA_1FA5F8AEA01D_0_HS_7_1_0_map.gif"
                                     }
                                    ]
                                   },
                                   "hfov": 5.04,
                                   "class": "HotspotPanoramaOverlayMap",
                                   "yaw": -177.34,
                                   "pitch": -7.71
                                  }
                                 ],
                                 "rollOverDisplay": false,
                                 "enabledInCardboard": true,
                                 "class": "HotspotPanoramaOverlay",
                                 "areas": [
                                  {
                                   "toolTip": "Go to\u000aTV LOUNGE",
                                   "displayTooltipInTouchScreens": true,
                                   "mapColor": "#FF0000",
                                   "class": "HotspotPanoramaOverlayArea"
                                  }
                                 ],
                                 "useHandCursor": true,
                                 "id": "overlay_C06B386C_D3D2_87C9_41E8_3857E47D9300",
                                 "items": [
                                  {
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "height": 645,
                                      "width": 85,
                                      "class": "ImageResourceLevel",
                                      "url": "media/panorama_C38EFD85_CFAB_2EEB_41AA_1FA5F8AEA01D_0_HS_7_0.png"
                                     }
                                    ]
                                   },
                                   "class": "HotspotPanoramaOverlayImage",
                                   "yaw": -177.34,
                                   "hfov": 5.04,
                                   "roll": 0,
                                   "pitch": -7.71
                                  }
                                 ]
                                },
                                {
                                 "maps": [
                                  {
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "height": 200,
                                      "width": 169,
                                      "class": "ImageResourceLevel",
                                      "url": "media/panorama_C38EFD85_CFAB_2EEB_41AA_1FA5F8AEA01D_0_HS_8_1_0_map.gif"
                                     }
                                    ]
                                   },
                                   "hfov": 36.11,
                                   "class": "HotspotPanoramaOverlayMap",
                                   "yaw": 56.71,
                                   "pitch": -0.25
                                  }
                                 ],
                                 "rollOverDisplay": false,
                                 "enabledInCardboard": true,
                                 "class": "HotspotPanoramaOverlay",
                                 "areas": [
                                  {
                                   "toolTip": "Go to\u000aBALCONY",
                                   "class": "HotspotPanoramaOverlayArea",
                                   "click": "this.mainPlayList.set('selectedIndex', 22)",
                                   "displayTooltipInTouchScreens": true,
                                   "mapColor": "#FF0000"
                                  }
                                 ],
                                 "useHandCursor": true,
                                 "id": "overlay_C184298B_D3D2_B94F_41C7_DF13DF1E84A5",
                                 "items": [
                                  {
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "height": 744,
                                      "width": 630,
                                      "class": "ImageResourceLevel",
                                      "url": "media/panorama_C38EFD85_CFAB_2EEB_41AA_1FA5F8AEA01D_0_HS_8_0.png"
                                     }
                                    ]
                                   },
                                   "class": "HotspotPanoramaOverlayImage",
                                   "yaw": 56.71,
                                   "hfov": 36.11,
                                   "roll": 0,
                                   "pitch": -0.25
                                  }
                                 ]
                                },
                                {
                                 "maps": [
                                  {
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "height": 16,
                                      "width": 16,
                                      "class": "ImageResourceLevel",
                                      "url": "media/panorama_C38EFD85_CFAB_2EEB_41AA_1FA5F8AEA01D_0_HS_10_0_0_map.gif"
                                     }
                                    ]
                                   },
                                   "hfov": 7.89,
                                   "class": "HotspotPanoramaOverlayMap",
                                   "yaw": 170.13,
                                   "pitch": -27.38
                                  }
                                 ],
                                 "rollOverDisplay": false,
                                 "enabledInCardboard": true,
                                 "class": "HotspotPanoramaOverlay",
                                 "areas": [
                                  {
                                   "mapColor": "#FF0000",
                                   "class": "HotspotPanoramaOverlayArea",
                                   "click": "this.startPanoramaWithCamera(this.panorama_C38E83E8_CFAB_1A39_41E9_D67B70C790DA, this.camera_E150C559_F2E0_BE72_41E2_912E8AE64AC6); this.mainPlayList.set('selectedIndex', 14)"
                                  }
                                 ],
                                 "useHandCursor": true,
                                 "id": "overlay_F2A1FDF7_D529_B49A_41E1_36F77B8A09D9",
                                 "items": [
                                  {
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "height": 150,
                                      "width": 150,
                                      "class": "ImageResourceLevel",
                                      "url": "media/panorama_C38EFD85_CFAB_2EEB_41AA_1FA5F8AEA01D_0_HS_10_0.png"
                                     }
                                    ]
                                   },
                                   "class": "HotspotPanoramaOverlayImage",
                                   "yaw": 170.13,
                                   "hfov": 7.89,
                                   "pitch": -27.38
                                  }
                                 ]
                                }
                               ]
                              }
                             ],
                             "label": "19",
                             "hfov": 360,
                             "hfovMax": 140
                            },
                            "class": "AdjacentPanorama",
                            "yaw": -59.26,
                            "distance": 1,
                            "backwardYaw": 170.13
                           },
                           {
                            "panorama": "this.panorama_C38EF781_CFAB_7AEB_418A_B750EAA1CAF9",
                            "class": "AdjacentPanorama",
                            "yaw": -89.25,
                            "distance": 1,
                            "backwardYaw": 106.63
                           }
                          ],
                          "hfovMin": 70,
                          "thumbnailUrl": "media/panorama_C38E83E8_CFAB_1A39_41E9_D67B70C790DA_t.jpg",
                          "id": "panorama_C38E83E8_CFAB_1A39_41E9_D67B70C790DA",
                          "pitch": 0,
                          "partial": false,
                          "class": "Panorama",
                          "frames": [
                           {
                            "sphere": {
                             "class": "ImageResource",
                             "levels": [
                              {
                               "height": 3040,
                               "width": 6080,
                               "class": "ImageResourceLevel",
                               "url": "media/panorama_C38E83E8_CFAB_1A39_41E9_D67B70C790DA_hq.jpeg"
                              },
                              {
                               "height": 1608,
                               "width": 3217,
                               "class": "ImageResourceLevel",
                               "url": "media/panorama_C38E83E8_CFAB_1A39_41E9_D67B70C790DA.jpeg"
                              }
                             ]
                            },
                            "thumbnailUrl": "media/panorama_C38E83E8_CFAB_1A39_41E9_D67B70C790DA_t.jpg",
                            "class": "SphericPanoramaFrame",
                            "overlays": [
                             {
                              "maps": [
                               {
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 75,
                                   "width": 75,
                                   "class": "ImageResourceLevel",
                                   "url": "media/panorama_C38E83E8_CFAB_1A39_41E9_D67B70C790DA_0_HS_0_0_0_map.gif"
                                  }
                                 ]
                                },
                                "hfov": 4.46,
                                "class": "HotspotPanoramaOverlayMap",
                                "yaw": 165.6,
                                "pitch": -59.83
                               }
                              ],
                              "rollOverDisplay": false,
                              "enabledInCardboard": true,
                              "class": "HotspotPanoramaOverlay",
                              "areas": [
                               {
                                "mapColor": "#FF0000",
                                "class": "HotspotPanoramaOverlayArea",
                                "click": "this.startPanoramaWithCamera(this.panorama_C38F43B8_CFAD_3A19_41E9_7D6FC4197EA0, this.camera_E1A31E92_F2E0_AAF6_41E7_9DE63E68E7B0); this.mainPlayList.set('selectedIndex', 6)"
                               }
                              ],
                              "useHandCursor": true,
                              "id": "overlay_C4914219_D195_A38C_41E8_2D133FDDBD40",
                              "items": [
                               {
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 150,
                                   "width": 150,
                                   "class": "ImageResourceLevel",
                                   "url": "media/panorama_C38E83E8_CFAB_1A39_41E9_D67B70C790DA_0_HS_0_0.png"
                                  }
                                 ]
                                },
                                "class": "HotspotPanoramaOverlayImage",
                                "yaw": 165.6,
                                "hfov": 4.46,
                                "pitch": -59.83
                               }
                              ]
                             },
                             {
                              "maps": [
                               {
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 75,
                                   "width": 75,
                                   "class": "ImageResourceLevel",
                                   "url": "media/panorama_C38E83E8_CFAB_1A39_41E9_D67B70C790DA_0_HS_1_0_0_map.gif"
                                  }
                                 ]
                                },
                                "hfov": 8.14,
                                "class": "HotspotPanoramaOverlayMap",
                                "yaw": -59.26,
                                "pitch": -23.6
                               }
                              ],
                              "rollOverDisplay": false,
                              "enabledInCardboard": true,
                              "class": "HotspotPanoramaOverlay",
                              "areas": [
                               {
                                "mapColor": "#FF0000",
                                "class": "HotspotPanoramaOverlayArea",
                                "click": "this.startPanoramaWithCamera(this.panorama_C38EFD85_CFAB_2EEB_41AA_1FA5F8AEA01D, this.camera_E1913EDE_F2E0_AA6E_41EB_0D9D8D642F46); this.mainPlayList.set('selectedIndex', 17)"
                               }
                              ],
                              "useHandCursor": true,
                              "id": "overlay_C41D8F9F_D19D_6084_41D1_AAA3DE990279",
                              "items": [
                               {
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 150,
                                   "width": 150,
                                   "class": "ImageResourceLevel",
                                   "url": "media/panorama_C38E83E8_CFAB_1A39_41E9_D67B70C790DA_0_HS_1_0.png"
                                  }
                                 ]
                                },
                                "class": "HotspotPanoramaOverlayImage",
                                "yaw": -59.26,
                                "hfov": 8.14,
                                "pitch": -23.6
                               }
                              ]
                             },
                             {
                              "maps": [
                               {
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 74,
                                   "width": 74,
                                   "class": "ImageResourceLevel",
                                   "url": "media/panorama_C38E83E8_CFAB_1A39_41E9_D67B70C790DA_0_HS_2_0_0_map.gif"
                                  }
                                 ]
                                },
                                "hfov": 7.77,
                                "class": "HotspotPanoramaOverlayMap",
                                "yaw": -89.25,
                                "pitch": -29.01
                               }
                              ],
                              "rollOverDisplay": false,
                              "enabledInCardboard": true,
                              "class": "HotspotPanoramaOverlay",
                              "areas": [
                               {
                                "mapColor": "#FF0000",
                                "class": "HotspotPanoramaOverlayArea",
                                "click": "this.startPanoramaWithCamera(this.panorama_C38EF781_CFAB_7AEB_418A_B750EAA1CAF9, this.camera_E19A3EED_F2E0_AA52_41E8_3A9F89CF0942); this.mainPlayList.set('selectedIndex', 15)"
                               }
                              ],
                              "useHandCursor": true,
                              "id": "overlay_C7A592C4_D19F_6084_41DE_23F30BE5A945",
                              "items": [
                               {
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 149,
                                   "width": 149,
                                   "class": "ImageResourceLevel",
                                   "url": "media/panorama_C38E83E8_CFAB_1A39_41E9_D67B70C790DA_0_HS_2_0.png"
                                  }
                                 ]
                                },
                                "class": "HotspotPanoramaOverlayImage",
                                "yaw": -89.25,
                                "hfov": 7.77,
                                "pitch": -29.01
                               }
                              ]
                             },
                             {
                              "maps": [
                               {
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 134,
                                   "width": 16,
                                   "class": "ImageResourceLevel",
                                   "url": "media/panorama_C38E83E8_CFAB_1A39_41E9_D67B70C790DA_0_HS_3_0_0_map.gif"
                                  }
                                 ]
                                },
                                "hfov": 4.77,
                                "class": "HotspotPanoramaOverlayMap",
                                "yaw": -111.12,
                                "pitch": -4.19
                               }
                              ],
                              "rollOverDisplay": true,
                              "enabledInCardboard": true,
                              "class": "HotspotPanoramaOverlay",
                              "areas": [
                               {
                                "class": "HotspotPanoramaOverlayArea",
                                "mapColor": "#FF0000"
                               }
                              ],
                              "useHandCursor": true,
                              "id": "overlay_C7CCD3B6_D197_A087_41DB_41EB77031A14",
                              "items": [
                               {
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 670,
                                   "width": 80,
                                   "class": "ImageResourceLevel",
                                   "url": "media/panorama_C38E83E8_CFAB_1A39_41E9_D67B70C790DA_0_HS_3_0.png"
                                  }
                                 ]
                                },
                                "class": "HotspotPanoramaOverlayImage",
                                "yaw": -111.12,
                                "hfov": 4.77,
                                "pitch": -4.19
                               }
                              ]
                             },
                             {
                              "maps": [
                               {
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 75,
                                   "width": 75,
                                   "class": "ImageResourceLevel",
                                   "url": "media/panorama_C38E83E8_CFAB_1A39_41E9_D67B70C790DA_0_HS_7_0_0_map.gif"
                                  }
                                 ]
                                },
                                "hfov": 7.03,
                                "class": "HotspotPanoramaOverlayMap",
                                "yaw": -166.89,
                                "pitch": -37.66
                               }
                              ],
                              "rollOverDisplay": false,
                              "enabledInCardboard": true,
                              "class": "HotspotPanoramaOverlay",
                              "areas": [
                               {
                                "mapColor": "#FF0000",
                                "class": "HotspotPanoramaOverlayArea",
                                "click": "this.startPanoramaWithCamera(this.panorama_C38F9A09_CFAD_15FB_41D2_530F2E7196E8, this.camera_E1ADCEAB_F2E0_AAD6_41E0_87A373EEA971); this.mainPlayList.set('selectedIndex', 5)"
                               }
                              ],
                              "useHandCursor": true,
                              "id": "overlay_C8BE9F83_D1ED_617C_41D0_082C26A89EA3",
                              "items": [
                               {
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 150,
                                   "width": 150,
                                   "class": "ImageResourceLevel",
                                   "url": "media/panorama_C38E83E8_CFAB_1A39_41E9_D67B70C790DA_0_HS_7_0.png"
                                  }
                                 ]
                                },
                                "class": "HotspotPanoramaOverlayImage",
                                "yaw": -166.89,
                                "hfov": 7.03,
                                "pitch": -37.66
                               }
                              ]
                             },
                             {
                              "maps": [
                               {
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 25,
                                   "width": 25,
                                   "class": "ImageResourceLevel",
                                   "url": "media/panorama_C38E83E8_CFAB_1A39_41E9_D67B70C790DA_0_HS_8_0_0_map.gif"
                                  }
                                 ]
                                },
                                "hfov": 2.85,
                                "class": "HotspotPanoramaOverlayMap",
                                "yaw": 177.42,
                                "pitch": -15.6
                               }
                              ],
                              "rollOverDisplay": false,
                              "enabledInCardboard": true,
                              "class": "HotspotPanoramaOverlay",
                              "areas": [
                               {
                                "mapColor": "#FF0000",
                                "class": "HotspotPanoramaOverlayArea",
                                "click": "this.startPanoramaWithCamera(this.panorama_C38F3FF0_CFAD_6A29_41D8_A9DC4E7E1521, this.camera_E1965ECC_F2E0_AA52_41CA_354FF18C685A); this.mainPlayList.set('selectedIndex', 4)"
                               }
                              ],
                              "useHandCursor": true,
                              "id": "overlay_C6888EC0_D1EF_E0FC_41B6_921E5F478A56",
                              "items": [
                               {
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 50,
                                   "width": 50,
                                   "class": "ImageResourceLevel",
                                   "url": "media/panorama_C38E83E8_CFAB_1A39_41E9_D67B70C790DA_0_HS_8_0.png"
                                  }
                                 ]
                                },
                                "class": "HotspotPanoramaOverlayImage",
                                "yaw": 177.42,
                                "hfov": 2.85,
                                "pitch": -15.6
                               }
                              ]
                             },
                             {
                              "maps": [
                               {
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 42,
                                   "width": 16,
                                   "class": "ImageResourceLevel",
                                   "url": "media/panorama_C38E83E8_CFAB_1A39_41E9_D67B70C790DA_0_HS_9_0_0_map.gif"
                                  }
                                 ]
                                },
                                "hfov": 4.81,
                                "class": "HotspotPanoramaOverlayMap",
                                "yaw": 130.55,
                                "pitch": -3.06
                               }
                              ],
                              "rollOverDisplay": true,
                              "enabledInCardboard": true,
                              "class": "HotspotPanoramaOverlay",
                              "areas": [
                               {
                                "class": "HotspotPanoramaOverlayArea",
                                "mapColor": "#FF0000"
                               }
                              ],
                              "useHandCursor": true,
                              "id": "overlay_C93C0A03_D1F2_E37D_41DD_BED03A9ACCE5",
                              "items": [
                               {
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 213,
                                   "width": 81,
                                   "class": "ImageResourceLevel",
                                   "url": "media/panorama_C38E83E8_CFAB_1A39_41E9_D67B70C790DA_0_HS_9_0.png"
                                  }
                                 ]
                                },
                                "class": "HotspotPanoramaOverlayImage",
                                "yaw": 130.55,
                                "hfov": 4.81,
                                "pitch": -3.06
                               }
                              ]
                             },
                             {
                              "maps": [
                               {
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 28,
                                   "width": 16,
                                   "class": "ImageResourceLevel",
                                   "url": "media/panorama_C38E83E8_CFAB_1A39_41E9_D67B70C790DA_0_HS_13_0_0_map.gif"
                                  }
                                 ]
                                },
                                "hfov": 11.79,
                                "class": "HotspotPanoramaOverlayMap",
                                "yaw": -28.98,
                                "pitch": 1.44
                               }
                              ],
                              "rollOverDisplay": true,
                              "enabledInCardboard": true,
                              "class": "HotspotPanoramaOverlay",
                              "areas": [
                               {
                                "class": "HotspotPanoramaOverlayArea",
                                "mapColor": "#FF0000"
                               }
                              ],
                              "useHandCursor": true,
                              "id": "overlay_F6334732_D56B_D59B_41E0_4A2E07D200D4",
                              "items": [
                               {
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 355,
                                   "width": 199,
                                   "class": "ImageResourceLevel",
                                   "url": "media/panorama_C38E83E8_CFAB_1A39_41E9_D67B70C790DA_0_HS_13_0.png"
                                  }
                                 ]
                                },
                                "class": "HotspotPanoramaOverlayImage",
                                "yaw": -28.98,
                                "hfov": 11.79,
                                "pitch": 1.44
                               }
                              ]
                             },
                             {
                              "maps": [
                               {
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 35,
                                   "width": 15,
                                   "class": "ImageResourceLevel",
                                   "url": "media/panorama_C38E83E8_CFAB_1A39_41E9_D67B70C790DA_0_HS_14_0_0_map.gif"
                                  }
                                 ]
                                },
                                "hfov": 14.05,
                                "class": "HotspotPanoramaOverlayMap",
                                "yaw": -70.36,
                                "pitch": -0.37
                               }
                              ],
                              "rollOverDisplay": true,
                              "enabledInCardboard": true,
                              "class": "HotspotPanoramaOverlay",
                              "areas": [
                               {
                                "class": "HotspotPanoramaOverlayArea",
                                "mapColor": "#FF0000"
                               }
                              ],
                              "useHandCursor": true,
                              "id": "overlay_F15B305B_D56B_CB89_41E2_32BCCDD7D5F1",
                              "items": [
                               {
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 519,
                                   "width": 237,
                                   "class": "ImageResourceLevel",
                                   "url": "media/panorama_C38E83E8_CFAB_1A39_41E9_D67B70C790DA_0_HS_14_0.png"
                                  }
                                 ]
                                },
                                "class": "HotspotPanoramaOverlayImage",
                                "yaw": -70.36,
                                "hfov": 14.05,
                                "pitch": -0.37
                               }
                              ]
                             },
                             {
                              "maps": [
                               {
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 200,
                                   "width": 111,
                                   "class": "ImageResourceLevel",
                                   "url": "media/panorama_C38E83E8_CFAB_1A39_41E9_D67B70C790DA_0_HS_4_1_0_map.gif"
                                  }
                                 ]
                                },
                                "hfov": 19.27,
                                "class": "HotspotPanoramaOverlayMap",
                                "yaw": -72.9,
                                "pitch": -0.26
                               }
                              ],
                              "rollOverDisplay": false,
                              "enabledInCardboard": true,
                              "class": "HotspotPanoramaOverlay",
                              "areas": [
                               {
                                "toolTip": "Go to\u000aBALCONY",
                                "class": "HotspotPanoramaOverlayArea",
                                "click": "this.mainPlayList.set('selectedIndex', 19)",
                                "displayTooltipInTouchScreens": true,
                                "mapColor": "#FF0000"
                               }
                              ],
                              "useHandCursor": true,
                              "id": "overlay_C79A64E5_D192_E085_41DC_C034F2EE80AE",
                              "items": [
                               {
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 591,
                                   "width": 328,
                                   "class": "ImageResourceLevel",
                                   "url": "media/panorama_C38E83E8_CFAB_1A39_41E9_D67B70C790DA_0_HS_4_0.png"
                                  }
                                 ]
                                },
                                "class": "HotspotPanoramaOverlayImage",
                                "yaw": -72.9,
                                "hfov": 19.27,
                                "roll": 0,
                                "pitch": -0.26
                               }
                              ]
                             },
                             {
                              "maps": [
                               {
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 200,
                                   "width": 168,
                                   "class": "ImageResourceLevel",
                                   "url": "media/panorama_C38E83E8_CFAB_1A39_41E9_D67B70C790DA_0_HS_5_1_0_map.gif"
                                  }
                                 ]
                                },
                                "hfov": 20.12,
                                "class": "HotspotPanoramaOverlayMap",
                                "yaw": -28.48,
                                "pitch": -0.1
                               }
                              ],
                              "rollOverDisplay": false,
                              "enabledInCardboard": true,
                              "class": "HotspotPanoramaOverlay",
                              "areas": [
                               {
                                "toolTip": "Go to\u000aBALCONY",
                                "class": "HotspotPanoramaOverlayArea",
                                "click": "this.mainPlayList.set('selectedIndex', 22)",
                                "displayTooltipInTouchScreens": true,
                                "mapColor": "#FF0000"
                               }
                              ],
                              "useHandCursor": true,
                              "id": "overlay_C73BE224_D193_A3BB_41D1_5752BFF48927",
                              "items": [
                               {
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 407,
                                   "width": 343,
                                   "class": "ImageResourceLevel",
                                   "url": "media/panorama_C38E83E8_CFAB_1A39_41E9_D67B70C790DA_0_HS_5_0.png"
                                  }
                                 ]
                                },
                                "class": "HotspotPanoramaOverlayImage",
                                "yaw": -28.48,
                                "hfov": 20.12,
                                "roll": 0,
                                "pitch": -0.1
                               }
                              ]
                             },
                             {
                              "maps": [
                               {
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 200,
                                   "width": 13,
                                   "class": "ImageResourceLevel",
                                   "url": "media/panorama_C38E83E8_CFAB_1A39_41E9_D67B70C790DA_0_HS_6_1_0_map.gif"
                                  }
                                 ]
                                },
                                "hfov": 2.96,
                                "class": "HotspotPanoramaOverlayMap",
                                "yaw": -111.43,
                                "pitch": -3.81
                               }
                              ],
                              "rollOverDisplay": false,
                              "enabledInCardboard": true,
                              "class": "HotspotPanoramaOverlay",
                              "areas": [
                               {
                                "toolTip": "Go to\u000aBATHROOM",
                                "class": "HotspotPanoramaOverlayArea",
                                "click": "this.mainPlayList.set('selectedIndex', 16)",
                                "displayTooltipInTouchScreens": true,
                                "mapColor": "#FF0000"
                               }
                              ],
                              "useHandCursor": true,
                              "id": "overlay_C6A0A379_D196_A18C_41C9_CC980466AABE",
                              "items": [
                               {
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 733,
                                   "width": 50,
                                   "class": "ImageResourceLevel",
                                   "url": "media/panorama_C38E83E8_CFAB_1A39_41E9_D67B70C790DA_0_HS_6_0.png"
                                  }
                                 ]
                                },
                                "class": "HotspotPanoramaOverlayImage",
                                "yaw": -111.43,
                                "hfov": 2.96,
                                "roll": 0,
                                "pitch": -3.81
                               }
                              ]
                             },
                             {
                              "maps": [
                               {
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 133,
                                   "width": 44,
                                   "class": "ImageResourceLevel",
                                   "url": "media/panorama_C38E83E8_CFAB_1A39_41E9_D67B70C790DA_0_HS_12_1_0_map.gif"
                                  }
                                 ]
                                },
                                "hfov": 5.31,
                                "class": "HotspotPanoramaOverlayMap",
                                "yaw": 130.52,
                                "pitch": -4.36
                               }
                              ],
                              "rollOverDisplay": false,
                              "enabledInCardboard": true,
                              "class": "HotspotPanoramaOverlay",
                              "areas": [
                               {
                                "toolTip": "Go to\u000aKITCHEN",
                                "class": "HotspotPanoramaOverlayArea",
                                "click": "this.mainPlayList.set('selectedIndex', 2)",
                                "displayTooltipInTouchScreens": true,
                                "mapColor": "#FF0000"
                               }
                              ],
                              "useHandCursor": true,
                              "id": "overlay_C98FBF21_D1F2_E1BD_41A0_968D851DC900",
                              "items": [
                               {
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 267,
                                   "width": 89,
                                   "class": "ImageResourceLevel",
                                   "url": "media/panorama_C38E83E8_CFAB_1A39_41E9_D67B70C790DA_0_HS_12_0.png"
                                  }
                                 ]
                                },
                                "class": "HotspotPanoramaOverlayImage",
                                "yaw": 130.52,
                                "hfov": 5.31,
                                "roll": 0,
                                "pitch": -4.36
                               }
                              ]
                             }
                            ]
                           }
                          ],
                          "label": "15",
                          "hfov": 360,
                          "hfovMax": 140
                         },
                         "class": "AdjacentPanorama",
                         "yaw": -18.31,
                         "distance": 1,
                         "backwardYaw": 177.42
                        },
                        {
                         "panorama": {
                          "vfov": 180,
                          "adjacentPanoramas": [
                           {
                            "panorama": {
                             "vfov": 180,
                             "adjacentPanoramas": [
                              {
                               "panorama": "this.panorama_C2BD4D90_CFAD_EEE9_41E8_7D7C7C35C1B9",
                               "class": "AdjacentPanorama",
                               "yaw": -67.69,
                               "distance": 1,
                               "backwardYaw": -176.63
                              },
                              {
                               "panorama": {
                                "vfov": 180,
                                "adjacentPanoramas": [
                                 {
                                  "panorama": "this.panorama_C38FD600_CFAD_7DE9_41DE_12D7FD2889AD",
                                  "class": "AdjacentPanorama",
                                  "yaw": -128.87,
                                  "distance": 1,
                                  "backwardYaw": -67.85
                                 },
                                 {
                                  "panorama": "this.panorama_C2BD4D90_CFAD_EEE9_41E8_7D7C7C35C1B9",
                                  "class": "AdjacentPanorama",
                                  "yaw": 52.56,
                                  "distance": 1,
                                  "backwardYaw": -174.74
                                 }
                                ],
                                "hfovMin": 70,
                                "thumbnailUrl": "media/panorama_C38BAB46_CFAD_6A69_41E9_631E1BE3FFAB_t.jpg",
                                "id": "panorama_C38BAB46_CFAD_6A69_41E9_631E1BE3FFAB",
                                "pitch": 0,
                                "partial": false,
                                "class": "Panorama",
                                "frames": [
                                 {
                                  "sphere": {
                                   "class": "ImageResource",
                                   "levels": [
                                    {
                                     "height": 3040,
                                     "width": 6080,
                                     "class": "ImageResourceLevel",
                                     "url": "media/panorama_C38BAB46_CFAD_6A69_41E9_631E1BE3FFAB_hq.jpeg"
                                    },
                                    {
                                     "height": 1608,
                                     "width": 3217,
                                     "class": "ImageResourceLevel",
                                     "url": "media/panorama_C38BAB46_CFAD_6A69_41E9_631E1BE3FFAB.jpeg"
                                    }
                                   ]
                                  },
                                  "thumbnailUrl": "media/panorama_C38BAB46_CFAD_6A69_41E9_631E1BE3FFAB_t.jpg",
                                  "class": "SphericPanoramaFrame",
                                  "overlays": [
                                   {
                                    "maps": [
                                     {
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "height": 16,
                                         "width": 16,
                                         "class": "ImageResourceLevel",
                                         "url": "media/panorama_C38BAB46_CFAD_6A69_41E9_631E1BE3FFAB_0_HS_0_0_0_map.gif"
                                        }
                                       ]
                                      },
                                      "hfov": 7.25,
                                      "class": "HotspotPanoramaOverlayMap",
                                      "yaw": -128.87,
                                      "pitch": -35.26
                                     }
                                    ],
                                    "rollOverDisplay": false,
                                    "enabledInCardboard": true,
                                    "class": "HotspotPanoramaOverlay",
                                    "areas": [
                                     {
                                      "mapColor": "#FF0000",
                                      "class": "HotspotPanoramaOverlayArea",
                                      "click": "this.startPanoramaWithCamera(this.panorama_C38FD600_CFAD_7DE9_41DE_12D7FD2889AD, this.camera_E1A4141C_F2E0_BDF2_41B4_739D6F70ECB6); this.mainPlayList.set('selectedIndex', 3)"
                                     }
                                    ],
                                    "useHandCursor": true,
                                    "id": "overlay_DE8650EF_CFBB_1637_41CA_F1002BCA4531",
                                    "items": [
                                     {
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "height": 150,
                                         "width": 150,
                                         "class": "ImageResourceLevel",
                                         "url": "media/panorama_C38BAB46_CFAD_6A69_41E9_631E1BE3FFAB_0_HS_0_0.png"
                                        }
                                       ]
                                      },
                                      "class": "HotspotPanoramaOverlayImage",
                                      "yaw": -128.87,
                                      "hfov": 7.25,
                                      "pitch": -35.26
                                     }
                                    ]
                                   },
                                   {
                                    "maps": [
                                     {
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "height": 16,
                                         "width": 16,
                                         "class": "ImageResourceLevel",
                                         "url": "media/panorama_C38BAB46_CFAD_6A69_41E9_631E1BE3FFAB_0_HS_1_0_0_map.gif"
                                        }
                                       ]
                                      },
                                      "hfov": 5.81,
                                      "class": "HotspotPanoramaOverlayMap",
                                      "yaw": 52.56,
                                      "pitch": -49.18
                                     }
                                    ],
                                    "rollOverDisplay": false,
                                    "enabledInCardboard": true,
                                    "class": "HotspotPanoramaOverlay",
                                    "areas": [
                                     {
                                      "mapColor": "#FF0000",
                                      "class": "HotspotPanoramaOverlayArea",
                                      "click": "this.startPanoramaWithCamera(this.panorama_C2BD4D90_CFAD_EEE9_41E8_7D7C7C35C1B9, this.camera_E1A0C430_F2E0_BE32_41D2_0C4A6921420D); this.mainPlayList.set('selectedIndex', 1)"
                                     }
                                    ],
                                    "useHandCursor": true,
                                    "id": "overlay_DE1DFA85_CFBB_2AEB_41BE_3EE924277147",
                                    "items": [
                                     {
                                      "image": {
                                       "class": "ImageResource",
                                       "levels": [
                                        {
                                         "height": 150,
                                         "width": 150,
                                         "class": "ImageResourceLevel",
                                         "url": "media/panorama_C38BAB46_CFAD_6A69_41E9_631E1BE3FFAB_0_HS_1_0.png"
                                        }
                                       ]
                                      },
                                      "class": "HotspotPanoramaOverlayImage",
                                      "yaw": 52.56,
                                      "hfov": 5.81,
                                      "pitch": -49.18
                                     }
                                    ]
                                   }
                                  ]
                                 }
                                ],
                                "label": "3",
                                "hfov": 360,
                                "hfovMax": 140
                               },
                               "class": "AdjacentPanorama",
                               "yaw": -67.85,
                               "distance": 1,
                               "backwardYaw": -128.87
                              }
                             ],
                             "hfovMin": 70,
                             "thumbnailUrl": "media/panorama_C38FD600_CFAD_7DE9_41DE_12D7FD2889AD_t.jpg",
                             "id": "panorama_C38FD600_CFAD_7DE9_41DE_12D7FD2889AD",
                             "pitch": 0,
                             "partial": false,
                             "class": "Panorama",
                             "frames": [
                              {
                               "sphere": {
                                "class": "ImageResource",
                                "levels": [
                                 {
                                  "height": 3040,
                                  "width": 6080,
                                  "class": "ImageResourceLevel",
                                  "url": "media/panorama_C38FD600_CFAD_7DE9_41DE_12D7FD2889AD_hq.jpeg"
                                 },
                                 {
                                  "height": 1608,
                                  "width": 3217,
                                  "class": "ImageResourceLevel",
                                  "url": "media/panorama_C38FD600_CFAD_7DE9_41DE_12D7FD2889AD.jpeg"
                                 }
                                ]
                               },
                               "thumbnailUrl": "media/panorama_C38FD600_CFAD_7DE9_41DE_12D7FD2889AD_t.jpg",
                               "class": "SphericPanoramaFrame",
                               "overlays": [
                                {
                                 "maps": [
                                  {
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "height": 16,
                                      "width": 16,
                                      "class": "ImageResourceLevel",
                                      "url": "media/panorama_C38FD600_CFAD_7DE9_41DE_12D7FD2889AD_0_HS_0_0_0_map.gif"
                                     }
                                    ]
                                   },
                                   "hfov": 5.45,
                                   "class": "HotspotPanoramaOverlayMap",
                                   "yaw": -67.69,
                                   "pitch": -23.13
                                  }
                                 ],
                                 "rollOverDisplay": false,
                                 "enabledInCardboard": true,
                                 "class": "HotspotPanoramaOverlay",
                                 "areas": [
                                  {
                                   "mapColor": "#FF0000",
                                   "class": "HotspotPanoramaOverlayArea",
                                   "click": "this.startPanoramaWithCamera(this.panorama_C2BD4D90_CFAD_EEE9_41E8_7D7C7C35C1B9, this.camera_E67471E1_F2E0_B652_41CB_5C2401268854); this.mainPlayList.set('selectedIndex', 1)"
                                  }
                                 ],
                                 "useHandCursor": true,
                                 "id": "overlay_DD436C0C_CFB5_6DF9_41C5_28F600CE176D",
                                 "items": [
                                  {
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "height": 100,
                                      "width": 100,
                                      "class": "ImageResourceLevel",
                                      "url": "media/panorama_C38FD600_CFAD_7DE9_41DE_12D7FD2889AD_0_HS_0_0.png"
                                     }
                                    ]
                                   },
                                   "class": "HotspotPanoramaOverlayImage",
                                   "yaw": -67.69,
                                   "hfov": 5.45,
                                   "pitch": -23.13
                                  }
                                 ]
                                },
                                {
                                 "maps": [
                                  {
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "height": 16,
                                      "width": 16,
                                      "class": "ImageResourceLevel",
                                      "url": "media/panorama_C38FD600_CFAD_7DE9_41DE_12D7FD2889AD_0_HS_1_0_0_map.gif"
                                     }
                                    ]
                                   },
                                   "hfov": 6.91,
                                   "class": "HotspotPanoramaOverlayMap",
                                   "yaw": -67.85,
                                   "pitch": -38.95
                                  }
                                 ],
                                 "rollOverDisplay": false,
                                 "enabledInCardboard": true,
                                 "class": "HotspotPanoramaOverlay",
                                 "areas": [
                                  {
                                   "mapColor": "#FF0000",
                                   "class": "HotspotPanoramaOverlayArea",
                                   "click": "this.startPanoramaWithCamera(this.panorama_C38BAB46_CFAD_6A69_41E9_631E1BE3FFAB, this.camera_E667F203_F2E0_B5D6_41E6_B3C77CA2000F); this.mainPlayList.set('selectedIndex', 2)"
                                  }
                                 ],
                                 "useHandCursor": true,
                                 "id": "overlay_DC0A4664_CFB5_3A29_41C1_759E22ECCB9E",
                                 "items": [
                                  {
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "height": 150,
                                      "width": 150,
                                      "class": "ImageResourceLevel",
                                      "url": "media/panorama_C38FD600_CFAD_7DE9_41DE_12D7FD2889AD_0_HS_1_0.png"
                                     }
                                    ]
                                   },
                                   "class": "HotspotPanoramaOverlayImage",
                                   "yaw": -67.85,
                                   "hfov": 6.91,
                                   "pitch": -38.95
                                  }
                                 ]
                                }
                               ]
                              }
                             ],
                             "label": "4",
                             "hfov": 360,
                             "hfovMax": 140
                            },
                            "class": "AdjacentPanorama",
                            "yaw": -176.63,
                            "distance": 1,
                            "backwardYaw": -67.69
                           },
                           {
                            "panorama": "this.panorama_C38F3FF0_CFAD_6A29_41D8_A9DC4E7E1521",
                            "class": "AdjacentPanorama",
                            "yaw": -85.3,
                            "distance": 1,
                            "backwardYaw": 64.94
                           },
                           {
                            "panorama": "this.panorama_C38BAB46_CFAD_6A69_41E9_631E1BE3FFAB",
                            "class": "AdjacentPanorama",
                            "yaw": -174.74,
                            "distance": 1,
                            "backwardYaw": 52.56
                           },
                           {
                            "panorama": "this.panorama_C140CB97_CC58_324C_41CC_EF501F0CF72D",
                            "class": "AdjacentPanorama",
                            "yaw": -82.18,
                            "distance": 1,
                            "backwardYaw": 88.2
                           }
                          ],
                          "hfovMin": 70,
                          "thumbnailUrl": "media/panorama_C2BD4D90_CFAD_EEE9_41E8_7D7C7C35C1B9_t.jpg",
                          "id": "panorama_C2BD4D90_CFAD_EEE9_41E8_7D7C7C35C1B9",
                          "pitch": 0,
                          "partial": false,
                          "class": "Panorama",
                          "frames": [
                           {
                            "sphere": {
                             "class": "ImageResource",
                             "levels": [
                              {
                               "height": 3040,
                               "width": 6080,
                               "class": "ImageResourceLevel",
                               "url": "media/panorama_C2BD4D90_CFAD_EEE9_41E8_7D7C7C35C1B9_hq.jpeg"
                              },
                              {
                               "height": 1608,
                               "width": 3217,
                               "class": "ImageResourceLevel",
                               "url": "media/panorama_C2BD4D90_CFAD_EEE9_41E8_7D7C7C35C1B9.jpeg"
                              }
                             ]
                            },
                            "thumbnailUrl": "media/panorama_C2BD4D90_CFAD_EEE9_41E8_7D7C7C35C1B9_t.jpg",
                            "class": "SphericPanoramaFrame",
                            "overlays": [
                             {
                              "maps": [
                               {
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 16,
                                   "width": 16,
                                   "class": "ImageResourceLevel",
                                   "url": "media/panorama_C2BD4D90_CFAD_EEE9_41E8_7D7C7C35C1B9_0_HS_0_0_0_map.gif"
                                  }
                                 ]
                                },
                                "hfov": 6.23,
                                "class": "HotspotPanoramaOverlayMap",
                                "yaw": -174.74,
                                "pitch": -45.5
                               }
                              ],
                              "rollOverDisplay": false,
                              "enabledInCardboard": true,
                              "class": "HotspotPanoramaOverlay",
                              "areas": [
                               {
                                "mapColor": "#FF0000",
                                "class": "HotspotPanoramaOverlayArea",
                                "click": "this.startPanoramaWithCamera(this.panorama_C38BAB46_CFAD_6A69_41E9_631E1BE3FFAB, this.camera_E6E8A0B3_F2E0_B636_41EA_20478C04B352); this.mainPlayList.set('selectedIndex', 2)"
                               }
                              ],
                              "useHandCursor": true,
                              "id": "overlay_DE3A36D4_CFBD_1A69_41C2_FABE81966292",
                              "items": [
                               {
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 150,
                                   "width": 150,
                                   "class": "ImageResourceLevel",
                                   "url": "media/panorama_C2BD4D90_CFAD_EEE9_41E8_7D7C7C35C1B9_0_HS_0_0.png"
                                  }
                                 ]
                                },
                                "class": "HotspotPanoramaOverlayImage",
                                "yaw": -174.74,
                                "hfov": 6.23,
                                "pitch": -45.5
                               }
                              ]
                             },
                             {
                              "maps": [
                               {
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 16,
                                   "width": 16,
                                   "class": "ImageResourceLevel",
                                   "url": "media/panorama_C2BD4D90_CFAD_EEE9_41E8_7D7C7C35C1B9_0_HS_1_0_0_map.gif"
                                  }
                                 ]
                                },
                                "hfov": 5.34,
                                "class": "HotspotPanoramaOverlayMap",
                                "yaw": -176.63,
                                "pitch": -25.59
                               }
                              ],
                              "rollOverDisplay": false,
                              "enabledInCardboard": true,
                              "class": "HotspotPanoramaOverlay",
                              "areas": [
                               {
                                "mapColor": "#FF0000",
                                "class": "HotspotPanoramaOverlayArea",
                                "click": "this.startPanoramaWithCamera(this.panorama_C38FD600_CFAD_7DE9_41DE_12D7FD2889AD, this.camera_E6FD3079_F2E0_B632_41E4_CCE01833BD3E); this.mainPlayList.set('selectedIndex', 3)"
                               }
                              ],
                              "useHandCursor": true,
                              "id": "overlay_DFFCB23C_CFBF_1A18_41D1_86B445CBBD76",
                              "items": [
                               {
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 100,
                                   "width": 100,
                                   "class": "ImageResourceLevel",
                                   "url": "media/panorama_C2BD4D90_CFAD_EEE9_41E8_7D7C7C35C1B9_0_HS_1_0.png"
                                  }
                                 ]
                                },
                                "class": "HotspotPanoramaOverlayImage",
                                "yaw": -176.63,
                                "hfov": 5.34,
                                "pitch": -25.59
                               }
                              ]
                             },
                             {
                              "maps": [
                               {
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 16,
                                   "width": 16,
                                   "class": "ImageResourceLevel",
                                   "url": "media/panorama_C2BD4D90_CFAD_EEE9_41E8_7D7C7C35C1B9_0_HS_2_0_0_map.gif"
                                  }
                                 ]
                                },
                                "hfov": 7.25,
                                "class": "HotspotPanoramaOverlayMap",
                                "yaw": -82.18,
                                "pitch": -35.26
                               }
                              ],
                              "rollOverDisplay": false,
                              "enabledInCardboard": true,
                              "class": "HotspotPanoramaOverlay",
                              "areas": [
                               {
                                "mapColor": "#FF0000",
                                "class": "HotspotPanoramaOverlayArea",
                                "click": "this.startPanoramaWithCamera(this.panorama_C140CB97_CC58_324C_41CC_EF501F0CF72D, this.camera_E6DEA0D7_F2E0_B67E_41E9_20D68AD81B29); this.mainPlayList.set('selectedIndex', 0)"
                               }
                              ],
                              "useHandCursor": true,
                              "id": "overlay_DEC9444C_CFBF_1E79_41D2_D523A5B450F8",
                              "items": [
                               {
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 150,
                                   "width": 150,
                                   "class": "ImageResourceLevel",
                                   "url": "media/panorama_C2BD4D90_CFAD_EEE9_41E8_7D7C7C35C1B9_0_HS_2_0.png"
                                  }
                                 ]
                                },
                                "class": "HotspotPanoramaOverlayImage",
                                "yaw": -82.18,
                                "hfov": 7.25,
                                "pitch": -35.26
                               }
                              ]
                             },
                             {
                              "maps": [
                               {
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 16,
                                   "width": 16,
                                   "class": "ImageResourceLevel",
                                   "url": "media/panorama_C2BD4D90_CFAD_EEE9_41E8_7D7C7C35C1B9_0_HS_3_0_0_map.gif"
                                  }
                                 ]
                                },
                                "hfov": 5.7,
                                "class": "HotspotPanoramaOverlayMap",
                                "yaw": -85.3,
                                "pitch": -15.76
                               }
                              ],
                              "rollOverDisplay": false,
                              "enabledInCardboard": true,
                              "class": "HotspotPanoramaOverlay",
                              "areas": [
                               {
                                "mapColor": "#FF0000",
                                "class": "HotspotPanoramaOverlayArea",
                                "click": "this.startPanoramaWithCamera(this.panorama_C38F3FF0_CFAD_6A29_41D8_A9DC4E7E1521, this.camera_E6E31094_F2E0_B6F2_41EA_8BB1A53AEC68); this.mainPlayList.set('selectedIndex', 4); this.mainPlayList.set('selectedIndex', 4)"
                               }
                              ],
                              "useHandCursor": true,
                              "id": "overlay_DF219E0F_CFBF_6DF7_41E4_FABEE6F4011B",
                              "items": [
                               {
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 100,
                                   "width": 100,
                                   "class": "ImageResourceLevel",
                                   "url": "media/panorama_C2BD4D90_CFAD_EEE9_41E8_7D7C7C35C1B9_0_HS_3_0.png"
                                  }
                                 ]
                                },
                                "class": "HotspotPanoramaOverlayImage",
                                "yaw": -85.3,
                                "hfov": 5.7,
                                "pitch": -15.76
                               }
                              ]
                             },
                             {
                              "maps": [
                               {
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 31,
                                   "width": 16,
                                   "class": "ImageResourceLevel",
                                   "url": "media/panorama_C2BD4D90_CFAD_EEE9_41E8_7D7C7C35C1B9_0_HS_6_0_0_map.gif"
                                  }
                                 ]
                                },
                                "hfov": 6.81,
                                "class": "HotspotPanoramaOverlayMap",
                                "yaw": -38.27,
                                "pitch": -1.32
                               }
                              ],
                              "rollOverDisplay": true,
                              "enabledInCardboard": true,
                              "class": "HotspotPanoramaOverlay",
                              "areas": [
                               {
                                "class": "HotspotPanoramaOverlayArea",
                                "mapColor": "#FF0000"
                               }
                              ],
                              "useHandCursor": true,
                              "id": "overlay_C9FD7A85_D17C_4255_41D2_9546F8E02926",
                              "items": [
                               {
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 229,
                                   "width": 115,
                                   "class": "ImageResourceLevel",
                                   "url": "media/panorama_C2BD4D90_CFAD_EEE9_41E8_7D7C7C35C1B9_0_HS_6_0.png"
                                  }
                                 ]
                                },
                                "class": "HotspotPanoramaOverlayImage",
                                "yaw": -38.27,
                                "hfov": 6.81,
                                "pitch": -1.32
                               }
                              ]
                             },
                             {
                              "maps": [
                               {
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 119,
                                   "width": 63,
                                   "class": "ImageResourceLevel",
                                   "url": "media/panorama_C2BD4D90_CFAD_EEE9_41E8_7D7C7C35C1B9_0_HS_4_1_0_map.gif"
                                  }
                                 ]
                                },
                                "hfov": 7.49,
                                "class": "HotspotPanoramaOverlayMap",
                                "yaw": -38.52,
                                "pitch": -1.22
                               }
                              ],
                              "rollOverDisplay": false,
                              "enabledInCardboard": true,
                              "class": "HotspotPanoramaOverlay",
                              "areas": [
                               {
                                "toolTip": "Go to\u000aBEDROOM 2",
                                "class": "HotspotPanoramaOverlayArea",
                                "click": "this.mainPlayList.set('selectedIndex', 14)",
                                "displayTooltipInTouchScreens": true,
                                "mapColor": "#FF0000"
                               }
                              ],
                              "useHandCursor": true,
                              "id": "overlay_DE9544AD_D124_4655_41D6_0BB57AFD30A6",
                              "items": [
                               {
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 238,
                                   "width": 126,
                                   "class": "ImageResourceLevel",
                                   "url": "media/panorama_C2BD4D90_CFAD_EEE9_41E8_7D7C7C35C1B9_0_HS_4_0.png"
                                  }
                                 ]
                                },
                                "class": "HotspotPanoramaOverlayImage",
                                "yaw": -38.52,
                                "hfov": 7.49,
                                "roll": 0,
                                "pitch": -1.22
                               }
                              ]
                             }
                            ]
                           }
                          ],
                          "label": "2",
                          "hfov": 360,
                          "hfovMax": 140
                         },
                         "class": "AdjacentPanorama",
                         "yaw": 64.94,
                         "distance": 1,
                         "backwardYaw": -85.3
                        }
                       ],
                       "hfovMin": 70,
                       "thumbnailUrl": "media/panorama_C38F3FF0_CFAD_6A29_41D8_A9DC4E7E1521_t.jpg",
                       "id": "panorama_C38F3FF0_CFAD_6A29_41D8_A9DC4E7E1521",
                       "pitch": 0,
                       "partial": false,
                       "class": "Panorama",
                       "frames": [
                        {
                         "sphere": {
                          "class": "ImageResource",
                          "levels": [
                           {
                            "height": 3040,
                            "width": 6080,
                            "class": "ImageResourceLevel",
                            "url": "media/panorama_C38F3FF0_CFAD_6A29_41D8_A9DC4E7E1521_hq.jpeg"
                           },
                           {
                            "height": 1608,
                            "width": 3217,
                            "class": "ImageResourceLevel",
                            "url": "media/panorama_C38F3FF0_CFAD_6A29_41D8_A9DC4E7E1521.jpeg"
                           }
                          ]
                         },
                         "thumbnailUrl": "media/panorama_C38F3FF0_CFAD_6A29_41D8_A9DC4E7E1521_t.jpg",
                         "class": "SphericPanoramaFrame",
                         "overlays": [
                          {
                           "maps": [
                            {
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 16,
                                "width": 16,
                                "class": "ImageResourceLevel",
                                "url": "media/panorama_C38F3FF0_CFAD_6A29_41D8_A9DC4E7E1521_0_HS_0_0_0_map.gif"
                               }
                              ]
                             },
                             "hfov": 5.51,
                             "class": "HotspotPanoramaOverlayMap",
                             "yaw": -29.19,
                             "pitch": -21.49
                            }
                           ],
                           "rollOverDisplay": false,
                           "enabledInCardboard": true,
                           "class": "HotspotPanoramaOverlay",
                           "areas": [
                            {
                             "mapColor": "#FF0000",
                             "class": "HotspotPanoramaOverlayArea",
                             "click": "this.startPanoramaWithCamera(this.panorama_C38F9A09_CFAD_15FB_41D2_530F2E7196E8, this.camera_E62B82A9_F2E0_BAD2_41CE_F7CA7C8621EA); this.mainPlayList.set('selectedIndex', 5)"
                            }
                           ],
                           "useHandCursor": true,
                           "id": "overlay_C383DE28_CFE8_40D3_41C6_830B8471CDBF",
                           "items": [
                            {
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 100,
                                "width": 100,
                                "class": "ImageResourceLevel",
                                "url": "media/panorama_C38F3FF0_CFAD_6A29_41D8_A9DC4E7E1521_0_HS_0_0.png"
                               }
                              ]
                             },
                             "class": "HotspotPanoramaOverlayImage",
                             "yaw": -29.19,
                             "hfov": 5.51,
                             "pitch": -21.49
                            }
                           ]
                          },
                          {
                           "maps": [
                            {
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 16,
                                "width": 16,
                                "class": "ImageResourceLevel",
                                "url": "media/panorama_C38F3FF0_CFAD_6A29_41D8_A9DC4E7E1521_0_HS_1_0_0_map.gif"
                               }
                              ]
                             },
                             "hfov": 8.07,
                             "class": "HotspotPanoramaOverlayMap",
                             "yaw": 66.9,
                             "pitch": -24.61
                            }
                           ],
                           "rollOverDisplay": false,
                           "enabledInCardboard": true,
                           "class": "HotspotPanoramaOverlay",
                           "areas": [
                            {
                             "mapColor": "#FF0000",
                             "class": "HotspotPanoramaOverlayArea",
                             "click": "this.startPanoramaWithCamera(this.panorama_C140CB97_CC58_324C_41CC_EF501F0CF72D, this.camera_E627A298_F2E0_BAF2_41D3_DC6EC8D57362); this.mainPlayList.set('selectedIndex', 0)"
                            }
                           ],
                           "useHandCursor": true,
                           "id": "overlay_C378EC99_CFE8_41F2_41D6_0F9CDFF2B171",
                           "items": [
                            {
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 150,
                                "width": 150,
                                "class": "ImageResourceLevel",
                                "url": "media/panorama_C38F3FF0_CFAD_6A29_41D8_A9DC4E7E1521_0_HS_1_0.png"
                               }
                              ]
                             },
                             "class": "HotspotPanoramaOverlayImage",
                             "yaw": 66.9,
                             "hfov": 8.07,
                             "pitch": -24.61
                            }
                           ]
                          },
                          {
                           "maps": [
                            {
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 16,
                                "width": 16,
                                "class": "ImageResourceLevel",
                                "url": "media/panorama_C38F3FF0_CFAD_6A29_41D8_A9DC4E7E1521_0_HS_2_0_0_map.gif"
                               }
                              ]
                             },
                             "hfov": 3.99,
                             "class": "HotspotPanoramaOverlayMap",
                             "yaw": 64.94,
                             "pitch": -15.69
                            }
                           ],
                           "rollOverDisplay": false,
                           "enabledInCardboard": true,
                           "class": "HotspotPanoramaOverlay",
                           "areas": [
                            {
                             "mapColor": "#FF0000",
                             "class": "HotspotPanoramaOverlayArea",
                             "click": "this.startPanoramaWithCamera(this.panorama_C2BD4D90_CFAD_EEE9_41E8_7D7C7C35C1B9, this.camera_E601D2CB_F2E0_BA56_41DD_84CF5AA8064E); this.mainPlayList.set('selectedIndex', 1)"
                            }
                           ],
                           "useHandCursor": true,
                           "id": "overlay_C3720BB8_CFE8_C733_419D_CC0455A28ECC",
                           "items": [
                            {
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 70,
                                "width": 70,
                                "class": "ImageResourceLevel",
                                "url": "media/panorama_C38F3FF0_CFAD_6A29_41D8_A9DC4E7E1521_0_HS_2_0.png"
                               }
                              ]
                             },
                             "class": "HotspotPanoramaOverlayImage",
                             "yaw": 64.94,
                             "hfov": 3.99,
                             "pitch": -15.69
                            }
                           ]
                          },
                          {
                           "maps": [
                            {
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 32,
                                "width": 16,
                                "class": "ImageResourceLevel",
                                "url": "media/panorama_C38F3FF0_CFAD_6A29_41D8_A9DC4E7E1521_0_HS_7_0_0_map.gif"
                               }
                              ]
                             },
                             "hfov": 11.2,
                             "class": "HotspotPanoramaOverlayMap",
                             "yaw": -18.31,
                             "pitch": -4.11
                            }
                           ],
                           "rollOverDisplay": true,
                           "enabledInCardboard": true,
                           "class": "HotspotPanoramaOverlay",
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "mapColor": "#FF0000"
                            }
                           ],
                           "useHandCursor": true,
                           "id": "overlay_C6DF847A_D165_C6BF_41D6_BFF3EE544115",
                           "items": [
                            {
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 382,
                                "width": 189,
                                "class": "ImageResourceLevel",
                                "url": "media/panorama_C38F3FF0_CFAD_6A29_41D8_A9DC4E7E1521_0_HS_7_0.png"
                               }
                              ]
                             },
                             "class": "HotspotPanoramaOverlayImage",
                             "yaw": -18.31,
                             "hfov": 11.2,
                             "pitch": -4.11
                            }
                           ]
                          },
                          {
                           "maps": [
                            {
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 27,
                                "width": 16,
                                "class": "ImageResourceLevel",
                                "url": "media/panorama_C38F3FF0_CFAD_6A29_41D8_A9DC4E7E1521_0_HS_8_0_0_map.gif"
                               }
                              ]
                             },
                             "hfov": 8.15,
                             "class": "HotspotPanoramaOverlayMap",
                             "yaw": 1.79,
                             "pitch": -1.2
                            }
                           ],
                           "rollOverDisplay": true,
                           "enabledInCardboard": true,
                           "class": "HotspotPanoramaOverlay",
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "mapColor": "#FF0000"
                            }
                           ],
                           "useHandCursor": true,
                           "id": "overlay_C6313471_D164_46CD_41E2_0E629DC72468",
                           "items": [
                            {
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 238,
                                "width": 137,
                                "class": "ImageResourceLevel",
                                "url": "media/panorama_C38F3FF0_CFAD_6A29_41D8_A9DC4E7E1521_0_HS_8_0.png"
                               }
                              ]
                             },
                             "class": "HotspotPanoramaOverlayImage",
                             "yaw": 1.79,
                             "hfov": 8.15,
                             "pitch": -1.2
                            }
                           ]
                          },
                          {
                           "maps": [
                            {
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 133,
                                "width": 16,
                                "class": "ImageResourceLevel",
                                "url": "media/panorama_C38F3FF0_CFAD_6A29_41D8_A9DC4E7E1521_0_HS_9_0_0_map.gif"
                               }
                              ]
                             },
                             "hfov": 2.54,
                             "class": "HotspotPanoramaOverlayMap",
                             "yaw": 69.76,
                             "pitch": -5.03
                            }
                           ],
                           "rollOverDisplay": true,
                           "enabledInCardboard": true,
                           "class": "HotspotPanoramaOverlay",
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "mapColor": "#FF0000"
                            }
                           ],
                           "useHandCursor": true,
                           "id": "overlay_C61AE602_D164_424E_41D8_945FA2735115",
                           "items": [
                            {
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 359,
                                "width": 43,
                                "class": "ImageResourceLevel",
                                "url": "media/panorama_C38F3FF0_CFAD_6A29_41D8_A9DC4E7E1521_0_HS_9_0.png"
                               }
                              ]
                             },
                             "class": "HotspotPanoramaOverlayImage",
                             "yaw": 69.76,
                             "hfov": 2.54,
                             "pitch": -5.03
                            }
                           ]
                          },
                          {
                           "maps": [
                            {
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 126,
                                "width": 79,
                                "class": "ImageResourceLevel",
                                "url": "media/panorama_C38F3FF0_CFAD_6A29_41D8_A9DC4E7E1521_0_HS_3_1_0_map.gif"
                               }
                              ]
                             },
                             "hfov": 9.39,
                             "class": "HotspotPanoramaOverlayMap",
                             "yaw": 1.57,
                             "pitch": -1.04
                            }
                           ],
                           "rollOverDisplay": false,
                           "enabledInCardboard": true,
                           "class": "HotspotPanoramaOverlay",
                           "areas": [
                            {
                             "toolTip": "Go to\u000aBEDROOM 1",
                             "class": "HotspotPanoramaOverlayArea",
                             "click": "this.mainPlayList.set('selectedIndex', 9)",
                             "displayTooltipInTouchScreens": true,
                             "mapColor": "#FF0000"
                            }
                           ],
                           "useHandCursor": true,
                           "id": "overlay_C2BF23D4_D11D_C1CB_41CE_E7FFB693623D",
                           "items": [
                            {
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 252,
                                "width": 159,
                                "class": "ImageResourceLevel",
                                "url": "media/panorama_C38F3FF0_CFAD_6A29_41D8_A9DC4E7E1521_0_HS_3_0.png"
                               }
                              ]
                             },
                             "class": "HotspotPanoramaOverlayImage",
                             "yaw": 1.57,
                             "hfov": 9.39,
                             "roll": 0,
                             "pitch": -1.04
                            }
                           ]
                          },
                          {
                           "maps": [
                            {
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 200,
                                "width": 105,
                                "class": "ImageResourceLevel",
                                "url": "media/panorama_C38F3FF0_CFAD_6A29_41D8_A9DC4E7E1521_0_HS_4_1_0_map.gif"
                               }
                              ]
                             },
                             "hfov": 12.73,
                             "class": "HotspotPanoramaOverlayMap",
                             "yaw": -18.31,
                             "pitch": -4.25
                            }
                           ],
                           "rollOverDisplay": false,
                           "enabledInCardboard": true,
                           "class": "HotspotPanoramaOverlay",
                           "areas": [
                            {
                             "toolTip": "Go to\u000aBEDROOM 2",
                             "class": "HotspotPanoramaOverlayArea",
                             "click": "this.startPanoramaWithCamera(this.panorama_C38E83E8_CFAB_1A39_41E9_D67B70C790DA, this.camera_E61D62B8_F2E0_BA32_41EB_16A59C959826); this.mainPlayList.set('selectedIndex', 14)",
                             "displayTooltipInTouchScreens": true,
                             "mapColor": "#FF0000"
                            }
                           ],
                           "useHandCursor": true,
                           "id": "overlay_C561240A_D11C_C65F_41E5_683FD691F7D1",
                           "items": [
                            {
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 406,
                                "width": 215,
                                "class": "ImageResourceLevel",
                                "url": "media/panorama_C38F3FF0_CFAD_6A29_41D8_A9DC4E7E1521_0_HS_4_0.png"
                               }
                              ]
                             },
                             "class": "HotspotPanoramaOverlayImage",
                             "yaw": -18.31,
                             "hfov": 12.73,
                             "roll": 0,
                             "pitch": -4.25
                            }
                           ]
                          },
                          {
                           "maps": [
                            {
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 200,
                                "width": 13,
                                "class": "ImageResourceLevel",
                                "url": "media/panorama_C38F3FF0_CFAD_6A29_41D8_A9DC4E7E1521_0_HS_5_1_0_map.gif"
                               }
                              ]
                             },
                             "hfov": 1.72,
                             "class": "HotspotPanoramaOverlayMap",
                             "yaw": 69.69,
                             "pitch": -5.51
                            }
                           ],
                           "rollOverDisplay": false,
                           "enabledInCardboard": true,
                           "class": "HotspotPanoramaOverlay",
                           "areas": [
                            {
                             "toolTip": "Go to\u000aKITCHEN",
                             "class": "HotspotPanoramaOverlayArea",
                             "click": "this.mainPlayList.set('selectedIndex', 2)",
                             "displayTooltipInTouchScreens": true,
                             "mapColor": "#FF0000"
                            }
                           ],
                           "useHandCursor": true,
                           "id": "overlay_C453A784_D164_C24A_41E0_8ABB44A0E2B2",
                           "items": [
                            {
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 403,
                                "width": 29,
                                "class": "ImageResourceLevel",
                                "url": "media/panorama_C38F3FF0_CFAD_6A29_41D8_A9DC4E7E1521_0_HS_5_0.png"
                               }
                              ]
                             },
                             "class": "HotspotPanoramaOverlayImage",
                             "yaw": 69.69,
                             "hfov": 1.72,
                             "roll": 0,
                             "pitch": -5.51
                            }
                           ]
                          }
                         ]
                        }
                       ],
                       "label": "5",
                       "hfov": 360,
                       "hfovMax": 140
                      },
                      "class": "AdjacentPanorama",
                      "yaw": -142.39,
                      "distance": 1,
                      "backwardYaw": -29.19
                     },
                     {
                      "panorama": "this.panorama_C38E83E8_CFAB_1A39_41E9_D67B70C790DA",
                      "class": "AdjacentPanorama",
                      "yaw": 75.69,
                      "distance": 1,
                      "backwardYaw": -166.89
                     }
                    ],
                    "hfovMin": 70,
                    "thumbnailUrl": "media/panorama_C38F9A09_CFAD_15FB_41D2_530F2E7196E8_t.jpg",
                    "id": "panorama_C38F9A09_CFAD_15FB_41D2_530F2E7196E8",
                    "pitch": 0,
                    "partial": false,
                    "class": "Panorama",
                    "frames": [
                     {
                      "sphere": {
                       "class": "ImageResource",
                       "levels": [
                        {
                         "height": 3040,
                         "width": 6080,
                         "class": "ImageResourceLevel",
                         "url": "media/panorama_C38F9A09_CFAD_15FB_41D2_530F2E7196E8_hq.jpeg"
                        },
                        {
                         "height": 1608,
                         "width": 3217,
                         "class": "ImageResourceLevel",
                         "url": "media/panorama_C38F9A09_CFAD_15FB_41D2_530F2E7196E8.jpeg"
                        }
                       ]
                      },
                      "thumbnailUrl": "media/panorama_C38F9A09_CFAD_15FB_41D2_530F2E7196E8_t.jpg",
                      "class": "SphericPanoramaFrame",
                      "overlays": [
                       {
                        "maps": [
                         {
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 75,
                             "width": 75,
                             "class": "ImageResourceLevel",
                             "url": "media/panorama_C38F9A09_CFAD_15FB_41D2_530F2E7196E8_0_HS_0_0_0_map.gif"
                            }
                           ]
                          },
                          "hfov": 8.23,
                          "class": "HotspotPanoramaOverlayMap",
                          "yaw": -142.39,
                          "pitch": -22.15
                         }
                        ],
                        "rollOverDisplay": false,
                        "enabledInCardboard": true,
                        "class": "HotspotPanoramaOverlay",
                        "areas": [
                         {
                          "mapColor": "#FF0000",
                          "class": "HotspotPanoramaOverlayArea",
                          "click": "this.startPanoramaWithCamera(this.panorama_C38F3FF0_CFAD_6A29_41D8_A9DC4E7E1521, this.camera_E18D2F0C_F2E0_ABD2_41D0_2EAF180BA394); this.mainPlayList.set('selectedIndex', 4)"
                         }
                        ],
                        "useHandCursor": true,
                        "id": "overlay_DD935026_D034_D2A2_41DA_84878171C936",
                        "items": [
                         {
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 150,
                             "width": 150,
                             "class": "ImageResourceLevel",
                             "url": "media/panorama_C38F9A09_CFAD_15FB_41D2_530F2E7196E8_0_HS_0_0.png"
                            }
                           ]
                          },
                          "class": "HotspotPanoramaOverlayImage",
                          "yaw": -142.39,
                          "hfov": 8.23,
                          "pitch": -22.15
                         }
                        ]
                       },
                       {
                        "maps": [
                         {
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 75,
                             "width": 75,
                             "class": "ImageResourceLevel",
                             "url": "media/panorama_C38F9A09_CFAD_15FB_41D2_530F2E7196E8_0_HS_1_0_0_map.gif"
                            }
                           ]
                          },
                          "hfov": 6.18,
                          "class": "HotspotPanoramaOverlayMap",
                          "yaw": 87.79,
                          "pitch": -45.91
                         }
                        ],
                        "rollOverDisplay": false,
                        "enabledInCardboard": true,
                        "class": "HotspotPanoramaOverlay",
                        "areas": [
                         {
                          "mapColor": "#FF0000",
                          "class": "HotspotPanoramaOverlayArea",
                          "click": "this.startPanoramaWithCamera(this.panorama_C38F43B8_CFAD_3A19_41E9_7D6FC4197EA0, this.camera_E1846EFC_F2E0_AA32_41E7_4EAD504353BE); this.mainPlayList.set('selectedIndex', 6)"
                         }
                        ],
                        "useHandCursor": true,
                        "id": "overlay_DEA9DABC_D034_37A7_41D1_3DBAA699E7C9",
                        "items": [
                         {
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 150,
                             "width": 150,
                             "class": "ImageResourceLevel",
                             "url": "media/panorama_C38F9A09_CFAD_15FB_41D2_530F2E7196E8_0_HS_1_0.png"
                            }
                           ]
                          },
                          "class": "HotspotPanoramaOverlayImage",
                          "yaw": 87.79,
                          "hfov": 6.18,
                          "pitch": -45.91
                         }
                        ]
                       },
                       {
                        "maps": [
                         {
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 50,
                             "width": 50,
                             "class": "ImageResourceLevel",
                             "url": "media/panorama_C38F9A09_CFAD_15FB_41D2_530F2E7196E8_0_HS_2_0_0_map.gif"
                            }
                           ]
                          },
                          "hfov": 5.32,
                          "class": "HotspotPanoramaOverlayMap",
                          "yaw": 111.29,
                          "pitch": -26
                         }
                        ],
                        "rollOverDisplay": false,
                        "enabledInCardboard": true,
                        "class": "HotspotPanoramaOverlay",
                        "areas": [
                         {
                          "mapColor": "#FF0000",
                          "class": "HotspotPanoramaOverlayArea",
                          "click": "this.mainPlayList.set('selectedIndex', 8)"
                         }
                        ],
                        "useHandCursor": true,
                        "id": "overlay_DE360020_D034_525F_419D_00B1320DD13E",
                        "items": [
                         {
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 100,
                             "width": 100,
                             "class": "ImageResourceLevel",
                             "url": "media/panorama_C38F9A09_CFAD_15FB_41D2_530F2E7196E8_0_HS_2_0.png"
                            }
                           ]
                          },
                          "class": "HotspotPanoramaOverlayImage",
                          "yaw": 111.29,
                          "hfov": 5.32,
                          "pitch": -26
                         }
                        ]
                       },
                       {
                        "maps": [
                         {
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 39,
                             "width": 16,
                             "class": "ImageResourceLevel",
                             "url": "media/panorama_C38F9A09_CFAD_15FB_41D2_530F2E7196E8_0_HS_6_0_0_map.gif"
                            }
                           ]
                          },
                          "hfov": 22.93,
                          "class": "HotspotPanoramaOverlayMap",
                          "yaw": 75.02,
                          "pitch": -10.38
                         }
                        ],
                        "rollOverDisplay": true,
                        "enabledInCardboard": true,
                        "class": "HotspotPanoramaOverlay",
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "mapColor": "#FF0000"
                         }
                        ],
                        "useHandCursor": true,
                        "id": "overlay_C6D7C1C3_D164_C1CD_41CF_A3F69BC167BC",
                        "items": [
                         {
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 959,
                             "width": 393,
                             "class": "ImageResourceLevel",
                             "url": "media/panorama_C38F9A09_CFAD_15FB_41D2_530F2E7196E8_0_HS_6_0.png"
                            }
                           ]
                          },
                          "class": "HotspotPanoramaOverlayImage",
                          "yaw": 75.02,
                          "hfov": 22.93,
                          "pitch": -10.38
                         }
                        ]
                       },
                       {
                        "maps": [
                         {
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 67,
                             "width": 16,
                             "class": "ImageResourceLevel",
                             "url": "media/panorama_C38F9A09_CFAD_15FB_41D2_530F2E7196E8_0_HS_7_0_0_map.gif"
                            }
                           ]
                          },
                          "hfov": 7.53,
                          "class": "HotspotPanoramaOverlayMap",
                          "yaw": 106.46,
                          "pitch": -6.55
                         }
                        ],
                        "rollOverDisplay": true,
                        "enabledInCardboard": true,
                        "class": "HotspotPanoramaOverlay",
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "mapColor": "#FF0000"
                         }
                        ],
                        "useHandCursor": true,
                        "id": "overlay_C63EBDD5_D164_C1CA_41E2_C74B704783BD",
                        "items": [
                         {
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 536,
                             "width": 128,
                             "class": "ImageResourceLevel",
                             "url": "media/panorama_C38F9A09_CFAD_15FB_41D2_530F2E7196E8_0_HS_7_0.png"
                            }
                           ]
                          },
                          "class": "HotspotPanoramaOverlayImage",
                          "yaw": 106.46,
                          "hfov": 7.53,
                          "pitch": -6.55
                         }
                        ]
                       },
                       {
                        "maps": [
                         {
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 61,
                             "width": 16,
                             "class": "ImageResourceLevel",
                             "url": "media/panorama_C38F9A09_CFAD_15FB_41D2_530F2E7196E8_0_HS_8_0_0_map.gif"
                            }
                           ]
                          },
                          "hfov": 4.21,
                          "class": "HotspotPanoramaOverlayMap",
                          "yaw": 170.21,
                          "pitch": -4.14
                         }
                        ],
                        "rollOverDisplay": true,
                        "enabledInCardboard": true,
                        "class": "HotspotPanoramaOverlay",
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "mapColor": "#FF0000"
                         }
                        ],
                        "useHandCursor": true,
                        "id": "overlay_C91E4E56_D164_42F7_41E8_9602320F83D2",
                        "items": [
                         {
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 275,
                             "width": 71,
                             "class": "ImageResourceLevel",
                             "url": "media/panorama_C38F9A09_CFAD_15FB_41D2_530F2E7196E8_0_HS_8_0.png"
                            }
                           ]
                          },
                          "class": "HotspotPanoramaOverlayImage",
                          "yaw": 170.21,
                          "hfov": 4.21,
                          "pitch": -4.14
                         }
                        ]
                       },
                       {
                        "maps": [
                         {
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 200,
                             "width": 80,
                             "class": "ImageResourceLevel",
                             "url": "media/panorama_C38F9A09_CFAD_15FB_41D2_530F2E7196E8_0_HS_3_1_0_map.gif"
                            }
                           ]
                          },
                          "hfov": 33.29,
                          "class": "HotspotPanoramaOverlayMap",
                          "yaw": 75.69,
                          "pitch": -12.3
                         }
                        ],
                        "rollOverDisplay": false,
                        "enabledInCardboard": true,
                        "class": "HotspotPanoramaOverlay",
                        "areas": [
                         {
                          "toolTip": "Go to\u000aBEDROOM 2",
                          "class": "HotspotPanoramaOverlayArea",
                          "click": "this.startPanoramaWithCamera(this.panorama_C38E83E8_CFAB_1A39_41E9_D67B70C790DA, this.camera_E1889F1C_F2E0_ABF2_41E2_7192CA9A6E9E); this.mainPlayList.set('selectedIndex', 14)",
                          "displayTooltipInTouchScreens": true,
                          "mapColor": "#FF0000"
                         }
                        ],
                        "useHandCursor": true,
                        "id": "overlay_C52B2652_D164_42CF_41E8_4E50B7401892",
                        "items": [
                         {
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 1431,
                             "width": 578,
                             "class": "ImageResourceLevel",
                             "url": "media/panorama_C38F9A09_CFAD_15FB_41D2_530F2E7196E8_0_HS_3_0.png"
                            }
                           ]
                          },
                          "class": "HotspotPanoramaOverlayImage",
                          "yaw": 75.69,
                          "hfov": 33.29,
                          "roll": 0,
                          "pitch": -12.3
                         }
                        ]
                       },
                       {
                        "maps": [
                         {
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 200,
                             "width": 37,
                             "class": "ImageResourceLevel",
                             "url": "media/panorama_C38F9A09_CFAD_15FB_41D2_530F2E7196E8_0_HS_4_1_0_map.gif"
                            }
                           ]
                          },
                          "hfov": 7.67,
                          "class": "HotspotPanoramaOverlayMap",
                          "yaw": 106,
                          "pitch": -8.85
                         }
                        ],
                        "rollOverDisplay": false,
                        "enabledInCardboard": true,
                        "class": "HotspotPanoramaOverlay",
                        "areas": [
                         {
                          "toolTip": "Go to\u000aBEDROOM 1",
                          "class": "HotspotPanoramaOverlayArea",
                          "click": "this.mainPlayList.set('selectedIndex', 9)",
                          "displayTooltipInTouchScreens": true,
                          "mapColor": "#FF0000"
                         }
                        ],
                        "useHandCursor": true,
                        "id": "overlay_C5F1A84A_D164_CEDF_4163_F9372869D01D",
                        "items": [
                         {
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 676,
                             "width": 129,
                             "class": "ImageResourceLevel",
                             "url": "media/panorama_C38F9A09_CFAD_15FB_41D2_530F2E7196E8_0_HS_4_0.png"
                            }
                           ]
                          },
                          "class": "HotspotPanoramaOverlayImage",
                          "yaw": 106,
                          "hfov": 7.67,
                          "roll": 0,
                          "pitch": -8.85
                         }
                        ]
                       },
                       {
                        "maps": [
                         {
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 147,
                             "width": 37,
                             "class": "ImageResourceLevel",
                             "url": "media/panorama_C38F9A09_CFAD_15FB_41D2_530F2E7196E8_0_HS_5_1_0_map.gif"
                            }
                           ]
                          },
                          "hfov": 4.41,
                          "class": "HotspotPanoramaOverlayMap",
                          "yaw": 170.13,
                          "pitch": -4.52
                         }
                        ],
                        "rollOverDisplay": false,
                        "enabledInCardboard": true,
                        "class": "HotspotPanoramaOverlay",
                        "areas": [
                         {
                          "toolTip": "Go to\u000aKITCHEN",
                          "class": "HotspotPanoramaOverlayArea",
                          "click": "this.mainPlayList.set('selectedIndex', 2)",
                          "displayTooltipInTouchScreens": true,
                          "mapColor": "#FF0000"
                         }
                        ],
                        "useHandCursor": true,
                        "id": "overlay_C453BEDB_D164_C3FD_419F_543A4E868B1C",
                        "items": [
                         {
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 295,
                             "width": 74,
                             "class": "ImageResourceLevel",
                             "url": "media/panorama_C38F9A09_CFAD_15FB_41D2_530F2E7196E8_0_HS_5_0.png"
                            }
                           ]
                          },
                          "class": "HotspotPanoramaOverlayImage",
                          "yaw": 170.13,
                          "hfov": 4.41,
                          "roll": 0,
                          "pitch": -4.52
                         }
                        ]
                       }
                      ]
                     }
                    ],
                    "label": "6",
                    "hfov": 360,
                    "hfovMax": 140
                   },
                   "class": "AdjacentPanorama",
                   "yaw": 48.47,
                   "distance": 1,
                   "backwardYaw": 87.79
                  },
                  {
                   "panorama": "this.panorama_C38FBE07_CFAD_2DF7_41E3_7369EEF66215",
                   "class": "AdjacentPanorama",
                   "yaw": -89.14,
                   "distance": 1,
                   "backwardYaw": 84.1
                  },
                  {
                   "panorama": "this.panorama_C38E83E8_CFAB_1A39_41E9_D67B70C790DA",
                   "class": "AdjacentPanorama",
                   "yaw": 170.93,
                   "distance": 1,
                   "backwardYaw": 165.6
                  }
                 ],
                 "hfovMin": 70,
                 "thumbnailUrl": "media/panorama_C38F43B8_CFAD_3A19_41E9_7D6FC4197EA0_t.jpg",
                 "id": "panorama_C38F43B8_CFAD_3A19_41E9_7D6FC4197EA0",
                 "pitch": 0,
                 "partial": false,
                 "class": "Panorama",
                 "frames": [
                  {
                   "sphere": {
                    "class": "ImageResource",
                    "levels": [
                     {
                      "height": 3040,
                      "width": 6080,
                      "class": "ImageResourceLevel",
                      "url": "media/panorama_C38F43B8_CFAD_3A19_41E9_7D6FC4197EA0_hq.jpeg"
                     },
                     {
                      "height": 1608,
                      "width": 3217,
                      "class": "ImageResourceLevel",
                      "url": "media/panorama_C38F43B8_CFAD_3A19_41E9_7D6FC4197EA0.jpeg"
                     }
                    ]
                   },
                   "thumbnailUrl": "media/panorama_C38F43B8_CFAD_3A19_41E9_7D6FC4197EA0_t.jpg",
                   "class": "SphericPanoramaFrame",
                   "overlays": [
                    {
                     "maps": [
                      {
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 75,
                          "width": 75,
                          "class": "ImageResourceLevel",
                          "url": "media/panorama_C38F43B8_CFAD_3A19_41E9_7D6FC4197EA0_0_HS_0_0_0_map.gif"
                         }
                        ]
                       },
                       "hfov": 4.46,
                       "class": "HotspotPanoramaOverlayMap",
                       "yaw": 170.93,
                       "pitch": -59.83
                      }
                     ],
                     "rollOverDisplay": false,
                     "enabledInCardboard": true,
                     "class": "HotspotPanoramaOverlay",
                     "areas": [
                      {
                       "mapColor": "#FF0000",
                       "class": "HotspotPanoramaOverlayArea",
                       "click": "this.startPanoramaWithCamera(this.panorama_C38E83E8_CFAB_1A39_41E9_D67B70C790DA, this.camera_E640025A_F2E0_BA76_41ED_8D4F56331680); this.mainPlayList.set('selectedIndex', 14)"
                      }
                     ],
                     "useHandCursor": true,
                     "id": "overlay_DFB37337_D034_56A2_41E1_69C0F7056AE6",
                     "items": [
                      {
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 150,
                          "width": 150,
                          "class": "ImageResourceLevel",
                          "url": "media/panorama_C38F43B8_CFAD_3A19_41E9_7D6FC4197EA0_0_HS_0_0.png"
                         }
                        ]
                       },
                       "class": "HotspotPanoramaOverlayImage",
                       "yaw": 170.93,
                       "hfov": 4.46,
                       "pitch": -59.83
                      }
                     ]
                    },
                    {
                     "maps": [
                      {
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 75,
                          "width": 75,
                          "class": "ImageResourceLevel",
                          "url": "media/panorama_C38F43B8_CFAD_3A19_41E9_7D6FC4197EA0_0_HS_1_0_0_map.gif"
                         }
                        ]
                       },
                       "hfov": 6.04,
                       "class": "HotspotPanoramaOverlayMap",
                       "yaw": 48.47,
                       "pitch": -47.14
                      }
                     ],
                     "rollOverDisplay": false,
                     "enabledInCardboard": true,
                     "class": "HotspotPanoramaOverlay",
                     "areas": [
                      {
                       "mapColor": "#FF0000",
                       "class": "HotspotPanoramaOverlayArea",
                       "click": "this.startPanoramaWithCamera(this.panorama_C38F9A09_CFAD_15FB_41D2_530F2E7196E8, this.camera_E669721C_F2E0_B5F2_41EB_4816730EFC91); this.mainPlayList.set('selectedIndex', 5)"
                      }
                     ],
                     "useHandCursor": true,
                     "id": "overlay_DEBA24AA_D04B_D3A3_41E9_6F2A51526344",
                     "items": [
                      {
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 150,
                          "width": 150,
                          "class": "ImageResourceLevel",
                          "url": "media/panorama_C38F43B8_CFAD_3A19_41E9_7D6FC4197EA0_0_HS_1_0.png"
                         }
                        ]
                       },
                       "class": "HotspotPanoramaOverlayImage",
                       "yaw": 48.47,
                       "hfov": 6.04,
                       "pitch": -47.14
                      }
                     ]
                    },
                    {
                     "maps": [
                      {
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 50,
                          "width": 50,
                          "class": "ImageResourceLevel",
                          "url": "media/panorama_C38F43B8_CFAD_3A19_41E9_7D6FC4197EA0_0_HS_2_0_0_map.gif"
                         }
                        ]
                       },
                       "hfov": 5.66,
                       "class": "HotspotPanoramaOverlayMap",
                       "yaw": 13.4,
                       "pitch": -16.99
                      }
                     ],
                     "rollOverDisplay": false,
                     "enabledInCardboard": true,
                     "class": "HotspotPanoramaOverlay",
                     "areas": [
                      {
                       "mapColor": "#FF0000",
                       "class": "HotspotPanoramaOverlayArea",
                       "click": "this.mainPlayList.set('selectedIndex', 4)"
                      }
                     ],
                     "useHandCursor": true,
                     "id": "overlay_DF4845BB_D04C_DDA1_41C5_2C1BBD8DFFAE",
                     "items": [
                      {
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 100,
                          "width": 100,
                          "class": "ImageResourceLevel",
                          "url": "media/panorama_C38F43B8_CFAD_3A19_41E9_7D6FC4197EA0_0_HS_2_0.png"
                         }
                        ]
                       },
                       "class": "HotspotPanoramaOverlayImage",
                       "yaw": 13.4,
                       "hfov": 5.66,
                       "pitch": -16.99
                      }
                     ]
                    },
                    {
                     "maps": [
                      {
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 75,
                          "width": 75,
                          "class": "ImageResourceLevel",
                          "url": "media/panorama_C38F43B8_CFAD_3A19_41E9_7D6FC4197EA0_0_HS_3_0_0_map.gif"
                         }
                        ]
                       },
                       "hfov": 7.1,
                       "class": "HotspotPanoramaOverlayMap",
                       "yaw": -89.14,
                       "pitch": -36.9
                      }
                     ],
                     "rollOverDisplay": false,
                     "enabledInCardboard": true,
                     "class": "HotspotPanoramaOverlay",
                     "areas": [
                      {
                       "mapColor": "#FF0000",
                       "class": "HotspotPanoramaOverlayArea",
                       "click": "this.startPanoramaWithCamera(this.panorama_C38FBE07_CFAD_2DF7_41E3_7369EEF66215, this.camera_E65D6237_F2E0_BA3E_41E1_B089EDE0E334); this.mainPlayList.set('selectedIndex', 8)"
                      }
                     ],
                     "useHandCursor": true,
                     "id": "overlay_DF7A92DF_D04C_57E1_41E6_6D174589D4EC",
                     "items": [
                      {
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 150,
                          "width": 150,
                          "class": "ImageResourceLevel",
                          "url": "media/panorama_C38F43B8_CFAD_3A19_41E9_7D6FC4197EA0_0_HS_3_0.png"
                         }
                        ]
                       },
                       "class": "HotspotPanoramaOverlayImage",
                       "yaw": -89.14,
                       "hfov": 7.1,
                       "pitch": -36.9
                      }
                     ]
                    },
                    {
                     "maps": [
                      {
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 130,
                          "width": 16,
                          "class": "ImageResourceLevel",
                          "url": "media/panorama_C38F43B8_CFAD_3A19_41E9_7D6FC4197EA0_0_HS_4_0_0_map.gif"
                         }
                        ]
                       },
                       "hfov": 5.33,
                       "class": "HotspotPanoramaOverlayMap",
                       "yaw": -100.92,
                       "pitch": -8.27
                      }
                     ],
                     "rollOverDisplay": true,
                     "enabledInCardboard": true,
                     "class": "HotspotPanoramaOverlay",
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "mapColor": "#FF0000"
                      }
                     ],
                     "useHandCursor": true,
                     "id": "overlay_C93C0E50_D163_C2CA_41E7_EC0681BFEE3C",
                     "items": [
                      {
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 735,
                          "width": 90,
                          "class": "ImageResourceLevel",
                          "url": "media/panorama_C38F43B8_CFAD_3A19_41E9_7D6FC4197EA0_0_HS_4_0.png"
                         }
                        ]
                       },
                       "class": "HotspotPanoramaOverlayImage",
                       "yaw": -100.92,
                       "hfov": 5.33,
                       "pitch": -8.27
                      }
                     ]
                    },
                    {
                     "maps": [
                      {
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 52,
                          "width": 16,
                          "class": "ImageResourceLevel",
                          "url": "media/panorama_C38F43B8_CFAD_3A19_41E9_7D6FC4197EA0_0_HS_5_0_0_map.gif"
                         }
                        ]
                       },
                       "hfov": 4.73,
                       "class": "HotspotPanoramaOverlayMap",
                       "yaw": -38.35,
                       "pitch": -2.1
                      }
                     ],
                     "rollOverDisplay": true,
                     "enabledInCardboard": true,
                     "class": "HotspotPanoramaOverlay",
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "mapColor": "#FF0000"
                      }
                     ],
                     "useHandCursor": true,
                     "id": "overlay_C9DA7230_D11C_424A_41CE_C52CDE32C981",
                     "items": [
                      {
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 259,
                          "width": 79,
                          "class": "ImageResourceLevel",
                          "url": "media/panorama_C38F43B8_CFAD_3A19_41E9_7D6FC4197EA0_0_HS_5_0.png"
                         }
                        ]
                       },
                       "class": "HotspotPanoramaOverlayImage",
                       "yaw": -38.35,
                       "hfov": 4.73,
                       "pitch": -2.1
                      }
                     ]
                    },
                    {
                     "maps": [
                      {
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 200,
                          "width": 17,
                          "class": "ImageResourceLevel",
                          "url": "media/panorama_C38F43B8_CFAD_3A19_41E9_7D6FC4197EA0_0_HS_7_1_0_map.gif"
                         }
                        ]
                       },
                       "hfov": 6.05,
                       "class": "HotspotPanoramaOverlayMap",
                       "yaw": -101.12,
                       "pitch": -13.55
                      }
                     ],
                     "rollOverDisplay": false,
                     "enabledInCardboard": true,
                     "class": "HotspotPanoramaOverlay",
                     "areas": [
                      {
                       "toolTip": "Go to\u000aBEDROOM 1",
                       "class": "HotspotPanoramaOverlayArea",
                       "click": "this.mainPlayList.set('selectedIndex', 9)",
                       "displayTooltipInTouchScreens": true,
                       "mapColor": "#FF0000"
                      }
                     ],
                     "useHandCursor": true,
                     "id": "overlay_C69798FA_D167_CFBE_41E5_D38A89243831",
                     "items": [
                      {
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 1180,
                          "width": 102,
                          "class": "ImageResourceLevel",
                          "url": "media/panorama_C38F43B8_CFAD_3A19_41E9_7D6FC4197EA0_0_HS_7_0.png"
                         }
                        ]
                       },
                       "class": "HotspotPanoramaOverlayImage",
                       "yaw": -101.12,
                       "hfov": 6.05,
                       "roll": 0,
                       "pitch": -13.55
                      }
                     ]
                    },
                    {
                     "maps": [
                      {
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 149,
                          "width": 45,
                          "class": "ImageResourceLevel",
                          "url": "media/panorama_C38F43B8_CFAD_3A19_41E9_7D6FC4197EA0_0_HS_8_1_0_map.gif"
                         }
                        ]
                       },
                       "hfov": 5.33,
                       "class": "HotspotPanoramaOverlayMap",
                       "yaw": -38.32,
                       "pitch": -3.12
                      }
                     ],
                     "rollOverDisplay": false,
                     "enabledInCardboard": true,
                     "class": "HotspotPanoramaOverlay",
                     "areas": [
                      {
                       "toolTip": "Go to\u000aKITCHEN",
                       "class": "HotspotPanoramaOverlayArea",
                       "click": "this.mainPlayList.set('selectedIndex', 2)",
                       "displayTooltipInTouchScreens": true,
                       "mapColor": "#FF0000"
                      }
                     ],
                     "useHandCursor": true,
                     "id": "overlay_C9948EB7_D164_43B6_41E0_B811B1913A51",
                     "items": [
                      {
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 298,
                          "width": 90,
                          "class": "ImageResourceLevel",
                          "url": "media/panorama_C38F43B8_CFAD_3A19_41E9_7D6FC4197EA0_0_HS_8_0.png"
                         }
                        ]
                       },
                       "class": "HotspotPanoramaOverlayImage",
                       "yaw": -38.32,
                       "hfov": 5.33,
                       "roll": 0,
                       "pitch": -3.12
                      }
                     ]
                    }
                   ]
                  }
                 ],
                 "label": "7",
                 "hfov": 360,
                 "hfovMax": 140
                },
                "class": "AdjacentPanorama",
                "yaw": 84.1,
                "distance": 1,
                "backwardYaw": -89.14
               },
               {
                "panorama": "this.panorama_C140CB97_CC58_324C_41CC_EF501F0CF72D",
                "class": "AdjacentPanorama",
                "yaw": -8.3,
                "distance": 1,
                "backwardYaw": -9.53
               },
               {
                "panorama": "this.panorama_C38F5BC1_CFAA_EA6B_41E1_8125E2043944",
                "class": "AdjacentPanorama",
                "yaw": 174.36,
                "distance": 1,
                "backwardYaw": 11.52
               },
               {
                "panorama": "this.panorama_C38F91F1_CFAA_F62B_41DC_84D11640D594",
                "class": "AdjacentPanorama",
                "yaw": 169.7,
                "distance": 1,
                "backwardYaw": -3.14
               }
              ],
              "hfovMin": 70,
              "thumbnailUrl": "media/panorama_C38FBE07_CFAD_2DF7_41E3_7369EEF66215_t.jpg",
              "id": "panorama_C38FBE07_CFAD_2DF7_41E3_7369EEF66215",
              "pitch": 0,
              "partial": false,
              "class": "Panorama",
              "frames": [
               {
                "sphere": {
                 "class": "ImageResource",
                 "levels": [
                  {
                   "height": 3040,
                   "width": 6080,
                   "class": "ImageResourceLevel",
                   "url": "media/panorama_C38FBE07_CFAD_2DF7_41E3_7369EEF66215_hq.jpeg"
                  },
                  {
                   "height": 1608,
                   "width": 3217,
                   "class": "ImageResourceLevel",
                   "url": "media/panorama_C38FBE07_CFAD_2DF7_41E3_7369EEF66215.jpeg"
                  }
                 ]
                },
                "thumbnailUrl": "media/panorama_C38FBE07_CFAD_2DF7_41E3_7369EEF66215_t.jpg",
                "class": "SphericPanoramaFrame",
                "overlays": [
                 {
                  "maps": [
                   {
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 75,
                       "width": 75,
                       "class": "ImageResourceLevel",
                       "url": "media/panorama_C38FBE07_CFAD_2DF7_41E3_7369EEF66215_0_HS_0_0_0_map.gif"
                      }
                     ]
                    },
                    "hfov": 7.66,
                    "class": "HotspotPanoramaOverlayMap",
                    "yaw": -8.46,
                    "pitch": -30.35
                   }
                  ],
                  "rollOverDisplay": false,
                  "enabledInCardboard": true,
                  "class": "HotspotPanoramaOverlay",
                  "areas": [
                   {
                    "mapColor": "#FF0000",
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.startPanoramaWithCamera(this.panorama_C38F7808_CFAD_15F9_41D5_C57D64D622F4, this.camera_E1C6E37B_F2E0_BA36_41E1_4DA0DFA57074); this.mainPlayList.set('selectedIndex', 7)"
                   }
                  ],
                  "useHandCursor": true,
                  "id": "overlay_C122574A_D054_3EE2_41BD_06A5473B2F64",
                  "items": [
                   {
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 150,
                       "width": 150,
                       "class": "ImageResourceLevel",
                       "url": "media/panorama_C38FBE07_CFAD_2DF7_41E3_7369EEF66215_0_HS_0_0.png"
                      }
                     ]
                    },
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": -8.46,
                    "hfov": 7.66,
                    "pitch": -30.35
                   }
                  ]
                 },
                 {
                  "maps": [
                   {
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 50,
                       "width": 50,
                       "class": "ImageResourceLevel",
                       "url": "media/panorama_C38FBE07_CFAD_2DF7_41E3_7369EEF66215_0_HS_1_0_0_map.gif"
                      }
                     ]
                    },
                    "hfov": 5.62,
                    "class": "HotspotPanoramaOverlayMap",
                    "yaw": -8.3,
                    "pitch": -18.22
                   }
                  ],
                  "rollOverDisplay": false,
                  "enabledInCardboard": true,
                  "class": "HotspotPanoramaOverlay",
                  "areas": [
                   {
                    "mapColor": "#FF0000",
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.startPanoramaWithCamera(this.panorama_C140CB97_CC58_324C_41CC_EF501F0CF72D, this.camera_E1CD83AF_F2E0_BA2D_41E6_4ED527578433); this.mainPlayList.set('selectedIndex', 0)"
                   }
                  ],
                  "useHandCursor": true,
                  "id": "overlay_C1B6303A_D054_72A3_41C6_49CD9DDF79AF",
                  "items": [
                   {
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 100,
                       "width": 100,
                       "class": "ImageResourceLevel",
                       "url": "media/panorama_C38FBE07_CFAD_2DF7_41E3_7369EEF66215_0_HS_1_0.png"
                      }
                     ]
                    },
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": -8.3,
                    "hfov": 5.62,
                    "pitch": -18.22
                   }
                  ]
                 },
                 {
                  "maps": [
                   {
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 75,
                       "width": 75,
                       "class": "ImageResourceLevel",
                       "url": "media/panorama_C38FBE07_CFAD_2DF7_41E3_7369EEF66215_0_HS_2_0_0_map.gif"
                      }
                     ]
                    },
                    "hfov": 5.51,
                    "class": "HotspotPanoramaOverlayMap",
                    "yaw": 169.7,
                    "pitch": -51.64
                   }
                  ],
                  "rollOverDisplay": false,
                  "enabledInCardboard": true,
                  "class": "HotspotPanoramaOverlay",
                  "areas": [
                   {
                    "mapColor": "#FF0000",
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.startPanoramaWithCamera(this.panorama_C38F91F1_CFAA_F62B_41DC_84D11640D594, this.camera_E1B353D0_F2E0_BA72_41E2_03A06F40FA2F); this.mainPlayList.set('selectedIndex', 9)"
                   }
                  ],
                  "useHandCursor": true,
                  "id": "overlay_C1FB002B_D054_32A1_41DB_F187D0683E0F",
                  "items": [
                   {
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 150,
                       "width": 150,
                       "class": "ImageResourceLevel",
                       "url": "media/panorama_C38FBE07_CFAD_2DF7_41E3_7369EEF66215_0_HS_2_0.png"
                      }
                     ]
                    },
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": 169.7,
                    "hfov": 5.51,
                    "pitch": -51.64
                   }
                  ]
                 },
                 {
                  "maps": [
                   {
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 75,
                       "width": 75,
                       "class": "ImageResourceLevel",
                       "url": "media/panorama_C38FBE07_CFAD_2DF7_41E3_7369EEF66215_0_HS_3_0_0_map.gif"
                      }
                     ]
                    },
                    "hfov": 7.06,
                    "class": "HotspotPanoramaOverlayMap",
                    "yaw": 84.1,
                    "pitch": -37.31
                   }
                  ],
                  "rollOverDisplay": false,
                  "enabledInCardboard": true,
                  "class": "HotspotPanoramaOverlay",
                  "areas": [
                   {
                    "mapColor": "#FF0000",
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.startPanoramaWithCamera(this.panorama_C38F43B8_CFAD_3A19_41E9_7D6FC4197EA0, this.camera_E1C23399_F2E0_BAF2_41EB_A299C948C15A); this.mainPlayList.set('selectedIndex', 6)"
                   }
                  ],
                  "useHandCursor": true,
                  "id": "overlay_C0BD8785_D057_DE61_41E9_7D5C9634E795",
                  "items": [
                   {
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 150,
                       "width": 150,
                       "class": "ImageResourceLevel",
                       "url": "media/panorama_C38FBE07_CFAD_2DF7_41E3_7369EEF66215_0_HS_3_0.png"
                      }
                     ]
                    },
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": 84.1,
                    "hfov": 7.06,
                    "pitch": -37.31
                   }
                  ]
                 },
                 {
                  "maps": [
                   {
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 40,
                       "width": 40,
                       "class": "ImageResourceLevel",
                       "url": "media/panorama_C38FBE07_CFAD_2DF7_41E3_7369EEF66215_0_HS_4_0_0_map.gif"
                      }
                     ]
                    },
                    "hfov": 4.58,
                    "class": "HotspotPanoramaOverlayMap",
                    "yaw": 25.92,
                    "pitch": -14.76
                   }
                  ],
                  "rollOverDisplay": false,
                  "enabledInCardboard": true,
                  "class": "HotspotPanoramaOverlay",
                  "areas": [
                   {
                    "mapColor": "#FF0000",
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.mainPlayList.set('selectedIndex', 4)"
                   }
                  ],
                  "useHandCursor": true,
                  "id": "overlay_C25FF371_D054_56BE_41E5_823B32AF6AA6",
                  "items": [
                   {
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 80,
                       "width": 80,
                       "class": "ImageResourceLevel",
                       "url": "media/panorama_C38FBE07_CFAD_2DF7_41E3_7369EEF66215_0_HS_4_0.png"
                      }
                     ]
                    },
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": 25.92,
                    "hfov": 4.58,
                    "pitch": -14.76
                   }
                  ]
                 },
                 {
                  "maps": [
                   {
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 50,
                       "width": 50,
                       "class": "ImageResourceLevel",
                       "url": "media/panorama_C38FBE07_CFAD_2DF7_41E3_7369EEF66215_0_HS_5_0_0_map.gif"
                      }
                     ]
                    },
                    "hfov": 5.66,
                    "class": "HotspotPanoramaOverlayMap",
                    "yaw": 174.36,
                    "pitch": -16.99
                   }
                  ],
                  "rollOverDisplay": false,
                  "enabledInCardboard": true,
                  "class": "HotspotPanoramaOverlay",
                  "areas": [
                   {
                    "mapColor": "#FF0000",
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.startPanoramaWithCamera(this.panorama_C38F5BC1_CFAA_EA6B_41E1_8125E2043944, this.camera_E1C9F3BF_F2E0_BA2E_41EE_1D4A9F3C48AD); this.mainPlayList.set('selectedIndex', 10)"
                   }
                  ],
                  "useHandCursor": true,
                  "id": "overlay_C54FC359_D04C_56EE_41E0_53BEC9CCAC53",
                  "items": [
                   {
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 100,
                       "width": 100,
                       "class": "ImageResourceLevel",
                       "url": "media/panorama_C38FBE07_CFAD_2DF7_41E3_7369EEF66215_0_HS_5_0.png"
                      }
                     ]
                    },
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": 174.36,
                    "hfov": 5.66,
                    "pitch": -16.99
                   }
                  ]
                 },
                 {
                  "maps": [
                   {
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 99,
                       "width": 16,
                       "class": "ImageResourceLevel",
                       "url": "media/panorama_C38FBE07_CFAD_2DF7_41E3_7369EEF66215_0_HS_6_0_0_map.gif"
                      }
                     ]
                    },
                    "hfov": 6.81,
                    "class": "HotspotPanoramaOverlayMap",
                    "yaw": 96.32,
                    "pitch": -9.63
                   }
                  ],
                  "rollOverDisplay": true,
                  "enabledInCardboard": true,
                  "class": "HotspotPanoramaOverlay",
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000"
                   }
                  ],
                  "useHandCursor": true,
                  "id": "overlay_DE1FC5C7_D197_6085_41AC_60438C123E00",
                  "items": [
                   {
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 720,
                       "width": 116,
                       "class": "ImageResourceLevel",
                       "url": "media/panorama_C38FBE07_CFAD_2DF7_41E3_7369EEF66215_0_HS_6_0.png"
                      }
                     ]
                    },
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": 96.32,
                    "hfov": 6.81,
                    "pitch": -9.63
                   }
                  ]
                 },
                 {
                  "maps": [
                   {
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 200,
                       "width": 20,
                       "class": "ImageResourceLevel",
                       "url": "media/panorama_C38FBE07_CFAD_2DF7_41E3_7369EEF66215_0_HS_9_1_0_map.gif"
                      }
                     ]
                    },
                    "hfov": 7.73,
                    "class": "HotspotPanoramaOverlayMap",
                    "yaw": 96.35,
                    "pitch": -15.64
                   }
                  ],
                  "rollOverDisplay": false,
                  "enabledInCardboard": true,
                  "class": "HotspotPanoramaOverlay",
                  "areas": [
                   {
                    "toolTip": "Go to\u000aBEDROOM 2",
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.mainPlayList.set('selectedIndex', 14)",
                    "displayTooltipInTouchScreens": true,
                    "mapColor": "#FF0000"
                   }
                  ],
                  "useHandCursor": true,
                  "id": "overlay_DF002F63_D195_E1BD_41D4_E6EB0D397911",
                  "items": [
                   {
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 1243,
                       "width": 130,
                       "class": "ImageResourceLevel",
                       "url": "media/panorama_C38FBE07_CFAD_2DF7_41E3_7369EEF66215_0_HS_9_0.png"
                      }
                     ]
                    },
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": 96.35,
                    "hfov": 7.73,
                    "roll": 0,
                    "pitch": -15.64
                   }
                  ]
                 }
                ]
               }
              ],
              "label": "8",
              "hfov": 360,
              "hfovMax": 140
             },
             "class": "AdjacentPanorama",
             "yaw": 11.52,
             "distance": 1,
             "backwardYaw": 174.36
            },
            {
             "panorama": "this.panorama_C38F91F1_CFAA_F62B_41DC_84D11640D594",
             "class": "AdjacentPanorama",
             "yaw": 10.54,
             "distance": 1,
             "backwardYaw": 175.43
            }
           ],
           "hfovMin": 70,
           "thumbnailUrl": "media/panorama_C38F5BC1_CFAA_EA6B_41E1_8125E2043944_t.jpg",
           "id": "panorama_C38F5BC1_CFAA_EA6B_41E1_8125E2043944",
           "pitch": 0,
           "partial": false,
           "class": "Panorama",
           "frames": [
            {
             "sphere": {
              "class": "ImageResource",
              "levels": [
               {
                "height": 3040,
                "width": 6080,
                "class": "ImageResourceLevel",
                "url": "media/panorama_C38F5BC1_CFAA_EA6B_41E1_8125E2043944_hq.jpeg"
               },
               {
                "height": 1608,
                "width": 3217,
                "class": "ImageResourceLevel",
                "url": "media/panorama_C38F5BC1_CFAA_EA6B_41E1_8125E2043944.jpeg"
               }
              ]
             },
             "thumbnailUrl": "media/panorama_C38F5BC1_CFAA_EA6B_41E1_8125E2043944_t.jpg",
             "class": "SphericPanoramaFrame",
             "overlays": [
              {
               "maps": [
                {
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 50,
                    "width": 50,
                    "class": "ImageResourceLevel",
                    "url": "media/panorama_C38F5BC1_CFAA_EA6B_41E1_8125E2043944_0_HS_0_0_0_map.gif"
                   }
                  ]
                 },
                 "hfov": 5.55,
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": 10.54,
                 "pitch": -20.26
                }
               ],
               "rollOverDisplay": false,
               "enabledInCardboard": true,
               "class": "HotspotPanoramaOverlay",
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.startPanoramaWithCamera(this.panorama_C38F91F1_CFAA_F62B_41DC_84D11640D594, this.camera_E184D4A5_F2E0_BED2_41E6_DA1C968BE4A6); this.mainPlayList.set('selectedIndex', 9)"
                }
               ],
               "useHandCursor": true,
               "id": "overlay_C5AB072F_D04D_FEA2_41E9_09B7504F0B9F",
               "items": [
                {
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 100,
                    "width": 100,
                    "class": "ImageResourceLevel",
                    "url": "media/panorama_C38F5BC1_CFAA_EA6B_41E1_8125E2043944_0_HS_0_0.png"
                   }
                  ]
                 },
                 "class": "HotspotPanoramaOverlayImage",
                 "yaw": 10.54,
                 "hfov": 5.55,
                 "pitch": -20.26
                }
               ]
              },
              {
               "maps": [
                {
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 43,
                    "width": 16,
                    "class": "ImageResourceLevel",
                    "url": "media/panorama_C38F5BC1_CFAA_EA6B_41E1_8125E2043944_0_HS_5_0_0_map.gif"
                   }
                  ]
                 },
                 "hfov": 7.94,
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": -15.46,
                 "pitch": -3.97
                }
               ],
               "rollOverDisplay": true,
               "enabledInCardboard": true,
               "class": "HotspotPanoramaOverlay",
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000"
                }
               ],
               "useHandCursor": true,
               "id": "overlay_C1D27A5A_D1B6_E38C_41D9_7DFBDE2C485E",
               "items": [
                {
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 361,
                    "width": 134,
                    "class": "ImageResourceLevel",
                    "url": "media/panorama_C38F5BC1_CFAA_EA6B_41E1_8125E2043944_0_HS_5_0.png"
                   }
                  ]
                 },
                 "class": "HotspotPanoramaOverlayImage",
                 "yaw": -15.46,
                 "hfov": 7.94,
                 "pitch": -3.97
                }
               ]
              },
              {
               "maps": [
                {
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 75,
                    "width": 75,
                    "class": "ImageResourceLevel",
                    "url": "media/panorama_C38F5BC1_CFAA_EA6B_41E1_8125E2043944_0_HS_6_0_0_map.gif"
                   }
                  ]
                 },
                 "hfov": 7.82,
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": -83.16,
                 "pitch": -28.31
                }
               ],
               "rollOverDisplay": false,
               "enabledInCardboard": true,
               "class": "HotspotPanoramaOverlay",
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.startPanoramaWithCamera(this.panorama_C38E7574_CFAB_1E29_41CE_7A87CFA9BD69, this.camera_E190B472_F2E0_BE36_41DE_9299D3CF9DB7); this.mainPlayList.set('selectedIndex', 11)"
                }
               ],
               "useHandCursor": true,
               "id": "overlay_C1E85454_D1AD_E79B_41DE_0CFD7DDF1C05",
               "items": [
                {
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 150,
                    "width": 150,
                    "class": "ImageResourceLevel",
                    "url": "media/panorama_C38F5BC1_CFAA_EA6B_41E1_8125E2043944_0_HS_6_0.png"
                   }
                  ]
                 },
                 "class": "HotspotPanoramaOverlayImage",
                 "yaw": -83.16,
                 "hfov": 7.82,
                 "pitch": -28.31
                }
               ]
              },
              {
               "maps": [
                {
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 33,
                    "width": 16,
                    "class": "ImageResourceLevel",
                    "url": "media/panorama_C38F5BC1_CFAA_EA6B_41E1_8125E2043944_0_HS_7_0_0_map.gif"
                   }
                  ]
                 },
                 "hfov": 12.37,
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": 11.11,
                 "pitch": -5.22
                }
               ],
               "rollOverDisplay": true,
               "enabledInCardboard": true,
               "class": "HotspotPanoramaOverlay",
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000"
                }
               ],
               "useHandCursor": true,
               "id": "overlay_C0CDF24C_D1B5_A384_41D6_EA697313694C",
               "items": [
                {
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 432,
                    "width": 209,
                    "class": "ImageResourceLevel",
                    "url": "media/panorama_C38F5BC1_CFAA_EA6B_41E1_8125E2043944_0_HS_7_0.png"
                   }
                  ]
                 },
                 "class": "HotspotPanoramaOverlayImage",
                 "yaw": 11.11,
                 "hfov": 12.37,
                 "pitch": -5.22
                }
               ]
              },
              {
               "maps": [
                {
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 29,
                    "width": 16,
                    "class": "ImageResourceLevel",
                    "url": "media/panorama_C38F5BC1_CFAA_EA6B_41E1_8125E2043944_0_HS_11_0_0_map.gif"
                   }
                  ]
                 },
                 "hfov": 35.97,
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": -137.04,
                 "pitch": 1.93
                }
               ],
               "rollOverDisplay": true,
               "enabledInCardboard": true,
               "class": "HotspotPanoramaOverlay",
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000"
                }
               ],
               "useHandCursor": true,
               "id": "overlay_F4E30ABE_D56B_BC8A_41E9_3BE6E79B657D",
               "items": [
                {
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 1134,
                    "width": 607,
                    "class": "ImageResourceLevel",
                    "url": "media/panorama_C38F5BC1_CFAA_EA6B_41E1_8125E2043944_0_HS_11_0.png"
                   }
                  ]
                 },
                 "class": "HotspotPanoramaOverlayImage",
                 "yaw": -137.04,
                 "hfov": 35.97,
                 "pitch": 1.93
                }
               ]
              },
              {
               "maps": [
                {
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 200,
                    "width": 112,
                    "class": "ImageResourceLevel",
                    "url": "media/panorama_C38F5BC1_CFAA_EA6B_41E1_8125E2043944_0_HS_8_1_0_map.gif"
                   }
                  ]
                 },
                 "hfov": 15.28,
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": 11.52,
                 "pitch": -5.2
                }
               ],
               "rollOverDisplay": false,
               "enabledInCardboard": true,
               "class": "HotspotPanoramaOverlay",
               "areas": [
                {
                 "toolTip": "Go to\u000aTV LOUNGE",
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.startPanoramaWithCamera(this.panorama_C38FBE07_CFAD_2DF7_41E3_7369EEF66215, this.camera_E19BB487_F2E0_BEDE_41E2_F4DB5815E3DB); this.mainPlayList.set('selectedIndex', 8)",
                 "displayTooltipInTouchScreens": true,
                 "mapColor": "#FF0000"
                }
               ],
               "useHandCursor": true,
               "id": "overlay_C02BE01D_D1B2_FF85_41E2_188B4444AF77",
               "items": [
                {
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 459,
                    "width": 259,
                    "class": "ImageResourceLevel",
                    "url": "media/panorama_C38F5BC1_CFAA_EA6B_41E1_8125E2043944_0_HS_8_0.png"
                   }
                  ]
                 },
                 "class": "HotspotPanoramaOverlayImage",
                 "yaw": 11.52,
                 "hfov": 15.28,
                 "roll": 0,
                 "pitch": -5.2
                }
               ]
              },
              {
               "maps": [
                {
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 197,
                    "width": 73,
                    "class": "ImageResourceLevel",
                    "url": "media/panorama_C38F5BC1_CFAA_EA6B_41E1_8125E2043944_0_HS_9_1_0_map.gif"
                   }
                  ]
                 },
                 "hfov": 8.72,
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": -15.49,
                 "pitch": -3.83
                }
               ],
               "rollOverDisplay": false,
               "enabledInCardboard": true,
               "class": "HotspotPanoramaOverlay",
               "areas": [
                {
                 "toolTip": "Go to\u000aBATHROOM",
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.mainPlayList.set('selectedIndex', 13)",
                 "displayTooltipInTouchScreens": true,
                 "mapColor": "#FF0000"
                }
               ],
               "useHandCursor": true,
               "id": "overlay_C0B34C67_D1B7_6784_41EA_13C9009D39E2",
               "items": [
                {
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 395,
                    "width": 147,
                    "class": "ImageResourceLevel",
                    "url": "media/panorama_C38F5BC1_CFAA_EA6B_41E1_8125E2043944_0_HS_9_0.png"
                   }
                  ]
                 },
                 "class": "HotspotPanoramaOverlayImage",
                 "yaw": -15.49,
                 "hfov": 8.72,
                 "roll": 0,
                 "pitch": -3.83
                }
               ]
              },
              {
               "maps": [
                {
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 200,
                    "width": 105,
                    "class": "ImageResourceLevel",
                    "url": "media/panorama_C38F5BC1_CFAA_EA6B_41E1_8125E2043944_0_HS_10_1_0_map.gif"
                   }
                  ]
                 },
                 "hfov": 72.93,
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": -142.63,
                 "pitch": -5.31
                }
               ],
               "rollOverDisplay": false,
               "enabledInCardboard": true,
               "class": "HotspotPanoramaOverlay",
               "areas": [
                {
                 "toolTip": "Go to\u000aBALCONY",
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.mainPlayList.set('selectedIndex', 23)",
                 "displayTooltipInTouchScreens": true,
                 "mapColor": "#FF0000"
                }
               ],
               "useHandCursor": true,
               "id": "overlay_DB303A03_D40D_FE66_41B1_D270520BA2B1",
               "items": [
                {
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 2048,
                    "width": 1076,
                    "class": "ImageResourceLevel",
                    "url": "media/panorama_C38F5BC1_CFAA_EA6B_41E1_8125E2043944_0_HS_10_0.png"
                   }
                  ]
                 },
                 "class": "HotspotPanoramaOverlayImage",
                 "yaw": -142.63,
                 "hfov": 72.93,
                 "roll": 0,
                 "pitch": -5.31
                }
               ]
              }
             ]
            }
           ],
           "label": "11",
           "hfov": 360,
           "hfovMax": 140
          },
          "class": "AdjacentPanorama",
          "yaw": 175.43,
          "distance": 1,
          "backwardYaw": 10.54
         },
         {
          "panorama": {
           "vfov": 180,
           "adjacentPanoramas": [
            {
             "panorama": "this.panorama_C38F91F1_CFAA_F62B_41DC_84D11640D594",
             "class": "AdjacentPanorama",
             "yaw": -96.08,
             "distance": 1,
             "backwardYaw": -91.6
            },
            {
             "panorama": {
              "vfov": 180,
              "adjacentPanoramas": [
               {
                "panorama": "this.panorama_C38EAFAB_CFAB_2A3F_41CC_775A0A3219DE",
                "class": "AdjacentPanorama",
                "yaw": -7.29,
                "distance": 1,
                "backwardYaw": 163.39
               }
              ],
              "hfovMin": 70,
              "thumbnailUrl": "media/panorama_C38E9989_CFAB_36FB_41E8_AEED195C9089_t.jpg",
              "id": "panorama_C38E9989_CFAB_36FB_41E8_AEED195C9089",
              "pitch": 0,
              "partial": false,
              "class": "Panorama",
              "frames": [
               {
                "sphere": {
                 "class": "ImageResource",
                 "levels": [
                  {
                   "height": 3040,
                   "width": 6080,
                   "class": "ImageResourceLevel",
                   "url": "media/panorama_C38E9989_CFAB_36FB_41E8_AEED195C9089_hq.jpeg"
                  },
                  {
                   "height": 1608,
                   "width": 3217,
                   "class": "ImageResourceLevel",
                   "url": "media/panorama_C38E9989_CFAB_36FB_41E8_AEED195C9089.jpeg"
                  }
                 ]
                },
                "thumbnailUrl": "media/panorama_C38E9989_CFAB_36FB_41E8_AEED195C9089_t.jpg",
                "class": "SphericPanoramaFrame",
                "overlays": [
                 {
                  "maps": [
                   {
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 75,
                       "width": 75,
                       "class": "ImageResourceLevel",
                       "url": "media/panorama_C38E9989_CFAB_36FB_41E8_AEED195C9089_0_HS_0_0_0_map.gif"
                      }
                     ]
                    },
                    "hfov": 7.07,
                    "class": "HotspotPanoramaOverlayMap",
                    "yaw": -7.29,
                    "pitch": -37.26
                   }
                  ],
                  "rollOverDisplay": false,
                  "enabledInCardboard": true,
                  "class": "HotspotPanoramaOverlay",
                  "areas": [
                   {
                    "mapColor": "#FF0000",
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.startPanoramaWithCamera(this.panorama_C38EAFAB_CFAB_2A3F_41CC_775A0A3219DE, this.camera_E681A1BB_F2E0_B636_41B9_89FFC78D641B); this.mainPlayList.set('selectedIndex', 12)"
                   }
                  ],
                  "useHandCursor": true,
                  "id": "overlay_C5A49F50_D1AE_E19C_41CA_6B2A38E9D8A6",
                  "items": [
                   {
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 150,
                       "width": 150,
                       "class": "ImageResourceLevel",
                       "url": "media/panorama_C38E9989_CFAB_36FB_41E8_AEED195C9089_0_HS_0_0.png"
                      }
                     ]
                    },
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": -7.29,
                    "hfov": 7.07,
                    "pitch": -37.26
                   }
                  ]
                 },
                 {
                  "maps": [
                   {
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 34,
                       "width": 16,
                       "class": "ImageResourceLevel",
                       "url": "media/panorama_C38E9989_CFAB_36FB_41E8_AEED195C9089_0_HS_1_0_0_map.gif"
                      }
                     ]
                    },
                    "hfov": 6.74,
                    "class": "HotspotPanoramaOverlayMap",
                    "yaw": -15.89,
                    "pitch": 1.83
                   }
                  ],
                  "rollOverDisplay": true,
                  "enabledInCardboard": true,
                  "class": "HotspotPanoramaOverlay",
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "mapColor": "#FF0000"
                   }
                  ],
                  "useHandCursor": true,
                  "id": "overlay_F5600235_DAF1_601A_41E3_D63F4875805B",
                  "items": [
                   {
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 241,
                       "width": 113,
                       "class": "ImageResourceLevel",
                       "url": "media/panorama_C38E9989_CFAB_36FB_41E8_AEED195C9089_0_HS_1_0.png"
                      }
                     ]
                    },
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": -15.89,
                    "hfov": 6.74,
                    "pitch": 1.83
                   }
                  ]
                 },
                 {
                  "maps": [
                   {
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 120,
                       "width": 113,
                       "class": "ImageResourceLevel",
                       "url": "media/panorama_C38E9989_CFAB_36FB_41E8_AEED195C9089_0_HS_2_1_0_map.gif"
                      }
                     ]
                    },
                    "hfov": 13.44,
                    "class": "HotspotPanoramaOverlayMap",
                    "yaw": -14.35,
                    "pitch": 2.05
                   }
                  ],
                  "rollOverDisplay": false,
                  "enabledInCardboard": true,
                  "class": "HotspotPanoramaOverlay",
                  "areas": [
                   {
                    "toolTip": "Go to\u000aBALCONY",
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.mainPlayList.set('selectedIndex', 23)",
                    "displayTooltipInTouchScreens": true,
                    "mapColor": "#FF0000"
                   }
                  ],
                  "useHandCursor": true,
                  "id": "overlay_EAE03310_DAF0_A01A_41C1_9941EBF826CA",
                  "items": [
                   {
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 240,
                       "width": 227,
                       "class": "ImageResourceLevel",
                       "url": "media/panorama_C38E9989_CFAB_36FB_41E8_AEED195C9089_0_HS_2_0.png"
                      }
                     ]
                    },
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": -14.35,
                    "hfov": 13.44,
                    "roll": 0,
                    "pitch": 2.05
                   }
                  ]
                 }
                ]
               }
              ],
              "label": "14",
              "hfov": 360,
              "hfovMax": 140
             },
             "class": "AdjacentPanorama",
             "yaw": 163.39,
             "distance": 1,
             "backwardYaw": -7.29
            }
           ],
           "hfovMin": 70,
           "thumbnailUrl": "media/panorama_C38EAFAB_CFAB_2A3F_41CC_775A0A3219DE_t.jpg",
           "id": "panorama_C38EAFAB_CFAB_2A3F_41CC_775A0A3219DE",
           "pitch": 0,
           "partial": false,
           "class": "Panorama",
           "frames": [
            {
             "sphere": {
              "class": "ImageResource",
              "levels": [
               {
                "height": 3040,
                "width": 6080,
                "class": "ImageResourceLevel",
                "url": "media/panorama_C38EAFAB_CFAB_2A3F_41CC_775A0A3219DE_hq.jpeg"
               },
               {
                "height": 1608,
                "width": 3217,
                "class": "ImageResourceLevel",
                "url": "media/panorama_C38EAFAB_CFAB_2A3F_41CC_775A0A3219DE.jpeg"
               }
              ]
             },
             "thumbnailUrl": "media/panorama_C38EAFAB_CFAB_2A3F_41CC_775A0A3219DE_t.jpg",
             "class": "SphericPanoramaFrame",
             "overlays": [
              {
               "maps": [
                {
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 75,
                    "width": 75,
                    "class": "ImageResourceLevel",
                    "url": "media/panorama_C38EAFAB_CFAB_2A3F_41CC_775A0A3219DE_0_HS_0_0_0_map.gif"
                   }
                  ]
                 },
                 "hfov": 7.37,
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": -96.08,
                 "pitch": -33.92
                }
               ],
               "rollOverDisplay": false,
               "enabledInCardboard": true,
               "class": "HotspotPanoramaOverlay",
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.startPanoramaWithCamera(this.panorama_C38F91F1_CFAA_F62B_41DC_84D11640D594, this.camera_E696516F_F2E0_B62E_41C4_445E5342B164); this.mainPlayList.set('selectedIndex', 9)"
                }
               ],
               "useHandCursor": true,
               "id": "overlay_C3855513_D1B2_E19D_41E1_793F4F34AAD4",
               "items": [
                {
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 150,
                    "width": 150,
                    "class": "ImageResourceLevel",
                    "url": "media/panorama_C38EAFAB_CFAB_2A3F_41CC_775A0A3219DE_0_HS_0_0.png"
                   }
                  ]
                 },
                 "class": "HotspotPanoramaOverlayImage",
                 "yaw": -96.08,
                 "hfov": 7.37,
                 "pitch": -33.92
                }
               ]
              },
              {
               "maps": [
                {
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 50,
                    "width": 50,
                    "class": "ImageResourceLevel",
                    "url": "media/panorama_C38EAFAB_CFAB_2A3F_41CC_775A0A3219DE_0_HS_1_0_0_map.gif"
                   }
                  ]
                 },
                 "hfov": 5.67,
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": -40.92,
                 "pitch": -16.76
                }
               ],
               "rollOverDisplay": false,
               "enabledInCardboard": true,
               "class": "HotspotPanoramaOverlay",
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.mainPlayList.set('selectedIndex', 10)"
                }
               ],
               "useHandCursor": true,
               "id": "overlay_C2826394_D1B2_A09B_41E9_5C5617D0FBBE",
               "items": [
                {
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 100,
                    "width": 100,
                    "class": "ImageResourceLevel",
                    "url": "media/panorama_C38EAFAB_CFAB_2A3F_41CC_775A0A3219DE_0_HS_1_0.png"
                   }
                  ]
                 },
                 "class": "HotspotPanoramaOverlayImage",
                 "yaw": -40.92,
                 "hfov": 5.67,
                 "pitch": -16.76
                }
               ]
              },
              {
               "maps": [
                {
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 75,
                    "width": 75,
                    "class": "ImageResourceLevel",
                    "url": "media/panorama_C38EAFAB_CFAB_2A3F_41CC_775A0A3219DE_0_HS_2_0_0_map.gif"
                   }
                  ]
                 },
                 "hfov": 7.39,
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": 163.39,
                 "pitch": -33.63
                }
               ],
               "rollOverDisplay": false,
               "enabledInCardboard": true,
               "class": "HotspotPanoramaOverlay",
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.startPanoramaWithCamera(this.panorama_C38E9989_CFAB_36FB_41E8_AEED195C9089, this.camera_E69C3197_F2E0_B6FE_41EE_4919254D3702); this.mainPlayList.set('selectedIndex', 13)"
                }
               ],
               "useHandCursor": true,
               "id": "overlay_C2AC6ECC_D1B2_A084_41E5_CB8A0F8C96DB",
               "items": [
                {
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 150,
                    "width": 150,
                    "class": "ImageResourceLevel",
                    "url": "media/panorama_C38EAFAB_CFAB_2A3F_41CC_775A0A3219DE_0_HS_2_0.png"
                   }
                  ]
                 },
                 "class": "HotspotPanoramaOverlayImage",
                 "yaw": 163.39,
                 "hfov": 7.39,
                 "pitch": -33.63
                }
               ]
              },
              {
               "maps": [
                {
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 100,
                    "width": 16,
                    "class": "ImageResourceLevel",
                    "url": "media/panorama_C38EAFAB_CFAB_2A3F_41CC_775A0A3219DE_0_HS_3_0_0_map.gif"
                   }
                  ]
                 },
                 "hfov": 8.16,
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": -117.86,
                 "pitch": -10.22
                }
               ],
               "rollOverDisplay": true,
               "enabledInCardboard": true,
               "class": "HotspotPanoramaOverlay",
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000"
                }
               ],
               "useHandCursor": true,
               "id": "overlay_C25A6424_D1AE_A7BB_41C5_CA434BA21D41",
               "items": [
                {
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 876,
                    "width": 140,
                    "class": "ImageResourceLevel",
                    "url": "media/panorama_C38EAFAB_CFAB_2A3F_41CC_775A0A3219DE_0_HS_3_0.png"
                   }
                  ]
                 },
                 "class": "HotspotPanoramaOverlayImage",
                 "yaw": -117.86,
                 "hfov": 8.16,
                 "pitch": -10.22
                }
               ]
              },
              {
               "maps": [
                {
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 30,
                    "width": 15,
                    "class": "ImageResourceLevel",
                    "url": "media/panorama_C38EAFAB_CFAB_2A3F_41CC_775A0A3219DE_0_HS_6_0_0_map.gif"
                   }
                  ]
                 },
                 "hfov": 11.66,
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": -25.36,
                 "pitch": 2.96
                }
               ],
               "rollOverDisplay": true,
               "enabledInCardboard": true,
               "class": "HotspotPanoramaOverlay",
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000"
                }
               ],
               "useHandCursor": true,
               "id": "overlay_F6122FE7_D569_B4B9_41C9_2AB29F412A1C",
               "items": [
                {
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 380,
                    "width": 197,
                    "class": "ImageResourceLevel",
                    "url": "media/panorama_C38EAFAB_CFAB_2A3F_41CC_775A0A3219DE_0_HS_6_0.png"
                   }
                  ]
                 },
                 "class": "HotspotPanoramaOverlayImage",
                 "yaw": -25.36,
                 "hfov": 11.66,
                 "pitch": 2.96
                }
               ]
              },
              {
               "maps": [
                {
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 200,
                    "width": 31,
                    "class": "ImageResourceLevel",
                    "url": "media/panorama_C38EAFAB_CFAB_2A3F_41CC_775A0A3219DE_0_HS_4_1_0_map.gif"
                   }
                  ]
                 },
                 "hfov": 10.49,
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": -117.36,
                 "pitch": -10.9
                }
               ],
               "rollOverDisplay": false,
               "enabledInCardboard": true,
               "class": "HotspotPanoramaOverlay",
               "areas": [
                {
                 "toolTip": "Go to\u000aTV LOUNGE",
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.mainPlayList.set('selectedIndex', 8)",
                 "displayTooltipInTouchScreens": true,
                 "mapColor": "#FF0000"
                }
               ],
               "useHandCursor": true,
               "id": "overlay_C2704F1E_D1AD_A187_4193_CF9329784AF7",
               "items": [
                {
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 1117,
                    "width": 177,
                    "class": "ImageResourceLevel",
                    "url": "media/panorama_C38EAFAB_CFAB_2A3F_41CC_775A0A3219DE_0_HS_4_0.png"
                   }
                  ]
                 },
                 "class": "HotspotPanoramaOverlayImage",
                 "yaw": -117.36,
                 "hfov": 10.49,
                 "roll": 0,
                 "pitch": -10.9
                }
               ]
              },
              {
               "maps": [
                {
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 200,
                    "width": 192,
                    "class": "ImageResourceLevel",
                    "url": "media/panorama_C38EAFAB_CFAB_2A3F_41CC_775A0A3219DE_0_HS_5_1_0_map.gif"
                   }
                  ]
                 },
                 "hfov": 23.31,
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": -25.11,
                 "pitch": 0.93
                }
               ],
               "rollOverDisplay": false,
               "enabledInCardboard": true,
               "class": "HotspotPanoramaOverlay",
               "areas": [
                {
                 "toolTip": "Go to\u000aBALCONY",
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.mainPlayList.set('selectedIndex', 23)",
                 "displayTooltipInTouchScreens": true,
                 "mapColor": "#FF0000"
                }
               ],
               "useHandCursor": true,
               "id": "overlay_DB7A2AEA_D405_FFA6_41DE_18FE3441F027",
               "items": [
                {
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 414,
                    "width": 399,
                    "class": "ImageResourceLevel",
                    "url": "media/panorama_C38EAFAB_CFAB_2A3F_41CC_775A0A3219DE_0_HS_5_0.png"
                   }
                  ]
                 },
                 "class": "HotspotPanoramaOverlayImage",
                 "yaw": -25.11,
                 "hfov": 23.31,
                 "roll": 0,
                 "pitch": 0.93
                }
               ]
              }
             ]
            }
           ],
           "label": "13",
           "hfov": 360,
           "hfovMax": 140
          },
          "class": "AdjacentPanorama",
          "yaw": -91.6,
          "distance": 1,
          "backwardYaw": -96.08
         },
         {
          "panorama": "this.panorama_C38FBE07_CFAD_2DF7_41E3_7369EEF66215",
          "class": "AdjacentPanorama",
          "yaw": -3.14,
          "distance": 1,
          "backwardYaw": 169.7
         }
        ],
        "hfovMin": 70,
        "thumbnailUrl": "media/panorama_C38F91F1_CFAA_F62B_41DC_84D11640D594_t.jpg",
        "id": "panorama_C38F91F1_CFAA_F62B_41DC_84D11640D594",
        "pitch": 0,
        "partial": false,
        "class": "Panorama",
        "frames": [
         {
          "sphere": {
           "class": "ImageResource",
           "levels": [
            {
             "height": 3040,
             "width": 6080,
             "class": "ImageResourceLevel",
             "url": "media/panorama_C38F91F1_CFAA_F62B_41DC_84D11640D594_hq.jpeg"
            },
            {
             "height": 1608,
             "width": 3217,
             "class": "ImageResourceLevel",
             "url": "media/panorama_C38F91F1_CFAA_F62B_41DC_84D11640D594.jpeg"
            }
           ]
          },
          "thumbnailUrl": "media/panorama_C38F91F1_CFAA_F62B_41DC_84D11640D594_t.jpg",
          "class": "SphericPanoramaFrame",
          "overlays": [
           {
            "maps": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 75,
                 "width": 75,
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_C38F91F1_CFAA_F62B_41DC_84D11640D594_0_HS_0_0_0_map.gif"
                }
               ]
              },
              "hfov": 6.04,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": -3.14,
              "pitch": -47.14
             }
            ],
            "rollOverDisplay": false,
            "enabledInCardboard": true,
            "class": "HotspotPanoramaOverlay",
            "areas": [
             {
              "mapColor": "#FF0000",
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.startPanoramaWithCamera(this.panorama_C38FBE07_CFAD_2DF7_41E3_7369EEF66215, this.camera_E12B55B3_F2E0_BE36_41C3_FAB815659764); this.mainPlayList.set('selectedIndex', 8)"
             }
            ],
            "useHandCursor": true,
            "id": "overlay_C387AD4E_D057_D2E3_41CA_D02DC3F4BCB6",
            "items": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 150,
                 "width": 150,
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_C38F91F1_CFAA_F62B_41DC_84D11640D594_0_HS_0_0.png"
                }
               ]
              },
              "class": "HotspotPanoramaOverlayImage",
              "yaw": -3.14,
              "hfov": 6.04,
              "pitch": -47.14
             }
            ]
           },
           {
            "maps": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 50,
                 "width": 50,
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_C38F91F1_CFAA_F62B_41DC_84D11640D594_0_HS_1_0_0_map.gif"
                }
               ]
              },
              "hfov": 5.54,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": -4.62,
              "pitch": -20.67
             }
            ],
            "rollOverDisplay": false,
            "enabledInCardboard": true,
            "class": "HotspotPanoramaOverlay",
            "areas": [
             {
              "mapColor": "#FF0000",
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.startPanoramaWithCamera(this.panorama_C38F7808_CFAD_15F9_41D5_C57D64D622F4, this.camera_E147C573_F2E0_BE36_41D7_CACFA025E103); this.mainPlayList.set('selectedIndex', 7)"
             }
            ],
            "useHandCursor": true,
            "id": "overlay_C38A057B_D057_D2A1_41DE_FE1B93AD3D5A",
            "items": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 100,
                 "width": 100,
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_C38F91F1_CFAA_F62B_41DC_84D11640D594_0_HS_1_0.png"
                }
               ]
              },
              "class": "HotspotPanoramaOverlayImage",
              "yaw": -4.62,
              "hfov": 5.54,
              "pitch": -20.67
             }
            ]
           },
           {
            "maps": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 25,
                 "width": 25,
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_C38F91F1_CFAA_F62B_41DC_84D11640D594_0_HS_2_0_0_map.gif"
                }
               ]
              },
              "hfov": 2.87,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": -4.87,
              "pitch": -14.28
             }
            ],
            "rollOverDisplay": false,
            "enabledInCardboard": true,
            "class": "HotspotPanoramaOverlay",
            "areas": [
             {
              "mapColor": "#FF0000",
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.startPanoramaWithCamera(this.panorama_C140CB97_CC58_324C_41CC_EF501F0CF72D, this.camera_E14D2583_F2E0_BED6_41E4_8188E4A41745); this.mainPlayList.set('selectedIndex', 0)"
             }
            ],
            "useHandCursor": true,
            "id": "overlay_C4856D60_D054_32DE_41E7_E62454E2D7EF",
            "items": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 50,
                 "width": 50,
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_C38F91F1_CFAA_F62B_41DC_84D11640D594_0_HS_2_0.png"
                }
               ]
              },
              "class": "HotspotPanoramaOverlayImage",
              "yaw": -4.87,
              "hfov": 2.87,
              "pitch": -14.28
             }
            ]
           },
           {
            "maps": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 75,
                 "width": 75,
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_C38F91F1_CFAA_F62B_41DC_84D11640D594_0_HS_3_0_0_map.gif"
                }
               ]
              },
              "hfov": 8.23,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": 175.43,
              "pitch": -22.15
             }
            ],
            "rollOverDisplay": false,
            "enabledInCardboard": true,
            "class": "HotspotPanoramaOverlay",
            "areas": [
             {
              "mapColor": "#FF0000",
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.startPanoramaWithCamera(this.panorama_C38F5BC1_CFAA_EA6B_41E1_8125E2043944, this.camera_E1311593_F2E0_BEF6_41E3_78C0CBCD8C75); this.mainPlayList.set('selectedIndex', 10)"
             }
            ],
            "useHandCursor": true,
            "id": "overlay_C3A6D8B8_D054_53AF_41E5_8D81DFB9BE88",
            "items": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 150,
                 "width": 150,
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_C38F91F1_CFAA_F62B_41DC_84D11640D594_0_HS_3_0.png"
                }
               ]
              },
              "class": "HotspotPanoramaOverlayImage",
              "yaw": 175.43,
              "hfov": 8.23,
              "pitch": -22.15
             }
            ]
           },
           {
            "maps": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 75,
                 "width": 75,
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_C38F91F1_CFAA_F62B_41DC_84D11640D594_0_HS_4_0_0_map.gif"
                }
               ]
              },
              "hfov": 7.43,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": -91.6,
              "pitch": -33.21
             }
            ],
            "rollOverDisplay": false,
            "enabledInCardboard": true,
            "class": "HotspotPanoramaOverlay",
            "areas": [
             {
              "mapColor": "#FF0000",
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.startPanoramaWithCamera(this.panorama_C38EAFAB_CFAB_2A3F_41CC_775A0A3219DE, this.camera_E12705A2_F2E0_BED6_41D1_5B74A4E843CE); this.mainPlayList.set('selectedIndex', 12)"
             }
            ],
            "useHandCursor": true,
            "id": "overlay_C5243D00_D04C_325E_41D0_35F9D77AEA4D",
            "items": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 150,
                 "width": 150,
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_C38F91F1_CFAA_F62B_41DC_84D11640D594_0_HS_4_0.png"
                }
               ]
              },
              "class": "HotspotPanoramaOverlayImage",
              "yaw": -91.6,
              "hfov": 7.43,
              "pitch": -33.21
             }
            ]
           },
           {
            "maps": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 119,
                 "width": 15,
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_C38F91F1_CFAA_F62B_41DC_84D11640D594_0_HS_6_0_0_map.gif"
                }
               ]
              },
              "hfov": 6.32,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": -79.21,
              "pitch": -7.53
             }
            ],
            "rollOverDisplay": true,
            "enabledInCardboard": true,
            "class": "HotspotPanoramaOverlay",
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000"
             }
            ],
            "useHandCursor": true,
            "id": "overlay_DE5E407F_D193_5F84_41DF_FD657261646F",
            "items": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 798,
                 "width": 107,
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_C38F91F1_CFAA_F62B_41DC_84D11640D594_0_HS_6_0.png"
                }
               ]
              },
              "class": "HotspotPanoramaOverlayImage",
              "yaw": -79.21,
              "hfov": 6.32,
              "pitch": -7.53
             }
            ]
           },
           {
            "maps": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 25,
                 "width": 16,
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_C38F91F1_CFAA_F62B_41DC_84D11640D594_0_HS_11_0_0_map.gif"
                }
               ]
              },
              "hfov": 13.63,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": -176.34,
              "pitch": 1.9
             }
            ],
            "rollOverDisplay": true,
            "enabledInCardboard": true,
            "class": "HotspotPanoramaOverlay",
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000"
             }
            ],
            "useHandCursor": true,
            "id": "overlay_CB8AB89B_D519_DC89_41CB_E8A4669DC972",
            "items": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 372,
                 "width": 230,
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_C38F91F1_CFAA_F62B_41DC_84D11640D594_0_HS_11_0.png"
                }
               ]
              },
              "class": "HotspotPanoramaOverlayImage",
              "yaw": -176.34,
              "hfov": 13.63,
              "pitch": 1.9
             }
            ]
           },
           {
            "maps": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 200,
                 "width": 18,
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_C38F91F1_CFAA_F62B_41DC_84D11640D594_0_HS_8_1_0_map.gif"
                }
               ]
              },
              "hfov": 5.88,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": -79.81,
              "pitch": -9.77
             }
            ],
            "rollOverDisplay": false,
            "enabledInCardboard": true,
            "class": "HotspotPanoramaOverlay",
            "areas": [
             {
              "toolTip": "Go to\u000aBATHROOM",
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.mainPlayList.set('selectedIndex', 13)",
              "displayTooltipInTouchScreens": true,
              "mapColor": "#FF0000"
             }
            ],
            "useHandCursor": true,
            "id": "overlay_DE256771_D193_A19C_41D9_C2AFAF50EE5F",
            "items": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 1032,
                 "width": 99,
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_C38F91F1_CFAA_F62B_41DC_84D11640D594_0_HS_8_0.png"
                }
               ]
              },
              "class": "HotspotPanoramaOverlayImage",
              "yaw": -79.81,
              "hfov": 5.88,
              "roll": 0,
              "pitch": -9.77
             }
            ]
           },
           {
            "maps": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 175,
                 "width": 144,
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_C38F91F1_CFAA_F62B_41DC_84D11640D594_0_HS_9_1_0_map.gif"
                }
               ]
              },
              "hfov": 16.98,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": -171.67,
              "pitch": 1.9
             }
            ],
            "rollOverDisplay": false,
            "enabledInCardboard": true,
            "class": "HotspotPanoramaOverlay",
            "areas": [
             {
              "toolTip": "Go to\u000aBALCONY",
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.mainPlayList.set('selectedIndex', 23)",
              "displayTooltipInTouchScreens": true,
              "mapColor": "#FF0000"
             }
            ],
            "useHandCursor": true,
            "id": "overlay_DA2BC08E_D40E_CA7E_41D8_E34FFA3E6E87",
            "items": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 351,
                 "width": 288,
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_C38F91F1_CFAA_F62B_41DC_84D11640D594_0_HS_9_0.png"
                }
               ]
              },
              "class": "HotspotPanoramaOverlayImage",
              "yaw": -171.67,
              "hfov": 16.98,
              "roll": 0,
              "pitch": 1.9
             }
            ]
           },
           {
            "maps": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 200,
                 "width": 40,
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_C38F91F1_CFAA_F62B_41DC_84D11640D594_0_HS_10_1_0_map.gif"
                }
               ]
              },
              "hfov": 6,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": 176.91,
              "pitch": -2.46
             }
            ],
            "rollOverDisplay": false,
            "enabledInCardboard": true,
            "class": "HotspotPanoramaOverlay",
            "areas": [
             {
              "toolTip": "Go to\u000aBALCONY",
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.mainPlayList.set('selectedIndex', 23)",
              "displayTooltipInTouchScreens": true,
              "mapColor": "#FF0000"
             }
            ],
            "useHandCursor": true,
            "id": "overlay_DAEB9249_D40F_4EE2_41D8_4E365051C839",
            "items": [
             {
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 495,
                 "width": 101,
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_C38F91F1_CFAA_F62B_41DC_84D11640D594_0_HS_10_0.png"
                }
               ]
              },
              "class": "HotspotPanoramaOverlayImage",
              "yaw": 176.91,
              "hfov": 6,
              "roll": 0,
              "pitch": -2.46
             }
            ]
           }
          ]
         }
        ],
        "label": "10",
        "hfov": 360,
        "hfovMax": 140
       },
       "class": "AdjacentPanorama",
       "yaw": -142.32,
       "distance": 1,
       "backwardYaw": -4.62
      },
      {
       "panorama": "this.panorama_C38FBE07_CFAD_2DF7_41E3_7369EEF66215",
       "class": "AdjacentPanorama",
       "yaw": -140.75,
       "distance": 1,
       "backwardYaw": -8.46
      }
     ],
     "hfovMin": 70,
     "thumbnailUrl": "media/panorama_C38F7808_CFAD_15F9_41D5_C57D64D622F4_t.jpg",
     "id": "panorama_C38F7808_CFAD_15F9_41D5_C57D64D622F4",
     "pitch": 0,
     "partial": false,
     "class": "Panorama",
     "frames": [
      {
       "sphere": {
        "class": "ImageResource",
        "levels": [
         {
          "height": 3040,
          "width": 6080,
          "class": "ImageResourceLevel",
          "url": "media/panorama_C38F7808_CFAD_15F9_41D5_C57D64D622F4_hq.jpeg"
         },
         {
          "height": 1608,
          "width": 3217,
          "class": "ImageResourceLevel",
          "url": "media/panorama_C38F7808_CFAD_15F9_41D5_C57D64D622F4.jpeg"
         }
        ]
       },
       "thumbnailUrl": "media/panorama_C38F7808_CFAD_15F9_41D5_C57D64D622F4_t.jpg",
       "class": "SphericPanoramaFrame",
       "overlays": [
        {
         "maps": [
          {
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 75,
              "width": 75,
              "class": "ImageResourceLevel",
              "url": "media/panorama_C38F7808_CFAD_15F9_41D5_C57D64D622F4_0_HS_0_0_0_map.gif"
             }
            ]
           },
           "hfov": 7.53,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": -140.75,
           "pitch": -31.98
          }
         ],
         "rollOverDisplay": false,
         "enabledInCardboard": true,
         "class": "HotspotPanoramaOverlay",
         "areas": [
          {
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.startPanoramaWithCamera(this.panorama_C38FBE07_CFAD_2DF7_41E3_7369EEF66215, this.camera_E109F059_F2E0_B672_41EA_A04CCEABDD45); this.mainPlayList.set('selectedIndex', 8)"
          }
         ],
         "useHandCursor": true,
         "id": "overlay_C080BC2C_D04C_32A6_41CD_13272ED1E923",
         "items": [
          {
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 150,
              "width": 150,
              "class": "ImageResourceLevel",
              "url": "media/panorama_C38F7808_CFAD_15F9_41D5_C57D64D622F4_0_HS_0_0.png"
             }
            ]
           },
           "class": "HotspotPanoramaOverlayImage",
           "yaw": -140.75,
           "hfov": 7.53,
           "pitch": -31.98
          }
         ]
        },
        {
         "maps": [
          {
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 75,
              "width": 75,
              "class": "ImageResourceLevel",
              "url": "media/panorama_C38F7808_CFAD_15F9_41D5_C57D64D622F4_0_HS_2_0_0_map.gif"
             }
            ]
           },
           "hfov": 7.43,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": 38.23,
           "pitch": -33.21
          }
         ],
         "rollOverDisplay": false,
         "enabledInCardboard": true,
         "class": "HotspotPanoramaOverlay",
         "areas": [
          {
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.startPanoramaWithCamera(this.panorama_C140CB97_CC58_324C_41CC_EF501F0CF72D, this.camera_E11F8013_F2E0_B5F6_41D9_E49BC26E8E28); this.mainPlayList.set('selectedIndex', 0)"
          }
         ],
         "useHandCursor": true,
         "id": "overlay_C0DC1F94_D04C_2E66_41C4_16EEE03BB85E",
         "items": [
          {
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 150,
              "width": 150,
              "class": "ImageResourceLevel",
              "url": "media/panorama_C38F7808_CFAD_15F9_41D5_C57D64D622F4_0_HS_2_0.png"
             }
            ]
           },
           "class": "HotspotPanoramaOverlayImage",
           "yaw": 38.23,
           "hfov": 7.43,
           "pitch": -33.21
          }
         ]
        },
        {
         "maps": [
          {
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 50,
              "width": 50,
              "class": "ImageResourceLevel",
              "url": "media/panorama_C38F7808_CFAD_15F9_41D5_C57D64D622F4_0_HS_3_0_0_map.gif"
             }
            ]
           },
           "hfov": 5.48,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": 93.68,
           "pitch": -22.31
          }
         ],
         "rollOverDisplay": false,
         "enabledInCardboard": true,
         "class": "HotspotPanoramaOverlay",
         "areas": [
          {
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.mainPlayList.set('selectedIndex', 4)"
          }
         ],
         "useHandCursor": true,
         "id": "overlay_C06C2241_D04C_F6E1_41DC_2924D101300C",
         "items": [
          {
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 100,
              "width": 100,
              "class": "ImageResourceLevel",
              "url": "media/panorama_C38F7808_CFAD_15F9_41D5_C57D64D622F4_0_HS_3_0.png"
             }
            ]
           },
           "class": "HotspotPanoramaOverlayImage",
           "yaw": 93.68,
           "hfov": 5.48,
           "pitch": -22.31
          }
         ]
        },
        {
         "maps": [
          {
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 32,
              "width": 16,
              "class": "ImageResourceLevel",
              "url": "media/panorama_C38F7808_CFAD_15F9_41D5_C57D64D622F4_0_HS_5_0_0_map.gif"
             }
            ]
           },
           "hfov": 19.09,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": -142.52,
           "pitch": -8.21
          }
         ],
         "rollOverDisplay": true,
         "enabledInCardboard": true,
         "class": "HotspotPanoramaOverlay",
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000"
          }
         ],
         "useHandCursor": true,
         "id": "overlay_CB704B3C_D124_42BB_41E7_4B64B59ED37F",
         "items": [
          {
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 657,
              "width": 325,
              "class": "ImageResourceLevel",
              "url": "media/panorama_C38F7808_CFAD_15F9_41D5_C57D64D622F4_0_HS_5_0.png"
             }
            ]
           },
           "class": "HotspotPanoramaOverlayImage",
           "yaw": -142.52,
           "hfov": 19.09,
           "pitch": -8.21
          }
         ]
        },
        {
         "maps": [
          {
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 40,
              "width": 15,
              "class": "ImageResourceLevel",
              "url": "media/panorama_C38F7808_CFAD_15F9_41D5_C57D64D622F4_0_HS_6_0_0_map.gif"
             }
            ]
           },
           "hfov": 12.12,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": -176.29,
           "pitch": -6.76
          }
         ],
         "rollOverDisplay": true,
         "enabledInCardboard": true,
         "class": "HotspotPanoramaOverlay",
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000"
          }
         ],
         "useHandCursor": true,
         "id": "overlay_CB2D4ADD_D124_43F5_41A4_B34A42BFAED4",
         "items": [
          {
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 525,
              "width": 206,
              "class": "ImageResourceLevel",
              "url": "media/panorama_C38F7808_CFAD_15F9_41D5_C57D64D622F4_0_HS_6_0.png"
             }
            ]
           },
           "class": "HotspotPanoramaOverlayImage",
           "yaw": -176.29,
           "hfov": 12.12,
           "pitch": -6.76
          }
         ]
        },
        {
         "maps": [
          {
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 56,
              "width": 16,
              "class": "ImageResourceLevel",
              "url": "media/panorama_C38F7808_CFAD_15F9_41D5_C57D64D622F4_0_HS_7_0_0_map.gif"
             }
            ]
           },
           "hfov": 8.67,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": 3.25,
           "pitch": -5.85
          }
         ],
         "rollOverDisplay": true,
         "enabledInCardboard": true,
         "class": "HotspotPanoramaOverlay",
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "mapColor": "#FF0000"
          }
         ],
         "useHandCursor": true,
         "id": "overlay_C880B40E_D12C_4657_41D6_4DC92B29470E",
         "items": [
          {
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 519,
              "width": 147,
              "class": "ImageResourceLevel",
              "url": "media/panorama_C38F7808_CFAD_15F9_41D5_C57D64D622F4_0_HS_7_0.png"
             }
            ]
           },
           "class": "HotspotPanoramaOverlayImage",
           "yaw": 3.25,
           "hfov": 8.67,
           "pitch": -5.85
          }
         ]
        },
        {
         "maps": [
          {
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 200,
              "width": 63,
              "class": "ImageResourceLevel",
              "url": "media/panorama_C38F7808_CFAD_15F9_41D5_C57D64D622F4_0_HS_10_1_0_map.gif"
             }
            ]
           },
           "hfov": 10.68,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": 3.21,
           "pitch": -6.51
          }
         ],
         "rollOverDisplay": false,
         "enabledInCardboard": true,
         "class": "HotspotPanoramaOverlay",
         "areas": [
          {
           "toolTip": "Go to\u000aKITCHEN",
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.mainPlayList.set('selectedIndex', 2)",
           "displayTooltipInTouchScreens": true,
           "mapColor": "#FF0000"
          }
         ],
         "useHandCursor": true,
         "id": "overlay_C6AE1E75_D124_42CA_41D2_4881816710BA",
         "items": [
          {
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 571,
              "width": 180,
              "class": "ImageResourceLevel",
              "url": "media/panorama_C38F7808_CFAD_15F9_41D5_C57D64D622F4_0_HS_10_0.png"
             }
            ]
           },
           "class": "HotspotPanoramaOverlayImage",
           "yaw": 3.21,
           "hfov": 10.68,
           "roll": 0,
           "pitch": -6.51
          }
         ]
        },
        {
         "maps": [
          {
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 200,
              "width": 118,
              "class": "ImageResourceLevel",
              "url": "media/panorama_C38F7808_CFAD_15F9_41D5_C57D64D622F4_0_HS_11_1_0_map.gif"
             }
            ]
           },
           "hfov": 24.59,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": -142.32,
           "pitch": -8.22
          }
         ],
         "rollOverDisplay": false,
         "enabledInCardboard": true,
         "class": "HotspotPanoramaOverlay",
         "areas": [
          {
           "toolTip": "Go to\u000aBEDROOM 1",
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.startPanoramaWithCamera(this.panorama_C38F91F1_CFAA_F62B_41DC_84D11640D594, this.camera_E103C03E_F2E0_B62E_41D9_21BDB73018A1); this.mainPlayList.set('selectedIndex', 9)",
           "displayTooltipInTouchScreens": true,
           "mapColor": "#FF0000"
          }
         ],
         "useHandCursor": true,
         "id": "overlay_C82050DB_D124_5FFD_41E1_33DB5AD37C0E",
         "items": [
          {
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 708,
              "width": 421,
              "class": "ImageResourceLevel",
              "url": "media/panorama_C38F7808_CFAD_15F9_41D5_C57D64D622F4_0_HS_11_0.png"
             }
            ]
           },
           "class": "HotspotPanoramaOverlayImage",
           "yaw": -142.32,
           "hfov": 24.59,
           "roll": 0,
           "pitch": -8.22
          }
         ]
        },
        {
         "maps": [
          {
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 200,
              "width": 61,
              "class": "ImageResourceLevel",
              "url": "media/panorama_C38F7808_CFAD_15F9_41D5_C57D64D622F4_0_HS_12_1_0_map.gif"
             }
            ]
           },
           "hfov": 10.3,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": -174.9,
           "pitch": -6.41
          }
         ],
         "rollOverDisplay": false,
         "enabledInCardboard": true,
         "class": "HotspotPanoramaOverlay",
         "areas": [
          {
           "toolTip": "Go to\u000aBEDROOM 2",
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.mainPlayList.set('selectedIndex', 14)",
           "displayTooltipInTouchScreens": true,
           "mapColor": "#FF0000"
          }
         ],
         "useHandCursor": true,
         "id": "overlay_C932CA71_D124_42CA_41BF_672A7C1DFCCC",
         "items": [
          {
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 571,
              "width": 174,
              "class": "ImageResourceLevel",
              "url": "media/panorama_C38F7808_CFAD_15F9_41D5_C57D64D622F4_0_HS_12_0.png"
             }
            ]
           },
           "class": "HotspotPanoramaOverlayImage",
           "yaw": -174.9,
           "hfov": 10.3,
           "roll": 0,
           "pitch": -6.41
          }
         ]
        },
        {
         "maps": [
          {
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 200,
              "width": 29,
              "class": "ImageResourceLevel",
              "url": "media/panorama_C38F7808_CFAD_15F9_41D5_C57D64D622F4_0_HS_13_1_0_map.gif"
             }
            ]
           },
           "hfov": 4.9,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": 177.49,
           "pitch": -7.32
          }
         ],
         "rollOverDisplay": false,
         "enabledInCardboard": true,
         "class": "HotspotPanoramaOverlay",
         "areas": [
          {
           "toolTip": "Go to\u000aBEDROOM 2",
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.mainPlayList.set('selectedIndex', 14)",
           "displayTooltipInTouchScreens": true,
           "mapColor": "#FF0000"
          }
         ],
         "useHandCursor": true,
         "id": "overlay_C8F8C945_D124_4ED0_4189_22AB7AA9A9E7",
         "items": [
          {
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 554,
              "width": 82,
              "class": "ImageResourceLevel",
              "url": "media/panorama_C38F7808_CFAD_15F9_41D5_C57D64D622F4_0_HS_13_0.png"
             }
            ]
           },
           "class": "HotspotPanoramaOverlayImage",
           "yaw": 177.49,
           "hfov": 4.9,
           "roll": 0,
           "pitch": -7.32
          }
         ]
        }
       ]
      }
     ],
     "label": "9",
     "hfov": 360,
     "hfovMax": 140
    },
    "class": "AdjacentPanorama",
    "yaw": -9.69,
    "distance": 1,
    "backwardYaw": 38.23
   },
   {
    "panorama": "this.panorama_C38F91F1_CFAA_F62B_41DC_84D11640D594",
    "class": "AdjacentPanorama",
    "yaw": -10.14,
    "distance": 1,
    "backwardYaw": -4.87
   },
   {
    "panorama": "this.panorama_C38F3FF0_CFAD_6A29_41D8_A9DC4E7E1521",
    "class": "AdjacentPanorama",
    "yaw": -96.11,
    "distance": 1,
    "backwardYaw": 66.9
   },
   {
    "panorama": "this.panorama_C38FBE07_CFAD_2DF7_41E3_7369EEF66215",
    "class": "AdjacentPanorama",
    "yaw": -9.53,
    "distance": 1,
    "backwardYaw": -8.3
   },
   {
    "panorama": "this.panorama_C2BD4D90_CFAD_EEE9_41E8_7D7C7C35C1B9",
    "class": "AdjacentPanorama",
    "yaw": 88.2,
    "distance": 1,
    "backwardYaw": -82.18
   }
  ],
  "hfovMin": 70,
  "thumbnailUrl": "media/panorama_C140CB97_CC58_324C_41CC_EF501F0CF72D_t.jpg",
  "id": "panorama_C140CB97_CC58_324C_41CC_EF501F0CF72D",
  "pitch": 0,
  "partial": false,
  "class": "Panorama",
  "frames": [
   {
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3040,
       "width": 6080,
       "class": "ImageResourceLevel",
       "url": "media/panorama_C140CB97_CC58_324C_41CC_EF501F0CF72D_hq.jpeg"
      },
      {
       "height": 1608,
       "width": 3217,
       "class": "ImageResourceLevel",
       "url": "media/panorama_C140CB97_CC58_324C_41CC_EF501F0CF72D.jpeg"
      }
     ]
    },
    "thumbnailUrl": "media/panorama_C140CB97_CC58_324C_41CC_EF501F0CF72D_t.jpg",
    "class": "SphericPanoramaFrame",
    "overlays": [
     {
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 16,
           "width": 16,
           "class": "ImageResourceLevel",
           "url": "media/panorama_C140CB97_CC58_324C_41CC_EF501F0CF72D_0_HS_0_0_0_map.gif"
          }
         ]
        },
        "hfov": 7.99,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -96.11,
        "pitch": -25.84
       }
      ],
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_C38F3FF0_CFAD_6A29_41D8_A9DC4E7E1521, this.camera_E1B33E5C_F2E0_AA72_41B4_3DA4EB721985); this.mainPlayList.set('selectedIndex', 4)"
       }
      ],
      "useHandCursor": true,
      "id": "overlay_C2F14BCA_CFAB_2A79_41D0_66D663EB2D0E",
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 150,
           "width": 150,
           "class": "ImageResourceLevel",
           "url": "media/panorama_C140CB97_CC58_324C_41CC_EF501F0CF72D_0_HS_0_0.png"
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "yaw": -96.11,
        "hfov": 7.99,
        "pitch": -25.84
       }
      ]
     },
     {
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 16,
           "width": 16,
           "class": "ImageResourceLevel",
           "url": "media/panorama_C140CB97_CC58_324C_41CC_EF501F0CF72D_0_HS_1_0_0_map.gif"
          }
         ]
        },
        "hfov": 7.53,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -9.69,
        "pitch": -31.98
       }
      ],
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_C38F7808_CFAD_15F9_41D5_C57D64D622F4, this.camera_E1CE8E3A_F2E0_AA36_41C0_1229EEE7D1BE); this.mainPlayList.set('selectedIndex', 7)"
       }
      ],
      "useHandCursor": true,
      "id": "overlay_C27834CA_CFAA_FE79_41D9_294020E83BB0",
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 150,
           "width": 150,
           "class": "ImageResourceLevel",
           "url": "media/panorama_C140CB97_CC58_324C_41CC_EF501F0CF72D_0_HS_1_0.png"
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "yaw": -9.69,
        "hfov": 7.53,
        "pitch": -31.98
       }
      ]
     },
     {
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 16,
           "width": 16,
           "class": "ImageResourceLevel",
           "url": "media/panorama_C140CB97_CC58_324C_41CC_EF501F0CF72D_0_HS_2_0_0_map.gif"
          }
         ]
        },
        "hfov": 5.61,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -9.53,
        "pitch": -18.63
       }
      ],
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_C38FBE07_CFAD_2DF7_41E3_7369EEF66215, this.camera_E1BE1E6E_F2E0_AA2E_41D3_E028526DC383); this.mainPlayList.set('selectedIndex', 8)"
       }
      ],
      "useHandCursor": true,
      "id": "overlay_C1B1500C_CFB5_35F9_41E2_97B5CCFC240B",
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 100,
           "width": 100,
           "class": "ImageResourceLevel",
           "url": "media/panorama_C140CB97_CC58_324C_41CC_EF501F0CF72D_0_HS_2_0.png"
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "yaw": -9.53,
        "hfov": 5.61,
        "pitch": -18.63
       }
      ]
     },
     {
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 16,
           "width": 16,
           "class": "ImageResourceLevel",
           "url": "media/panorama_C140CB97_CC58_324C_41CC_EF501F0CF72D_0_HS_3_0_0_map.gif"
          }
         ]
        },
        "hfov": 7.4,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 88.2,
        "pitch": -33.62
       }
      ],
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_C2BD4D90_CFAD_EEE9_41E8_7D7C7C35C1B9, this.camera_E1B83E7F_F2E0_AA2E_41E0_20D0A08E433D); this.mainPlayList.set('selectedIndex', 1)"
       }
      ],
      "useHandCursor": true,
      "id": "overlay_C24E8D54_CFB5_6E69_41C9_C54527736E1D",
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 150,
           "width": 150,
           "class": "ImageResourceLevel",
           "url": "media/panorama_C140CB97_CC58_324C_41CC_EF501F0CF72D_0_HS_3_0.png"
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "yaw": 88.2,
        "hfov": 7.4,
        "pitch": -33.62
       }
      ]
     },
     {
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 33,
           "width": 16,
           "class": "ImageResourceLevel",
           "url": "media/panorama_C140CB97_CC58_324C_41CC_EF501F0CF72D_0_HS_12_0_0_map.gif"
          }
         ]
        },
        "hfov": 10.48,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -9.74,
        "pitch": -4.22
       }
      ],
      "rollOverDisplay": true,
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 9)"
       }
      ],
      "useHandCursor": true,
      "id": "overlay_C7479790_D16C_C24A_41D0_2E2755C92C8D",
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 371,
           "width": 177,
           "class": "ImageResourceLevel",
           "url": "media/panorama_C140CB97_CC58_324C_41CC_EF501F0CF72D_0_HS_12_0.png"
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "yaw": -9.74,
        "hfov": 10.48,
        "pitch": -4.22
       }
      ]
     },
     {
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 115,
           "width": 16,
           "class": "ImageResourceLevel",
           "url": "media/panorama_C140CB97_CC58_324C_41CC_EF501F0CF72D_0_HS_13_0_0_map.gif"
          }
         ]
        },
        "hfov": 5.98,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 97.87,
        "pitch": -9.25
       }
      ],
      "rollOverDisplay": true,
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "useHandCursor": true,
      "id": "overlay_C7F6AF6D_D164_C2D5_41E4_7B69374C2811",
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 738,
           "width": 102,
           "class": "ImageResourceLevel",
           "url": "media/panorama_C140CB97_CC58_324C_41CC_EF501F0CF72D_0_HS_13_0.png"
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "yaw": 97.87,
        "hfov": 5.98,
        "pitch": -9.25
       }
      ]
     },
     {
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 32,
           "width": 16,
           "class": "ImageResourceLevel",
           "url": "media/panorama_C140CB97_CC58_324C_41CC_EF501F0CF72D_0_HS_14_0_0_map.gif"
          }
         ]
        },
        "hfov": 8.7,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -30.88,
        "pitch": -3.04
       }
      ],
      "rollOverDisplay": true,
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "useHandCursor": true,
      "id": "overlay_C64C097C_D163_CEBB_41E2_F1243B659B76",
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 298,
           "width": 147,
           "class": "ImageResourceLevel",
           "url": "media/panorama_C140CB97_CC58_324C_41CC_EF501F0CF72D_0_HS_14_0.png"
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "yaw": -30.88,
        "hfov": 8.7,
        "pitch": -3.04
       }
      ]
     },
     {
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 190,
           "width": 105,
           "class": "ImageResourceLevel",
           "url": "media/panorama_C140CB97_CC58_324C_41CC_EF501F0CF72D_0_HS_6_1_0_map.gif"
          }
         ]
        },
        "hfov": 12.4,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -10.14,
        "pitch": -4.23
       }
      ],
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "toolTip": "Go to\u000aBEDROOM 1",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_C38F91F1_CFAA_F62B_41DC_84D11640D594, this.camera_E1C9CE4A_F2E0_AA56_41AC_C8E45E842362); this.mainPlayList.set('selectedIndex', 9)",
        "displayTooltipInTouchScreens": true,
        "mapColor": "#FF0000"
       }
      ],
      "useHandCursor": true,
      "id": "overlay_DE6457FD_D125_C1B0_41CD_13CD49347246",
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 381,
           "width": 210,
           "class": "ImageResourceLevel",
           "url": "media/panorama_C140CB97_CC58_324C_41CC_EF501F0CF72D_0_HS_6_0.png"
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "yaw": -10.14,
        "hfov": 12.4,
        "roll": 0,
        "pitch": -4.23
       }
      ]
     },
     {
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 162,
           "width": 92,
           "class": "ImageResourceLevel",
           "url": "media/panorama_C140CB97_CC58_324C_41CC_EF501F0CF72D_0_HS_7_1_0_map.gif"
          }
         ]
        },
        "hfov": 10.92,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -31.18,
        "pitch": -2.51
       }
      ],
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "toolTip": "Go To\u000aBEDROOM 2",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 14)",
        "displayTooltipInTouchScreens": true,
        "mapColor": "#FF0000"
       }
      ],
      "useHandCursor": true,
      "id": "overlay_C1226BCB_D13C_C1DD_4172_976B6F468C42",
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 324,
           "width": 184,
           "class": "ImageResourceLevel",
           "url": "media/panorama_C140CB97_CC58_324C_41CC_EF501F0CF72D_0_HS_7_0.png"
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "yaw": -31.18,
        "hfov": 10.92,
        "roll": 0,
        "pitch": -2.51
       }
      ]
     },
     {
      "maps": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 200,
           "width": 21,
           "class": "ImageResourceLevel",
           "url": "media/panorama_C140CB97_CC58_324C_41CC_EF501F0CF72D_0_HS_8_1_0_map.gif"
          }
         ]
        },
        "hfov": 6.27,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 97.51,
        "pitch": -11.14
       }
      ],
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "toolTip": "Go to\u000aKITCHEN",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 2)",
        "displayTooltipInTouchScreens": true,
        "mapColor": "#FF0000"
       }
      ],
      "useHandCursor": true,
      "id": "overlay_C1EA3F08_D123_C25A_41E9_08832872ABB9",
      "items": [
       {
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 988,
           "width": 106,
           "class": "ImageResourceLevel",
           "url": "media/panorama_C140CB97_CC58_324C_41CC_EF501F0CF72D_0_HS_8_0.png"
          }
         ]
        },
        "class": "HotspotPanoramaOverlayImage",
        "yaw": 97.51,
        "hfov": 6.27,
        "roll": 0,
        "pitch": -11.14
       }
      ]
     }
    ]
   }
  ],
  "label": "Fur 2 Bed",
  "hfov": 360,
  "hfovMax": 140
 },
 {
  "gyroscopeVerticalDraggingEnabled": true,
  "preloadEnabled": false,
  "buttonCardboardView": {
   "toolTipBorderRadius": 3,
   "toolTipShadowVerticalLength": 0,
   "borderRadius": 0,
   "toolTipFontStyle": "normal",
   "toolTipBorderColor": "#767676",
   "toolTipTextShadowOpacity": 0,
   "verticalAlign": "middle",
   "paddingTop": 0,
   "width": 42,
   "toolTipPaddingRight": 6,
   "toolTipTextShadowBlurRadius": 3,
   "toolTipFontFamily": "Arial",
   "height": 47,
   "backgroundOpacity": 0,
   "mode": "push",
   "class": "IconButton",
   "toolTip": "VR",
   "toolTipBackgroundColor": "#F6F6F6",
   "minWidth": 1,
   "toolTipPaddingLeft": 6,
   "horizontalAlign": "center",
   "transparencyActive": true,
   "toolTipFontSize": 12,
   "toolTipFontColor": "#606060",
   "toolTipOpacity": 1,
   "cursor": "hand",
   "shadow": false,
   "paddingRight": 0,
   "minHeight": 1,
   "id": "IconButton_F84B218A_E3D7_9545_41E3_91BEF5236893",
   "borderSize": 0,
   "toolTipPaddingBottom": 4,
   "maxWidth": 55,
   "toolTipShadowSpread": 0,
   "toolTipBorderSize": 1,
   "paddingBottom": 0,
   "toolTipFontWeight": "normal",
   "maxHeight": 54,
   "toolTipShadowOpacity": 1,
   "paddingLeft": 0,
   "toolTipPaddingTop": 4,
   "toolTipShadowHorizontalLength": 0,
   "toolTipShadowColor": "#333333",
   "toolTipTextShadowColor": "#000000",
   "iconURL": "skin/IconButton_F84B218A_E3D7_9545_41E3_91BEF5236893.png",
   "toolTipShadowBlurRadius": 3
  },
  "class": "PanoramaPlayer",
  "buttonPlay": {
   "toolTipBorderRadius": 3,
   "pressedIconURL": "skin/Button_FDF1F975_E3DB_95CE_41E5_C0C8C9BB93CD_pressed.png",
   "borderRadius": 0,
   "rollOverIconHeight": 38,
   "toolTipFontStyle": "normal",
   "toolTipBorderColor": "#767676",
   "backgroundColor": [
    "#5794FE",
    "#0065CD"
   ],
   "pressedIconWidth": 38,
   "toolTipTextShadowOpacity": 0,
   "verticalAlign": "middle",
   "paddingTop": 0,
   "width": 38,
   "toolTipPaddingRight": 6,
   "layout": "horizontal",
   "toolTipTextShadowBlurRadius": 3,
   "toolTipFontFamily": "Arial",
   "height": 38,
   "backgroundOpacity": 0,
   "mode": "push",
   "class": "Button",
   "iconHeight": 38,
   "toolTip": "Play",
   "shadowSpread": 1,
   "backgroundColorRatios": [
    0,
    1
   ],
   "toolTipBackgroundColor": "#F6F6F6",
   "minWidth": 0,
   "gap": 0,
   "toolTipPaddingLeft": 6,
   "horizontalAlign": "center",
   "fontSize": 12,
   "rollOverIconWidth": 38,
   "iconBeforeLabel": true,
   "toolTipFontSize": 12,
   "fontWeight": "normal",
   "toolTipFontColor": "#606060",
   "backgroundColorDirection": "vertical",
   "rollOverBackgroundOpacity": 0,
   "toolTipOpacity": 1,
   "fontColor": "#FFFFFF",
   "iconWidth": 38,
   "cursor": "hand",
   "rollOverIconURL": "skin/Button_FDF1F975_E3DB_95CE_41E5_C0C8C9BB93CD_rollover.png",
   "shadow": false,
   "borderColor": "#000000",
   "paddingRight": 0,
   "textDecoration": "none",
   "minHeight": 0,
   "toolTipBorderSize": 1,
   "fontFamily": "Arial",
   "borderSize": 0,
   "toolTipPaddingBottom": 4,
   "shadowBlurRadius": 6,
   "toolTipShadowSpread": 0,
   "id": "Button_FDF1F975_E3DB_95CE_41E5_C0C8C9BB93CD",
   "paddingBottom": 0,
   "toolTipFontWeight": "normal",
   "toolTipShadowOpacity": 1,
   "fontStyle": "normal",
   "shadowColor": "#000000",
   "paddingLeft": 0,
   "toolTipPaddingTop": 4,
   "toolTipShadowHorizontalLength": 0,
   "pressedIconHeight": 38,
   "toolTipShadowColor": "#333333",
   "toolTipShadowVerticalLength": 0,
   "toolTipTextShadowColor": "#000000",
   "iconURL": "skin/Button_FDF1F975_E3DB_95CE_41E5_C0C8C9BB93CD.png",
   "pressedBackgroundOpacity": 0,
   "toolTipShadowBlurRadius": 3
  },
  "mouseControlMode": "drag_acceleration",
  "viewerArea": "this.MainViewer",
  "buttonZoomIn": {
   "toolTipBorderRadius": 3,
   "pressedIconURL": "skin/Button_FEF3ED90_E3E8_AD46_41D6_2DA6145DF309_pressed.png",
   "borderRadius": 0,
   "rollOverIconHeight": 32,
   "toolTipFontStyle": "normal",
   "toolTipBorderColor": "#767676",
   "backgroundColor": [
    "#5794FE",
    "#0065CD"
   ],
   "pressedIconWidth": 32,
   "toolTipTextShadowOpacity": 0,
   "verticalAlign": "middle",
   "paddingTop": 0,
   "width": 32,
   "toolTipPaddingRight": 6,
   "layout": "horizontal",
   "toolTipTextShadowBlurRadius": 3,
   "toolTipFontFamily": "Arial",
   "height": 32,
   "backgroundOpacity": 0,
   "mode": "push",
   "class": "Button",
   "iconHeight": 32,
   "toolTip": "Zoom in",
   "shadowSpread": 1,
   "backgroundColorRatios": [
    0,
    1
   ],
   "toolTipBackgroundColor": "#F6F6F6",
   "minWidth": 0,
   "gap": 0,
   "toolTipPaddingLeft": 6,
   "horizontalAlign": "center",
   "fontSize": 12,
   "rollOverIconWidth": 32,
   "iconBeforeLabel": true,
   "toolTipFontSize": 12,
   "fontWeight": "normal",
   "toolTipFontColor": "#606060",
   "backgroundColorDirection": "vertical",
   "rollOverBackgroundOpacity": 0,
   "toolTipOpacity": 1,
   "fontColor": "#FFFFFF",
   "iconWidth": 32,
   "cursor": "hand",
   "rollOverIconURL": "skin/Button_FEF3ED90_E3E8_AD46_41D6_2DA6145DF309_rollover.png",
   "shadow": false,
   "borderColor": "#000000",
   "paddingRight": 0,
   "textDecoration": "none",
   "minHeight": 0,
   "toolTipBorderSize": 1,
   "fontFamily": "Arial",
   "borderSize": 0,
   "toolTipPaddingBottom": 4,
   "shadowBlurRadius": 6,
   "toolTipShadowSpread": 0,
   "id": "Button_FEF3ED90_E3E8_AD46_41D6_2DA6145DF309",
   "paddingBottom": 0,
   "toolTipFontWeight": "normal",
   "toolTipShadowOpacity": 1,
   "fontStyle": "normal",
   "shadowColor": "#000000",
   "paddingLeft": 0,
   "toolTipPaddingTop": 4,
   "toolTipShadowHorizontalLength": 0,
   "pressedIconHeight": 32,
   "toolTipShadowColor": "#333333",
   "toolTipShadowVerticalLength": 0,
   "toolTipTextShadowColor": "#000000",
   "iconURL": "skin/Button_FEF3ED90_E3E8_AD46_41D6_2DA6145DF309.png",
   "pressedBackgroundOpacity": 0,
   "toolTipShadowBlurRadius": 3
  },
  "displayPlaybackBar": true,
  "id": "MainViewerPanoramaPlayer",
  "touchControlMode": "drag_rotation",
  "buttonZoomOut": {
   "toolTipBorderRadius": 3,
   "pressedIconURL": "skin/Button_FF765C95_E3E8_934E_41E9_93B5590FB7F9_pressed.png",
   "borderRadius": 0,
   "rollOverIconHeight": 32,
   "toolTipFontStyle": "normal",
   "toolTipBorderColor": "#767676",
   "backgroundColor": [
    "#5794FE",
    "#0065CD"
   ],
   "pressedIconWidth": 32,
   "toolTipTextShadowOpacity": 0,
   "verticalAlign": "middle",
   "paddingTop": 0,
   "width": 32,
   "toolTipPaddingRight": 6,
   "layout": "horizontal",
   "toolTipTextShadowBlurRadius": 3,
   "toolTipFontFamily": "Arial",
   "height": 32,
   "backgroundOpacity": 0,
   "mode": "push",
   "class": "Button",
   "iconHeight": 32,
   "toolTip": "Zoom out",
   "shadowSpread": 1,
   "backgroundColorRatios": [
    0,
    1
   ],
   "toolTipBackgroundColor": "#F6F6F6",
   "minWidth": 0,
   "gap": 0,
   "toolTipPaddingLeft": 6,
   "horizontalAlign": "center",
   "fontSize": 12,
   "rollOverIconWidth": 32,
   "iconBeforeLabel": true,
   "toolTipFontSize": 12,
   "fontWeight": "normal",
   "toolTipFontColor": "#606060",
   "backgroundColorDirection": "vertical",
   "rollOverBackgroundOpacity": 0,
   "toolTipOpacity": 1,
   "fontColor": "#FFFFFF",
   "iconWidth": 32,
   "cursor": "hand",
   "rollOverIconURL": "skin/Button_FF765C95_E3E8_934E_41E9_93B5590FB7F9_rollover.png",
   "shadow": false,
   "borderColor": "#000000",
   "paddingRight": 0,
   "textDecoration": "none",
   "minHeight": 0,
   "toolTipBorderSize": 1,
   "fontFamily": "Arial",
   "borderSize": 0,
   "toolTipPaddingBottom": 4,
   "shadowBlurRadius": 6,
   "toolTipShadowSpread": 0,
   "id": "Button_FF765C95_E3E8_934E_41E9_93B5590FB7F9",
   "paddingBottom": 0,
   "toolTipFontWeight": "normal",
   "toolTipShadowOpacity": 1,
   "fontStyle": "normal",
   "shadowColor": "#000000",
   "paddingLeft": 0,
   "toolTipPaddingTop": 4,
   "toolTipShadowHorizontalLength": 0,
   "pressedIconHeight": 32,
   "toolTipShadowColor": "#333333",
   "toolTipShadowVerticalLength": 0,
   "toolTipTextShadowColor": "#000000",
   "iconURL": "skin/Button_FF765C95_E3E8_934E_41E9_93B5590FB7F9.png",
   "pressedBackgroundOpacity": 0,
   "toolTipShadowBlurRadius": 3
  }
 },
 {
  "timeToIdle": 5000,
  "class": "PanoramaCamera",
  "id": "panorama_C140CB97_CC58_324C_41CC_EF501F0CF72D_camera",
  "initialPosition": {
   "hfov": 100,
   "class": "PanoramaCameraPosition",
   "yaw": -37.13,
   "pitch": -8.57
  },
  "automaticZoomSpeed": 10,
  "idleSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [],
   "restartMovementOnUserInteraction": false
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 29,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "cubic_in"
    },
    {
     "yawDelta": 302,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "linear"
    },
    {
     "yawDelta": 29,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 "this.panorama_C2BD4D90_CFAD_EEE9_41E8_7D7C7C35C1B9",
 {
  "timeToIdle": 5000,
  "class": "PanoramaCamera",
  "id": "panorama_C2BD4D90_CFAD_EEE9_41E8_7D7C7C35C1B9_camera",
  "initialPosition": {
   "hfov": 100,
   "class": "PanoramaCameraPosition",
   "yaw": -32.86,
   "pitch": -14.54
  },
  "automaticZoomSpeed": 10,
  "idleSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [],
   "restartMovementOnUserInteraction": false
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 29,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "cubic_in"
    },
    {
     "yawDelta": 302,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "linear"
    },
    {
     "yawDelta": 29,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 "this.panorama_C38BAB46_CFAD_6A69_41E9_631E1BE3FFAB",
 {
  "timeToIdle": 5000,
  "class": "PanoramaCamera",
  "id": "panorama_C38BAB46_CFAD_6A69_41E9_631E1BE3FFAB_camera",
  "initialPosition": {
   "hfov": 100,
   "class": "PanoramaCameraPosition",
   "yaw": -147.19,
   "pitch": -9.49
  },
  "automaticZoomSpeed": 10,
  "idleSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [],
   "restartMovementOnUserInteraction": false
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 29,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "cubic_in"
    },
    {
     "yawDelta": 302,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "linear"
    },
    {
     "yawDelta": 29,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 "this.panorama_C38FD600_CFAD_7DE9_41DE_12D7FD2889AD",
 {
  "timeToIdle": 5000,
  "class": "PanoramaCamera",
  "id": "panorama_C38FD600_CFAD_7DE9_41DE_12D7FD2889AD_camera",
  "initialPosition": {
   "hfov": 100,
   "class": "PanoramaCameraPosition",
   "yaw": 90.46,
   "pitch": -20.71
  },
  "automaticZoomSpeed": 10,
  "idleSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [],
   "restartMovementOnUserInteraction": false
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 29,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "cubic_in"
    },
    {
     "yawDelta": 302,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "linear"
    },
    {
     "yawDelta": 29,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 "this.panorama_C38F3FF0_CFAD_6A29_41D8_A9DC4E7E1521",
 {
  "timeToIdle": 5000,
  "class": "PanoramaCamera",
  "id": "panorama_C38F3FF0_CFAD_6A29_41D8_A9DC4E7E1521_camera",
  "initialPosition": {
   "hfov": 100,
   "class": "PanoramaCameraPosition",
   "yaw": 12.68,
   "pitch": -5.56
  },
  "automaticZoomSpeed": 10,
  "idleSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [],
   "restartMovementOnUserInteraction": false
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 29,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "cubic_in"
    },
    {
     "yawDelta": 302,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "linear"
    },
    {
     "yawDelta": 29,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 "this.panorama_C38F9A09_CFAD_15FB_41D2_530F2E7196E8",
 {
  "timeToIdle": 5000,
  "class": "PanoramaCamera",
  "id": "panorama_C38F9A09_CFAD_15FB_41D2_530F2E7196E8_camera",
  "initialPosition": {
   "hfov": 100,
   "class": "PanoramaCameraPosition",
   "yaw": 169.24,
   "pitch": -21.21
  },
  "automaticZoomSpeed": 10,
  "idleSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [],
   "restartMovementOnUserInteraction": false
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 29,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "cubic_in"
    },
    {
     "yawDelta": 302,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "linear"
    },
    {
     "yawDelta": 29,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 "this.panorama_C38F43B8_CFAD_3A19_41E9_7D6FC4197EA0",
 {
  "timeToIdle": 5000,
  "class": "PanoramaCamera",
  "id": "panorama_C38F43B8_CFAD_3A19_41E9_7D6FC4197EA0_camera",
  "initialPosition": {
   "hfov": 100,
   "class": "PanoramaCameraPosition",
   "yaw": -7.47,
   "pitch": -8.47
  },
  "automaticZoomSpeed": 10,
  "idleSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [],
   "restartMovementOnUserInteraction": false
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 29,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "cubic_in"
    },
    {
     "yawDelta": 302,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "linear"
    },
    {
     "yawDelta": 29,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 "this.panorama_C38F7808_CFAD_15F9_41D5_C57D64D622F4",
 {
  "timeToIdle": 5000,
  "class": "PanoramaCamera",
  "id": "panorama_C38F7808_CFAD_15F9_41D5_C57D64D622F4_camera",
  "initialPosition": {
   "hfov": 100,
   "class": "PanoramaCameraPosition",
   "yaw": 136.91,
   "pitch": -12.09
  },
  "automaticZoomSpeed": 10,
  "idleSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [],
   "restartMovementOnUserInteraction": false
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 29,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "cubic_in"
    },
    {
     "yawDelta": 302,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "linear"
    },
    {
     "yawDelta": 29,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 "this.panorama_C38FBE07_CFAD_2DF7_41E3_7369EEF66215",
 {
  "timeToIdle": 5000,
  "class": "PanoramaCamera",
  "id": "panorama_C38FBE07_CFAD_2DF7_41E3_7369EEF66215_camera",
  "initialPosition": {
   "hfov": 100,
   "class": "PanoramaCameraPosition",
   "yaw": 20.33,
   "pitch": -9.67
  },
  "automaticZoomSpeed": 10,
  "idleSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [],
   "restartMovementOnUserInteraction": false
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 29,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "cubic_in"
    },
    {
     "yawDelta": 302,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "linear"
    },
    {
     "yawDelta": 29,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 "this.panorama_C38F91F1_CFAA_F62B_41DC_84D11640D594",
 {
  "timeToIdle": 5000,
  "class": "PanoramaCamera",
  "id": "panorama_C38F91F1_CFAA_F62B_41DC_84D11640D594_camera",
  "initialPosition": {
   "hfov": 100,
   "class": "PanoramaCameraPosition",
   "yaw": -147.36,
   "pitch": -10.72
  },
  "automaticZoomSpeed": 10,
  "idleSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [],
   "restartMovementOnUserInteraction": false
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 29,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "cubic_in"
    },
    {
     "yawDelta": 302,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "linear"
    },
    {
     "yawDelta": 29,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 "this.panorama_C38F5BC1_CFAA_EA6B_41E1_8125E2043944",
 {
  "timeToIdle": 5000,
  "class": "PanoramaCamera",
  "id": "panorama_C38F5BC1_CFAA_EA6B_41E1_8125E2043944_camera",
  "initialPosition": {
   "hfov": 100,
   "class": "PanoramaCameraPosition",
   "yaw": -23.34,
   "pitch": -11.15
  },
  "automaticZoomSpeed": 10,
  "idleSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [],
   "restartMovementOnUserInteraction": false
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 29,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "cubic_in"
    },
    {
     "yawDelta": 302,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "linear"
    },
    {
     "yawDelta": 29,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 "this.panorama_C38E7574_CFAB_1E29_41CE_7A87CFA9BD69",
 {
  "timeToIdle": 5000,
  "class": "PanoramaCamera",
  "id": "panorama_C38E7574_CFAB_1E29_41CE_7A87CFA9BD69_camera",
  "initialPosition": {
   "hfov": 100,
   "class": "PanoramaCameraPosition",
   "yaw": -9.58,
   "pitch": -23.34
  },
  "automaticZoomSpeed": 10,
  "idleSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [],
   "restartMovementOnUserInteraction": false
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 29,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "cubic_in"
    },
    {
     "yawDelta": 302,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "linear"
    },
    {
     "yawDelta": 29,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 "this.panorama_C38EAFAB_CFAB_2A3F_41CC_775A0A3219DE",
 {
  "timeToIdle": 5000,
  "class": "PanoramaCamera",
  "id": "panorama_C38EAFAB_CFAB_2A3F_41CC_775A0A3219DE_camera",
  "initialPosition": {
   "hfov": 100,
   "class": "PanoramaCameraPosition",
   "yaw": -32.98,
   "pitch": -15.64
  },
  "automaticZoomSpeed": 10,
  "idleSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [],
   "restartMovementOnUserInteraction": false
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 29,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "cubic_in"
    },
    {
     "yawDelta": 302,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "linear"
    },
    {
     "yawDelta": 29,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 "this.panorama_C38E9989_CFAB_36FB_41E8_AEED195C9089",
 {
  "timeToIdle": 5000,
  "class": "PanoramaCamera",
  "id": "panorama_C38E9989_CFAB_36FB_41E8_AEED195C9089_camera",
  "initialPosition": {
   "hfov": 100,
   "class": "PanoramaCameraPosition",
   "yaw": -54.12,
   "pitch": -17.78
  },
  "automaticZoomSpeed": 10,
  "idleSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [],
   "restartMovementOnUserInteraction": false
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 29,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "cubic_in"
    },
    {
     "yawDelta": 302,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "linear"
    },
    {
     "yawDelta": 29,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 "this.panorama_C38E83E8_CFAB_1A39_41E9_D67B70C790DA",
 {
  "timeToIdle": 5000,
  "class": "PanoramaCamera",
  "id": "panorama_C38E83E8_CFAB_1A39_41E9_D67B70C790DA_camera",
  "initialPosition": {
   "hfov": 100,
   "class": "PanoramaCameraPosition",
   "yaw": -40.71,
   "pitch": -6.63
  },
  "automaticZoomSpeed": 10,
  "idleSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [],
   "restartMovementOnUserInteraction": false
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 29,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "cubic_in"
    },
    {
     "yawDelta": 302,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "linear"
    },
    {
     "yawDelta": 29,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 "this.panorama_C38EF781_CFAB_7AEB_418A_B750EAA1CAF9",
 {
  "timeToIdle": 5000,
  "class": "PanoramaCamera",
  "id": "panorama_C38EF781_CFAB_7AEB_418A_B750EAA1CAF9_camera",
  "initialPosition": {
   "hfov": 100,
   "class": "PanoramaCameraPosition",
   "yaw": 37.27,
   "pitch": -11.13
  },
  "automaticZoomSpeed": 10,
  "idleSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [],
   "restartMovementOnUserInteraction": false
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 29,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "cubic_in"
    },
    {
     "yawDelta": 302,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "linear"
    },
    {
     "yawDelta": 29,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 "this.panorama_C38ED2B1_CFAB_1A2B_41B2_633C8B4C5CE1",
 {
  "timeToIdle": 5000,
  "class": "PanoramaCamera",
  "id": "panorama_C38ED2B1_CFAB_1A2B_41B2_633C8B4C5CE1_camera",
  "initialPosition": {
   "hfov": 100,
   "class": "PanoramaCameraPosition",
   "yaw": -99.23,
   "pitch": -29.33
  },
  "automaticZoomSpeed": 10,
  "idleSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [],
   "restartMovementOnUserInteraction": false
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 29,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "cubic_in"
    },
    {
     "yawDelta": 302,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "linear"
    },
    {
     "yawDelta": 29,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 "this.panorama_C38EFD85_CFAB_2EEB_41AA_1FA5F8AEA01D",
 {
  "timeToIdle": 5000,
  "class": "PanoramaCamera",
  "id": "panorama_C38EFD85_CFAB_2EEB_41AA_1FA5F8AEA01D_camera",
  "initialPosition": {
   "hfov": 100,
   "class": "PanoramaCameraPosition",
   "yaw": 90.68,
   "pitch": -18.22
  },
  "automaticZoomSpeed": 10,
  "idleSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [],
   "restartMovementOnUserInteraction": false
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 29,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "cubic_in"
    },
    {
     "yawDelta": 302,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "linear"
    },
    {
     "yawDelta": 29,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 "this.panorama_C38ED68D_CFAB_3AFB_41E8_AFFE674CE495",
 {
  "timeToIdle": 5000,
  "class": "PanoramaCamera",
  "id": "panorama_C38ED68D_CFAB_3AFB_41E8_AFFE674CE495_camera",
  "initialPosition": {
   "hfov": 100,
   "class": "PanoramaCameraPosition",
   "yaw": 120.55,
   "pitch": -32.27
  },
  "automaticZoomSpeed": 10,
  "idleSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [],
   "restartMovementOnUserInteraction": false
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 29,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "cubic_in"
    },
    {
     "yawDelta": 302,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "linear"
    },
    {
     "yawDelta": 29,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 "this.panorama_C38ED0A5_CFAB_162B_41C2_538CF86DC268",
 {
  "timeToIdle": 5000,
  "class": "PanoramaCamera",
  "id": "panorama_C38ED0A5_CFAB_162B_41C2_538CF86DC268_camera",
  "initialPosition": {
   "hfov": 100,
   "class": "PanoramaCameraPosition",
   "yaw": 26.73,
   "pitch": -12.93
  },
  "automaticZoomSpeed": 10,
  "idleSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [],
   "restartMovementOnUserInteraction": false
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 29,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "cubic_in"
    },
    {
     "yawDelta": 302,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "linear"
    },
    {
     "yawDelta": 29,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 "this.panorama_C38EFA64_CFAB_EA29_41C3_C9002B55D89F",
 {
  "timeToIdle": 5000,
  "class": "PanoramaCamera",
  "id": "panorama_C38EFA64_CFAB_EA29_41C3_C9002B55D89F_camera",
  "initialPosition": {
   "hfov": 100,
   "class": "PanoramaCameraPosition",
   "yaw": 33.21,
   "pitch": -19.59
  },
  "automaticZoomSpeed": 10,
  "idleSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [],
   "restartMovementOnUserInteraction": false
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 29,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "cubic_in"
    },
    {
     "yawDelta": 302,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "linear"
    },
    {
     "yawDelta": 29,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 "this.panorama_D8A3BCE1_D3FD_5BA2_41E5_68EBE3ED1FA6",
 {
  "timeToIdle": 5000,
  "class": "PanoramaCamera",
  "id": "panorama_D8A3BCE1_D3FD_5BA2_41E5_68EBE3ED1FA6_camera",
  "initialPosition": {
   "hfov": 100,
   "class": "PanoramaCameraPosition",
   "yaw": 65.37,
   "pitch": -7.6
  },
  "automaticZoomSpeed": 10,
  "idleSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [],
   "restartMovementOnUserInteraction": false
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 29,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "cubic_in"
    },
    {
     "yawDelta": 302,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "linear"
    },
    {
     "yawDelta": 29,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 "this.panorama_D93F22C3_D3FD_CFE6_41E8_6411D8B756B6",
 {
  "timeToIdle": 5000,
  "class": "PanoramaCamera",
  "id": "panorama_D93F22C3_D3FD_CFE6_41E8_6411D8B756B6_camera",
  "initialPosition": {
   "hfov": 100,
   "class": "PanoramaCameraPosition",
   "yaw": 32.22,
   "pitch": -28.52
  },
  "automaticZoomSpeed": 10,
  "idleSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [],
   "restartMovementOnUserInteraction": false
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 29,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "cubic_in"
    },
    {
     "yawDelta": 302,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "linear"
    },
    {
     "yawDelta": 29,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 "this.panorama_D940AB24_D3FD_FEA2_41E2_CA89539FFD1F",
 {
  "timeToIdle": 5000,
  "class": "PanoramaCamera",
  "id": "panorama_D940AB24_D3FD_FEA2_41E2_CA89539FFD1F_camera",
  "initialPosition": {
   "hfov": 100,
   "class": "PanoramaCameraPosition",
   "yaw": 22.07,
   "pitch": -18.49
  },
  "automaticZoomSpeed": 10,
  "idleSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [],
   "restartMovementOnUserInteraction": false
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 29,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "cubic_in"
    },
    {
     "yawDelta": 302,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "linear"
    },
    {
     "yawDelta": 29,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 "this.panorama_D9414400_D3FD_CA62_41E7_FCEB987BA188",
 {
  "timeToIdle": 5000,
  "class": "PanoramaCamera",
  "id": "panorama_D9414400_D3FD_CA62_41E7_FCEB987BA188_camera",
  "initialPosition": {
   "hfov": 100,
   "class": "PanoramaCameraPosition",
   "yaw": -168.89,
   "pitch": -12.47
  },
  "automaticZoomSpeed": 10,
  "idleSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [],
   "restartMovementOnUserInteraction": false
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 29,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "cubic_in"
    },
    {
     "yawDelta": 302,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "linear"
    },
    {
     "yawDelta": 29,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "class": "PlayList",
  "id": "mainPlayList",
  "items": [
   {
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_C140CB97_CC58_324C_41CC_EF501F0CF72D",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_C140CB97_CC58_324C_41CC_EF501F0CF72D_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)"
   },
   {
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_C2BD4D90_CFAD_EEE9_41E8_7D7C7C35C1B9",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_C2BD4D90_CFAD_EEE9_41E8_7D7C7C35C1B9_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)"
   },
   {
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_C38BAB46_CFAD_6A69_41E9_631E1BE3FFAB",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_C38BAB46_CFAD_6A69_41E9_631E1BE3FFAB_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)"
   },
   {
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_C38FD600_CFAD_7DE9_41DE_12D7FD2889AD",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_C38FD600_CFAD_7DE9_41DE_12D7FD2889AD_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)"
   },
   {
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_C38F3FF0_CFAD_6A29_41D8_A9DC4E7E1521",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_C38F3FF0_CFAD_6A29_41D8_A9DC4E7E1521_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)"
   },
   {
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_C38F9A09_CFAD_15FB_41D2_530F2E7196E8",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_C38F9A09_CFAD_15FB_41D2_530F2E7196E8_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)"
   },
   {
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_C38F43B8_CFAD_3A19_41E9_7D6FC4197EA0",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_C38F43B8_CFAD_3A19_41E9_7D6FC4197EA0_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)"
   },
   {
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_C38F7808_CFAD_15F9_41D5_C57D64D622F4",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_C38F7808_CFAD_15F9_41D5_C57D64D622F4_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)"
   },
   {
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_C38FBE07_CFAD_2DF7_41E3_7369EEF66215",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_C38FBE07_CFAD_2DF7_41E3_7369EEF66215_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)"
   },
   {
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_C38F91F1_CFAA_F62B_41DC_84D11640D594",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_C38F91F1_CFAA_F62B_41DC_84D11640D594_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)"
   },
   {
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_C38F5BC1_CFAA_EA6B_41E1_8125E2043944",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_C38F5BC1_CFAA_EA6B_41E1_8125E2043944_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)"
   },
   {
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_C38E7574_CFAB_1E29_41CE_7A87CFA9BD69",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_C38E7574_CFAB_1E29_41CE_7A87CFA9BD69_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)"
   },
   {
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_C38EAFAB_CFAB_2A3F_41CC_775A0A3219DE",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_C38EAFAB_CFAB_2A3F_41CC_775A0A3219DE_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)"
   },
   {
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_C38E9989_CFAB_36FB_41E8_AEED195C9089",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_C38E9989_CFAB_36FB_41E8_AEED195C9089_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)"
   },
   {
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_C38E83E8_CFAB_1A39_41E9_D67B70C790DA",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_C38E83E8_CFAB_1A39_41E9_D67B70C790DA_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)"
   },
   {
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_C38EF781_CFAB_7AEB_418A_B750EAA1CAF9",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_C38EF781_CFAB_7AEB_418A_B750EAA1CAF9_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)"
   },
   {
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_C38ED2B1_CFAB_1A2B_41B2_633C8B4C5CE1",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_C38ED2B1_CFAB_1A2B_41B2_633C8B4C5CE1_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)"
   },
   {
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_C38EFD85_CFAB_2EEB_41AA_1FA5F8AEA01D",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_C38EFD85_CFAB_2EEB_41AA_1FA5F8AEA01D_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)"
   },
   {
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_C38ED68D_CFAB_3AFB_41E8_AFFE674CE495",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_C38ED68D_CFAB_3AFB_41E8_AFFE674CE495_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 19)"
   },
   {
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_C38ED0A5_CFAB_162B_41C2_538CF86DC268",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_C38ED0A5_CFAB_162B_41C2_538CF86DC268_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 19, 20)"
   },
   {
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_C38EFA64_CFAB_EA29_41C3_C9002B55D89F",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_C38EFA64_CFAB_EA29_41C3_C9002B55D89F_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 20, 21)"
   },
   {
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_D8A3BCE1_D3FD_5BA2_41E5_68EBE3ED1FA6",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_D8A3BCE1_D3FD_5BA2_41E5_68EBE3ED1FA6_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 21, 22)"
   },
   {
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_D93F22C3_D3FD_CFE6_41E8_6411D8B756B6",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_D93F22C3_D3FD_CFE6_41E8_6411D8B756B6_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 22, 23)"
   },
   {
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_D940AB24_D3FD_FEA2_41E2_CA89539FFD1F",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_D940AB24_D3FD_FEA2_41E2_CA89539FFD1F_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 23, 24)"
   },
   {
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_D9414400_D3FD_CA62_41E7_FCEB987BA188",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_D9414400_D3FD_CA62_41E7_FCEB987BA188_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 24, 0)"
   }
  ]
 },
 {
  "class": "PlayList",
  "id": "ThumbnailList_FBF27676_E3FF_9FCD_41DE_778D0C3DF0F4_playlist",
  "items": [
   {
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_C140CB97_CC58_324C_41CC_EF501F0CF72D",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_C140CB97_CC58_324C_41CC_EF501F0CF72D_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_FBF27676_E3FF_9FCD_41DE_778D0C3DF0F4_playlist, 0, 1)"
   },
   {
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_C2BD4D90_CFAD_EEE9_41E8_7D7C7C35C1B9",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_C2BD4D90_CFAD_EEE9_41E8_7D7C7C35C1B9_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_FBF27676_E3FF_9FCD_41DE_778D0C3DF0F4_playlist, 1, 2)"
   },
   {
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_C38BAB46_CFAD_6A69_41E9_631E1BE3FFAB",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_C38BAB46_CFAD_6A69_41E9_631E1BE3FFAB_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_FBF27676_E3FF_9FCD_41DE_778D0C3DF0F4_playlist, 2, 3)"
   },
   {
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_C38FD600_CFAD_7DE9_41DE_12D7FD2889AD",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_C38FD600_CFAD_7DE9_41DE_12D7FD2889AD_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_FBF27676_E3FF_9FCD_41DE_778D0C3DF0F4_playlist, 3, 4)"
   },
   {
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_C38F3FF0_CFAD_6A29_41D8_A9DC4E7E1521",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_C38F3FF0_CFAD_6A29_41D8_A9DC4E7E1521_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_FBF27676_E3FF_9FCD_41DE_778D0C3DF0F4_playlist, 4, 5)"
   },
   {
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_C38F9A09_CFAD_15FB_41D2_530F2E7196E8",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_C38F9A09_CFAD_15FB_41D2_530F2E7196E8_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_FBF27676_E3FF_9FCD_41DE_778D0C3DF0F4_playlist, 5, 6)"
   },
   {
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_C38F43B8_CFAD_3A19_41E9_7D6FC4197EA0",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_C38F43B8_CFAD_3A19_41E9_7D6FC4197EA0_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_FBF27676_E3FF_9FCD_41DE_778D0C3DF0F4_playlist, 6, 7)"
   },
   {
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_C38F7808_CFAD_15F9_41D5_C57D64D622F4",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_C38F7808_CFAD_15F9_41D5_C57D64D622F4_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_FBF27676_E3FF_9FCD_41DE_778D0C3DF0F4_playlist, 7, 8)"
   },
   {
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_C38FBE07_CFAD_2DF7_41E3_7369EEF66215",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_C38FBE07_CFAD_2DF7_41E3_7369EEF66215_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_FBF27676_E3FF_9FCD_41DE_778D0C3DF0F4_playlist, 8, 9)"
   },
   {
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_C38F91F1_CFAA_F62B_41DC_84D11640D594",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_C38F91F1_CFAA_F62B_41DC_84D11640D594_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_FBF27676_E3FF_9FCD_41DE_778D0C3DF0F4_playlist, 9, 10)"
   },
   {
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_C38F5BC1_CFAA_EA6B_41E1_8125E2043944",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_C38F5BC1_CFAA_EA6B_41E1_8125E2043944_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_FBF27676_E3FF_9FCD_41DE_778D0C3DF0F4_playlist, 10, 11)"
   },
   {
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_C38E7574_CFAB_1E29_41CE_7A87CFA9BD69",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_C38E7574_CFAB_1E29_41CE_7A87CFA9BD69_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_FBF27676_E3FF_9FCD_41DE_778D0C3DF0F4_playlist, 11, 12)"
   },
   {
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_C38EAFAB_CFAB_2A3F_41CC_775A0A3219DE",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_C38EAFAB_CFAB_2A3F_41CC_775A0A3219DE_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_FBF27676_E3FF_9FCD_41DE_778D0C3DF0F4_playlist, 12, 13)"
   },
   {
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_C38E9989_CFAB_36FB_41E8_AEED195C9089",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_C38E9989_CFAB_36FB_41E8_AEED195C9089_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_FBF27676_E3FF_9FCD_41DE_778D0C3DF0F4_playlist, 13, 14)"
   },
   {
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_C38E83E8_CFAB_1A39_41E9_D67B70C790DA",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_C38E83E8_CFAB_1A39_41E9_D67B70C790DA_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_FBF27676_E3FF_9FCD_41DE_778D0C3DF0F4_playlist, 14, 15)"
   },
   {
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_C38EF781_CFAB_7AEB_418A_B750EAA1CAF9",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_C38EF781_CFAB_7AEB_418A_B750EAA1CAF9_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_FBF27676_E3FF_9FCD_41DE_778D0C3DF0F4_playlist, 15, 16)"
   },
   {
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_C38ED2B1_CFAB_1A2B_41B2_633C8B4C5CE1",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_C38ED2B1_CFAB_1A2B_41B2_633C8B4C5CE1_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_FBF27676_E3FF_9FCD_41DE_778D0C3DF0F4_playlist, 16, 17)"
   },
   {
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_C38EFD85_CFAB_2EEB_41AA_1FA5F8AEA01D",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_C38EFD85_CFAB_2EEB_41AA_1FA5F8AEA01D_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_FBF27676_E3FF_9FCD_41DE_778D0C3DF0F4_playlist, 17, 18)"
   },
   {
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_C38ED68D_CFAB_3AFB_41E8_AFFE674CE495",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_C38ED68D_CFAB_3AFB_41E8_AFFE674CE495_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_FBF27676_E3FF_9FCD_41DE_778D0C3DF0F4_playlist, 18, 19)"
   },
   {
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_C38ED0A5_CFAB_162B_41C2_538CF86DC268",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_C38ED0A5_CFAB_162B_41C2_538CF86DC268_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_FBF27676_E3FF_9FCD_41DE_778D0C3DF0F4_playlist, 19, 20)"
   },
   {
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_C38EFA64_CFAB_EA29_41C3_C9002B55D89F",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_C38EFA64_CFAB_EA29_41C3_C9002B55D89F_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_FBF27676_E3FF_9FCD_41DE_778D0C3DF0F4_playlist, 20, 21)"
   },
   {
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_D8A3BCE1_D3FD_5BA2_41E5_68EBE3ED1FA6",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_D8A3BCE1_D3FD_5BA2_41E5_68EBE3ED1FA6_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_FBF27676_E3FF_9FCD_41DE_778D0C3DF0F4_playlist, 21, 22)"
   },
   {
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_D93F22C3_D3FD_CFE6_41E8_6411D8B756B6",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_D93F22C3_D3FD_CFE6_41E8_6411D8B756B6_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_FBF27676_E3FF_9FCD_41DE_778D0C3DF0F4_playlist, 22, 23)"
   },
   {
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_D940AB24_D3FD_FEA2_41E2_CA89539FFD1F",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_D940AB24_D3FD_FEA2_41E2_CA89539FFD1F_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_FBF27676_E3FF_9FCD_41DE_778D0C3DF0F4_playlist, 23, 24)"
   },
   {
    "class": "PanoramaPlayListItem",
    "media": "this.panorama_D9414400_D3FD_CA62_41E7_FCEB987BA188",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_D9414400_D3FD_CA62_41E7_FCEB987BA188_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_FBF27676_E3FF_9FCD_41DE_778D0C3DF0F4_playlist, 24, 0)"
   }
  ]
 },
 {
  "duration": 1000,
  "class": "SlideInEffect",
  "id": "effect_EBF35195_E48A_1908_41D1_4DE5D46A547D",
  "easing": "linear",
  "from": "bottom"
 },
 {
  "to": "bottom",
  "duration": 1000,
  "class": "SlideOutEffect",
  "id": "effect_EBE8483B_E48A_7778_41CB_5D15D55453AC",
  "easing": "linear"
 },
 {
  "duration": 1000,
  "class": "SlideInEffect",
  "id": "effect_E38EF7D0_F2E3_FA72_41BF_05DCB58A2444",
  "easing": "linear",
  "from": "bottom"
 },
 {
  "to": "bottom",
  "duration": 1000,
  "class": "SlideOutEffect",
  "id": "effect_E38EE7D0_F2E3_FA72_41E4_C05F85CB0C84",
  "easing": "linear"
 },
 {
  "timeToIdle": 5000,
  "class": "PanoramaCamera",
  "id": "camera_E1CE8E3A_F2E0_AA36_41C0_1229EEE7D1BE",
  "initialPosition": {
   "hfov": 100,
   "class": "PanoramaCameraPosition",
   "yaw": -141.77,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "idleSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 29,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "cubic_in"
    },
    {
     "yawDelta": 302,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "linear"
    },
    {
     "yawDelta": 29,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "id": "sequence_E1CE9E3A_F2E0_AA36_41E9_AD41AFA0E6A7"
  },
  "initialSequence": "this.sequence_E1CE9E3A_F2E0_AA36_41E9_AD41AFA0E6A7"
 },
 {
  "timeToIdle": 5000,
  "class": "PanoramaCamera",
  "id": "camera_E1C9CE4A_F2E0_AA56_41AC_C8E45E842362",
  "initialPosition": {
   "hfov": 100,
   "class": "PanoramaCameraPosition",
   "yaw": 175.13,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "idleSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 29,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "cubic_in"
    },
    {
     "yawDelta": 302,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "linear"
    },
    {
     "yawDelta": 29,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "id": "sequence_E1C9DE4A_F2E0_AA56_41E3_B0011F5D9AD8"
  },
  "initialSequence": "this.sequence_E1C9DE4A_F2E0_AA56_41E3_B0011F5D9AD8"
 },
 {
  "timeToIdle": 5000,
  "class": "PanoramaCamera",
  "id": "camera_E1B33E5C_F2E0_AA72_41B4_3DA4EB721985",
  "initialPosition": {
   "hfov": 100,
   "class": "PanoramaCameraPosition",
   "yaw": -113.1,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "idleSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 29,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "cubic_in"
    },
    {
     "yawDelta": 302,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "linear"
    },
    {
     "yawDelta": 29,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "id": "sequence_E1B3CE5C_F2E0_AA72_41E4_017BDB989F39"
  },
  "initialSequence": "this.sequence_E1B3CE5C_F2E0_AA72_41E4_017BDB989F39"
 },
 {
  "timeToIdle": 5000,
  "class": "PanoramaCamera",
  "id": "camera_E1BE1E6E_F2E0_AA2E_41D3_E028526DC383",
  "initialPosition": {
   "hfov": 100,
   "class": "PanoramaCameraPosition",
   "yaw": 171.7,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "idleSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 29,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "cubic_in"
    },
    {
     "yawDelta": 302,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "linear"
    },
    {
     "yawDelta": 29,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "id": "sequence_E1BE2E6E_F2E0_AA2E_41C4_37A82A960FDD"
  },
  "initialSequence": "this.sequence_E1BE2E6E_F2E0_AA2E_41C4_37A82A960FDD"
 },
 {
  "timeToIdle": 5000,
  "class": "PanoramaCamera",
  "id": "camera_E1B83E7F_F2E0_AA2E_41E0_20D0A08E433D",
  "initialPosition": {
   "hfov": 100,
   "class": "PanoramaCameraPosition",
   "yaw": 97.82,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "idleSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 29,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "cubic_in"
    },
    {
     "yawDelta": 302,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "linear"
    },
    {
     "yawDelta": 29,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "id": "sequence_E1B8CE7F_F2E0_AA2E_41E6_9FD3AD6E0BCA"
  },
  "initialSequence": "this.sequence_E1B8CE7F_F2E0_AA2E_41E6_9FD3AD6E0BCA"
 },
 {
  "timeToIdle": 5000,
  "class": "PanoramaCamera",
  "id": "camera_E1A31E92_F2E0_AAF6_41E7_9DE63E68E7B0",
  "initialPosition": {
   "hfov": 100,
   "class": "PanoramaCameraPosition",
   "yaw": -9.07,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "idleSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 29,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "cubic_in"
    },
    {
     "yawDelta": 302,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "linear"
    },
    {
     "yawDelta": 29,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "id": "sequence_E1A32E92_F2E0_AAF6_41D7_7B3E501CB4D7"
  },
  "initialSequence": "this.sequence_E1A32E92_F2E0_AAF6_41D7_7B3E501CB4D7"
 },
 {
  "timeToIdle": 5000,
  "class": "PanoramaCamera",
  "id": "camera_E1ADCEAB_F2E0_AAD6_41E0_87A373EEA971",
  "initialPosition": {
   "hfov": 100,
   "class": "PanoramaCameraPosition",
   "yaw": -104.31,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "idleSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 29,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "cubic_in"
    },
    {
     "yawDelta": 302,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "linear"
    },
    {
     "yawDelta": 29,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "id": "sequence_E1ADDEAC_F2E0_AAD2_41CE_07459447DA8E"
  },
  "initialSequence": "this.sequence_E1ADDEAC_F2E0_AAD2_41CE_07459447DA8E"
 },
 {
  "timeToIdle": 5000,
  "class": "PanoramaCamera",
  "id": "camera_E1965ECC_F2E0_AA52_41CA_354FF18C685A",
  "initialPosition": {
   "hfov": 100,
   "class": "PanoramaCameraPosition",
   "yaw": 161.69,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "idleSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 29,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "cubic_in"
    },
    {
     "yawDelta": 302,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "linear"
    },
    {
     "yawDelta": 29,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "id": "sequence_E1967ECC_F2E0_AA52_41B1_33F599C9126A"
  },
  "initialSequence": "this.sequence_E1967ECC_F2E0_AA52_41B1_33F599C9126A"
 },
 {
  "timeToIdle": 5000,
  "class": "PanoramaCamera",
  "id": "camera_E1913EDE_F2E0_AA6E_41EB_0D9D8D642F46",
  "initialPosition": {
   "hfov": 100,
   "class": "PanoramaCameraPosition",
   "yaw": -9.87,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "idleSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 29,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "cubic_in"
    },
    {
     "yawDelta": 302,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "linear"
    },
    {
     "yawDelta": 29,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "id": "sequence_E191CEDE_F2E0_AA6E_419F_8958A6CC353F"
  },
  "initialSequence": "this.sequence_E191CEDE_F2E0_AA6E_419F_8958A6CC353F"
 },
 {
  "timeToIdle": 5000,
  "class": "PanoramaCamera",
  "id": "camera_E19A3EED_F2E0_AA52_41E8_3A9F89CF0942",
  "initialPosition": {
   "hfov": 100,
   "class": "PanoramaCameraPosition",
   "yaw": -73.37,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "idleSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 29,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "cubic_in"
    },
    {
     "yawDelta": 302,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "linear"
    },
    {
     "yawDelta": 29,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "id": "sequence_E19ACEED_F2E0_AA52_41CC_6F3B74E4607A"
  },
  "initialSequence": "this.sequence_E19ACEED_F2E0_AA52_41CC_6F3B74E4607A"
 },
 {
  "timeToIdle": 5000,
  "class": "PanoramaCamera",
  "id": "camera_E1846EFC_F2E0_AA32_41E7_4EAD504353BE",
  "initialPosition": {
   "hfov": 100,
   "class": "PanoramaCameraPosition",
   "yaw": -131.53,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "idleSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 29,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "cubic_in"
    },
    {
     "yawDelta": 302,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "linear"
    },
    {
     "yawDelta": 29,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "id": "sequence_E1847EFD_F2E0_AA32_41E2_2173D24A9CB3"
  },
  "initialSequence": "this.sequence_E1847EFD_F2E0_AA32_41E2_2173D24A9CB3"
 },
 {
  "timeToIdle": 5000,
  "class": "PanoramaCamera",
  "id": "camera_E18D2F0C_F2E0_ABD2_41D0_2EAF180BA394",
  "initialPosition": {
   "hfov": 100,
   "class": "PanoramaCameraPosition",
   "yaw": 150.81,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "idleSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 29,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "cubic_in"
    },
    {
     "yawDelta": 302,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "linear"
    },
    {
     "yawDelta": 29,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "id": "sequence_E18D3F0C_F2E0_ABD2_41E2_AB2F880AE346"
  },
  "initialSequence": "this.sequence_E18D3F0C_F2E0_ABD2_41E2_AB2F880AE346"
 },
 {
  "timeToIdle": 5000,
  "class": "PanoramaCamera",
  "id": "camera_E1889F1C_F2E0_ABF2_41E2_7192CA9A6E9E",
  "initialPosition": {
   "hfov": 100,
   "class": "PanoramaCameraPosition",
   "yaw": 13.11,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "idleSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 29,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "cubic_in"
    },
    {
     "yawDelta": 302,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "linear"
    },
    {
     "yawDelta": 29,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "id": "sequence_E1774F1C_F2E0_ABF2_41C4_C6C7F2F204DA"
  },
  "initialSequence": "this.sequence_E1774F1C_F2E0_ABF2_41C4_C6C7F2F204DA"
 },
 {
  "timeToIdle": 5000,
  "class": "PanoramaCamera",
  "id": "camera_E17F7F2B_F2E0_ABD6_41D1_26AC2059F3EC",
  "initialPosition": {
   "hfov": 100,
   "class": "PanoramaCameraPosition",
   "yaw": -53.55,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "idleSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 29,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "cubic_in"
    },
    {
     "yawDelta": 302,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "linear"
    },
    {
     "yawDelta": 29,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "id": "sequence_E17F1F2B_F2E0_ABD6_41E0_28DED6AA2EA6"
  },
  "initialSequence": "this.sequence_E17F1F2B_F2E0_ABD6_41E0_28DED6AA2EA6"
 },
 {
  "timeToIdle": 5000,
  "class": "PanoramaCamera",
  "id": "camera_E179FF48_F2E0_AA53_41EB_B4DB47512E2F",
  "initialPosition": {
   "hfov": 100,
   "class": "PanoramaCameraPosition",
   "yaw": -85.55,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "idleSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 29,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "cubic_in"
    },
    {
     "yawDelta": 302,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "linear"
    },
    {
     "yawDelta": 29,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "id": "sequence_E1798F48_F2E0_AA53_41E4_16B1CE0566FF"
  },
  "initialSequence": "this.sequence_E1798F48_F2E0_AA53_41E4_16B1CE0566FF"
 },
 {
  "timeToIdle": 5000,
  "class": "PanoramaCamera",
  "id": "camera_E160EF65_F2E0_AA52_41AC_EF124ED9E628",
  "initialPosition": {
   "hfov": 100,
   "class": "PanoramaCameraPosition",
   "yaw": -0.1,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "idleSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 29,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "cubic_in"
    },
    {
     "yawDelta": 302,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "linear"
    },
    {
     "yawDelta": 29,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "id": "sequence_E160FF66_F2E0_AA5E_41E1_9C5F05CD0588"
  },
  "initialSequence": "this.sequence_E160FF66_F2E0_AA5E_41E1_9C5F05CD0588"
 },
 {
  "timeToIdle": 5000,
  "class": "PanoramaCamera",
  "id": "camera_E169EF7E_F2E0_AA2E_41CF_6EDE198D6711",
  "initialPosition": {
   "hfov": 100,
   "class": "PanoramaCameraPosition",
   "yaw": -106.23,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "idleSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 29,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "cubic_in"
    },
    {
     "yawDelta": 302,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "linear"
    },
    {
     "yawDelta": 29,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "id": "sequence_E169FF7E_F2E0_AA2E_41E1_F7C365385669"
  },
  "initialSequence": "this.sequence_E169FF7E_F2E0_AA2E_41E1_F7C365385669"
 },
 {
  "timeToIdle": 5000,
  "class": "PanoramaCamera",
  "id": "camera_E1508F97_F2E0_AAFE_41AC_63A0713C9610",
  "initialPosition": {
   "hfov": 100,
   "class": "PanoramaCameraPosition",
   "yaw": 86.96,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "idleSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 29,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "cubic_in"
    },
    {
     "yawDelta": 302,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "linear"
    },
    {
     "yawDelta": 29,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "id": "sequence_E1509F97_F2E0_AAFE_41B1_245CB03128FF"
  },
  "initialSequence": "this.sequence_E1509F97_F2E0_AAFE_41B1_245CB03128FF"
 },
 {
  "timeToIdle": 5000,
  "class": "PanoramaCamera",
  "id": "camera_E1469FB4_F2E0_AA32_41EA_D32082BB663D",
  "initialPosition": {
   "hfov": 100,
   "class": "PanoramaCameraPosition",
   "yaw": 118.99,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "idleSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 29,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "cubic_in"
    },
    {
     "yawDelta": 302,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "linear"
    },
    {
     "yawDelta": 29,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "id": "sequence_E146AFB4_F2E0_AA32_41E8_7A6E283E24BB"
  },
  "initialSequence": "this.sequence_E146AFB4_F2E0_AA32_41E8_7A6E283E24BB"
 },
 {
  "timeToIdle": 5000,
  "class": "PanoramaCamera",
  "id": "camera_E14ACFC5_F2E0_AA52_41D6_F9D6477F8BBE",
  "initialPosition": {
   "hfov": 100,
   "class": "PanoramaCameraPosition",
   "yaw": -154.36,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "idleSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 29,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "cubic_in"
    },
    {
     "yawDelta": 302,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "linear"
    },
    {
     "yawDelta": 29,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "id": "sequence_E14AEFC5_F2E0_AA52_41EC_89A7E489A5F6"
  },
  "initialSequence": "this.sequence_E14AEFC5_F2E0_AA52_41EC_89A7E489A5F6"
 },
 {
  "timeToIdle": 5000,
  "class": "PanoramaCamera",
  "id": "camera_E130CFD6_F2E0_AA7F_41C2_1201BEC19443",
  "initialPosition": {
   "hfov": 100,
   "class": "PanoramaCameraPosition",
   "yaw": 90.75,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "idleSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 29,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "cubic_in"
    },
    {
     "yawDelta": 302,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "linear"
    },
    {
     "yawDelta": 29,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "id": "sequence_E130DFD7_F2E0_AA7E_41D4_25C5214E1155"
  },
  "initialSequence": "this.sequence_E130DFD7_F2E0_AA7E_41D4_25C5214E1155"
 },
 {
  "timeToIdle": 5000,
  "class": "PanoramaCamera",
  "id": "camera_E1244FE8_F2E0_AA52_41E9_088F4E0CB99D",
  "initialPosition": {
   "hfov": 100,
   "class": "PanoramaCameraPosition",
   "yaw": 16.31,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "idleSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 29,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "cubic_in"
    },
    {
     "yawDelta": 302,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "linear"
    },
    {
     "yawDelta": 29,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "id": "sequence_E1245FE8_F2E0_AA52_41ED_44A628A03F95"
  },
  "initialSequence": "this.sequence_E1245FE8_F2E0_AA52_41ED_44A628A03F95"
 },
 {
  "timeToIdle": 5000,
  "class": "PanoramaCamera",
  "id": "camera_E129AFFA_F2E0_AA36_41E6_ACEB8ABB68C0",
  "initialPosition": {
   "hfov": 100,
   "class": "PanoramaCameraPosition",
   "yaw": 38.27,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "idleSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 29,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "cubic_in"
    },
    {
     "yawDelta": 302,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "linear"
    },
    {
     "yawDelta": 29,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "id": "sequence_E129BFFA_F2E0_AA36_41D4_72622D1AEFC8"
  },
  "initialSequence": "this.sequence_E129BFFA_F2E0_AA36_41D4_72622D1AEFC8"
 },
 {
  "timeToIdle": 5000,
  "class": "PanoramaCamera",
  "id": "camera_E11F8013_F2E0_B5F6_41D9_E49BC26E8E28",
  "initialPosition": {
   "hfov": 100,
   "class": "PanoramaCameraPosition",
   "yaw": 170.31,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "idleSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 29,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "cubic_in"
    },
    {
     "yawDelta": 302,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "linear"
    },
    {
     "yawDelta": 29,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "id": "sequence_E11FB013_F2E0_B5F6_41DD_95542316BC89"
  },
  "initialSequence": "this.sequence_E11FB013_F2E0_B5F6_41DD_95542316BC89"
 },
 {
  "timeToIdle": 5000,
  "class": "PanoramaCamera",
  "id": "camera_E103C03E_F2E0_B62E_41D9_21BDB73018A1",
  "initialPosition": {
   "hfov": 100,
   "class": "PanoramaCameraPosition",
   "yaw": 175.38,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "idleSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 29,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "cubic_in"
    },
    {
     "yawDelta": 302,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "linear"
    },
    {
     "yawDelta": 29,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "id": "sequence_E103F03E_F2E0_B62E_41E1_6984B963244F"
  },
  "initialSequence": "this.sequence_E103F03E_F2E0_B62E_41E1_6984B963244F"
 },
 {
  "timeToIdle": 5000,
  "class": "PanoramaCamera",
  "id": "camera_E109F059_F2E0_B672_41EA_A04CCEABDD45",
  "initialPosition": {
   "hfov": 100,
   "class": "PanoramaCameraPosition",
   "yaw": 171.54,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "idleSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 29,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "cubic_in"
    },
    {
     "yawDelta": 302,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "linear"
    },
    {
     "yawDelta": 29,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "id": "sequence_E109E059_F2E0_B672_41D8_8AAA84DFD517"
  },
  "initialSequence": "this.sequence_E109E059_F2E0_B672_41D8_8AAA84DFD517"
 },
 {
  "timeToIdle": 5000,
  "class": "PanoramaCamera",
  "id": "camera_E6FD3079_F2E0_B632_41E4_CCE01833BD3E",
  "initialPosition": {
   "hfov": 100,
   "class": "PanoramaCameraPosition",
   "yaw": 112.31,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "idleSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 29,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "cubic_in"
    },
    {
     "yawDelta": 302,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "linear"
    },
    {
     "yawDelta": 29,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "id": "sequence_E6FD2079_F2E0_B632_41B0_AEDEB5E528F4"
  },
  "initialSequence": "this.sequence_E6FD2079_F2E0_B632_41B0_AEDEB5E528F4"
 },
 {
  "timeToIdle": 5000,
  "class": "PanoramaCamera",
  "id": "camera_E6E31094_F2E0_B6F2_41EA_8BB1A53AEC68",
  "initialPosition": {
   "hfov": 100,
   "class": "PanoramaCameraPosition",
   "yaw": -115.06,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "idleSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 29,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "cubic_in"
    },
    {
     "yawDelta": 302,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "linear"
    },
    {
     "yawDelta": 29,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "id": "sequence_E6E30094_F2E0_B6F2_41E4_328BE71D2AB0"
  },
  "initialSequence": "this.sequence_E6E30094_F2E0_B6F2_41E4_328BE71D2AB0"
 },
 {
  "timeToIdle": 5000,
  "class": "PanoramaCamera",
  "id": "camera_E6E8A0B3_F2E0_B636_41EA_20478C04B352",
  "initialPosition": {
   "hfov": 100,
   "class": "PanoramaCameraPosition",
   "yaw": -127.44,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "idleSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 29,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "cubic_in"
    },
    {
     "yawDelta": 302,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "linear"
    },
    {
     "yawDelta": 29,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "id": "sequence_E6D750B3_F2E0_B636_41E4_3EE1E7D0E5D4"
  },
  "initialSequence": "this.sequence_E6D750B3_F2E0_B636_41E4_3EE1E7D0E5D4"
 },
 {
  "timeToIdle": 5000,
  "class": "PanoramaCamera",
  "id": "camera_E6DEA0D7_F2E0_B67E_41E9_20D68AD81B29",
  "initialPosition": {
   "hfov": 100,
   "class": "PanoramaCameraPosition",
   "yaw": -91.8,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "idleSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 29,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "cubic_in"
    },
    {
     "yawDelta": 302,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "linear"
    },
    {
     "yawDelta": 29,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "id": "sequence_E6DD40D7_F2E0_B67E_41A9_E695CB7DD05D"
  },
  "initialSequence": "this.sequence_E6DD40D7_F2E0_B67E_41A9_E695CB7DD05D"
 },
 {
  "timeToIdle": 5000,
  "class": "PanoramaCamera",
  "id": "camera_E6C220F5_F2E0_B632_41E5_7AF4046C8DA9",
  "initialPosition": {
   "hfov": 100,
   "class": "PanoramaCameraPosition",
   "yaw": 24.43,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "idleSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 29,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "cubic_in"
    },
    {
     "yawDelta": 302,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "linear"
    },
    {
     "yawDelta": 29,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "id": "sequence_E6C2D0F6_F2E0_B63E_41E0_72948AD0798F"
  },
  "initialSequence": "this.sequence_E6C2D0F6_F2E0_B63E_41E0_72948AD0798F"
 },
 {
  "timeToIdle": 5000,
  "class": "PanoramaCamera",
  "id": "camera_E6C89116_F2E0_B7FE_41DB_E4B738653D6C",
  "initialPosition": {
   "hfov": 100,
   "class": "PanoramaCameraPosition",
   "yaw": 125.18,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "idleSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 29,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "cubic_in"
    },
    {
     "yawDelta": 302,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "linear"
    },
    {
     "yawDelta": 29,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "id": "sequence_E6C8B116_F2E0_B7FE_41C9_51432025DE1E"
  },
  "initialSequence": "this.sequence_E6C8B116_F2E0_B7FE_41C9_51432025DE1E"
 },
 {
  "timeToIdle": 5000,
  "class": "PanoramaCamera",
  "id": "camera_E6BC0135_F2E0_B632_41C6_D154FFC0A01F",
  "initialPosition": {
   "hfov": 100,
   "class": "PanoramaCameraPosition",
   "yaw": 80.33,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "idleSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 29,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "cubic_in"
    },
    {
     "yawDelta": 302,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "linear"
    },
    {
     "yawDelta": 29,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "id": "sequence_E6BC3135_F2E0_B632_41E1_8BB1DD0B2902"
  },
  "initialSequence": "this.sequence_E6BC3135_F2E0_B632_41E1_8BB1DD0B2902"
 },
 {
  "timeToIdle": 5000,
  "class": "PanoramaCamera",
  "id": "camera_E6A22154_F2E0_B672_41E4_D57ED3E06E96",
  "initialPosition": {
   "hfov": 100,
   "class": "PanoramaCameraPosition",
   "yaw": 37.17,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "idleSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 29,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "cubic_in"
    },
    {
     "yawDelta": 302,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "linear"
    },
    {
     "yawDelta": 29,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "id": "sequence_E6A2D155_F2E0_B672_41EE_5E0B2AD94252"
  },
  "initialSequence": "this.sequence_E6A2D155_F2E0_B672_41EE_5E0B2AD94252"
 },
 {
  "timeToIdle": 5000,
  "class": "PanoramaCamera",
  "id": "camera_E696516F_F2E0_B62E_41C4_445E5342B164",
  "initialPosition": {
   "hfov": 100,
   "class": "PanoramaCameraPosition",
   "yaw": 88.4,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "idleSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 29,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "cubic_in"
    },
    {
     "yawDelta": 302,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "linear"
    },
    {
     "yawDelta": 29,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "id": "sequence_E696416F_F2E0_B62E_41B5_7F8DAB72DFD9"
  },
  "initialSequence": "this.sequence_E696416F_F2E0_B62E_41B5_7F8DAB72DFD9"
 },
 {
  "timeToIdle": 5000,
  "class": "PanoramaCamera",
  "id": "camera_E69C3197_F2E0_B6FE_41EE_4919254D3702",
  "initialPosition": {
   "hfov": 100,
   "class": "PanoramaCameraPosition",
   "yaw": 172.71,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "idleSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 29,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "cubic_in"
    },
    {
     "yawDelta": 302,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "linear"
    },
    {
     "yawDelta": 29,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "id": "sequence_E69C2197_F2E0_B6FE_41D6_D56D4AA0D176"
  },
  "initialSequence": "this.sequence_E69C2197_F2E0_B6FE_41D6_D56D4AA0D176"
 },
 {
  "timeToIdle": 5000,
  "class": "PanoramaCamera",
  "id": "camera_E681A1BB_F2E0_B636_41B9_89FFC78D641B",
  "initialPosition": {
   "hfov": 100,
   "class": "PanoramaCameraPosition",
   "yaw": -16.61,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "idleSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 29,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "cubic_in"
    },
    {
     "yawDelta": 302,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "linear"
    },
    {
     "yawDelta": 29,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "id": "sequence_E68051BB_F2E0_B636_41EE_5C752669B406"
  },
  "initialSequence": "this.sequence_E68051BB_F2E0_B636_41EE_5C752669B406"
 },
 {
  "timeToIdle": 5000,
  "class": "PanoramaCamera",
  "id": "camera_E67471E1_F2E0_B652_41CB_5C2401268854",
  "initialPosition": {
   "hfov": 100,
   "class": "PanoramaCameraPosition",
   "yaw": 3.37,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "idleSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 29,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "cubic_in"
    },
    {
     "yawDelta": 302,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "linear"
    },
    {
     "yawDelta": 29,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "id": "sequence_E67401E1_F2E0_B652_41AC_75BC4CA4DF09"
  },
  "initialSequence": "this.sequence_E67401E1_F2E0_B652_41AC_75BC4CA4DF09"
 },
 {
  "timeToIdle": 5000,
  "class": "PanoramaCamera",
  "id": "camera_E667F203_F2E0_B5D6_41E6_B3C77CA2000F",
  "initialPosition": {
   "hfov": 100,
   "class": "PanoramaCameraPosition",
   "yaw": 51.13,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "idleSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 29,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "cubic_in"
    },
    {
     "yawDelta": 302,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "linear"
    },
    {
     "yawDelta": 29,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "id": "sequence_E667E203_F2E0_B5D6_41C4_703A051F5F8C"
  },
  "initialSequence": "this.sequence_E667E203_F2E0_B5D6_41C4_703A051F5F8C"
 },
 {
  "timeToIdle": 5000,
  "class": "PanoramaCamera",
  "id": "camera_E669721C_F2E0_B5F2_41EB_4816730EFC91",
  "initialPosition": {
   "hfov": 100,
   "class": "PanoramaCameraPosition",
   "yaw": -92.21,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "idleSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 29,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "cubic_in"
    },
    {
     "yawDelta": 302,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "linear"
    },
    {
     "yawDelta": 29,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "id": "sequence_E669621C_F2E0_B5F2_41D8_F46EE9DDB51C"
  },
  "initialSequence": "this.sequence_E669621C_F2E0_B5F2_41D8_F46EE9DDB51C"
 },
 {
  "timeToIdle": 5000,
  "class": "PanoramaCamera",
  "id": "camera_E65D6237_F2E0_BA3E_41E1_B089EDE0E334",
  "initialPosition": {
   "hfov": 100,
   "class": "PanoramaCameraPosition",
   "yaw": -95.9,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "idleSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 29,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "cubic_in"
    },
    {
     "yawDelta": 302,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "linear"
    },
    {
     "yawDelta": 29,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "id": "sequence_E65D1237_F2E0_BA3E_41D3_6DE138CCCCE7"
  },
  "initialSequence": "this.sequence_E65D1237_F2E0_BA3E_41D3_6DE138CCCCE7"
 },
 {
  "timeToIdle": 5000,
  "class": "PanoramaCamera",
  "id": "camera_E640025A_F2E0_BA76_41ED_8D4F56331680",
  "initialPosition": {
   "hfov": 100,
   "class": "PanoramaCameraPosition",
   "yaw": -14.4,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "idleSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 29,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "cubic_in"
    },
    {
     "yawDelta": 302,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "linear"
    },
    {
     "yawDelta": 29,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "id": "sequence_E640225A_F2E0_BA76_41C1_DF21A8595415"
  },
  "initialSequence": "this.sequence_E640225A_F2E0_BA76_41C1_DF21A8595415"
 },
 {
  "timeToIdle": 5000,
  "class": "PanoramaCamera",
  "id": "camera_E634D280_F2E0_BAD2_41A4_B663E316BE9A",
  "initialPosition": {
   "hfov": 100,
   "class": "PanoramaCameraPosition",
   "yaw": 96.84,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "idleSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 29,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "cubic_in"
    },
    {
     "yawDelta": 302,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "linear"
    },
    {
     "yawDelta": 29,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "id": "sequence_E634F280_F2E0_BAD2_41D5_7E5C44FDF496"
  },
  "initialSequence": "this.sequence_E634F280_F2E0_BAD2_41D5_7E5C44FDF496"
 },
 {
  "timeToIdle": 5000,
  "class": "PanoramaCamera",
  "id": "camera_E627A298_F2E0_BAF2_41D3_DC6EC8D57362",
  "initialPosition": {
   "hfov": 100,
   "class": "PanoramaCameraPosition",
   "yaw": 83.89,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "idleSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 29,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "cubic_in"
    },
    {
     "yawDelta": 302,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "linear"
    },
    {
     "yawDelta": 29,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "id": "sequence_E6267298_F2E0_BAF2_41E6_4060FEBE1AEF"
  },
  "initialSequence": "this.sequence_E6267298_F2E0_BAF2_41E6_4060FEBE1AEF"
 },
 {
  "timeToIdle": 5000,
  "class": "PanoramaCamera",
  "id": "camera_E62B82A9_F2E0_BAD2_41CE_F7CA7C8621EA",
  "initialPosition": {
   "hfov": 100,
   "class": "PanoramaCameraPosition",
   "yaw": 37.61,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "idleSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 29,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "cubic_in"
    },
    {
     "yawDelta": 302,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "linear"
    },
    {
     "yawDelta": 29,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "id": "sequence_E62BB2A9_F2E0_BAD2_41DB_D92C02D1BCFC"
  },
  "initialSequence": "this.sequence_E62BB2A9_F2E0_BAD2_41DB_D92C02D1BCFC"
 },
 {
  "timeToIdle": 5000,
  "class": "PanoramaCamera",
  "id": "camera_E61D62B8_F2E0_BA32_41EB_16A59C959826",
  "initialPosition": {
   "hfov": 100,
   "class": "PanoramaCameraPosition",
   "yaw": -2.58,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "idleSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 29,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "cubic_in"
    },
    {
     "yawDelta": 302,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "linear"
    },
    {
     "yawDelta": 29,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "id": "sequence_E61D12B8_F2E0_BA32_41E6_1737376844CA"
  },
  "initialSequence": "this.sequence_E61D12B8_F2E0_BA32_41E6_1737376844CA"
 },
 {
  "timeToIdle": 5000,
  "class": "PanoramaCamera",
  "id": "camera_E601D2CB_F2E0_BA56_41DD_84CF5AA8064E",
  "initialPosition": {
   "hfov": 100,
   "class": "PanoramaCameraPosition",
   "yaw": 94.7,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "idleSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 29,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "cubic_in"
    },
    {
     "yawDelta": 302,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "linear"
    },
    {
     "yawDelta": 29,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "id": "sequence_E601F2CB_F2E0_BA56_41DC_53EF7CE79CD9"
  },
  "initialSequence": "this.sequence_E601F2CB_F2E0_BA56_41DC_53EF7CE79CD9"
 },
 {
  "timeToIdle": 5000,
  "class": "PanoramaCamera",
  "id": "camera_E1DDD33E_F2E0_BA2E_41E1_9B74196C3C02",
  "initialPosition": {
   "hfov": 100,
   "class": "PanoramaCameraPosition",
   "yaw": 37.47,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "idleSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 29,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "cubic_in"
    },
    {
     "yawDelta": 302,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "linear"
    },
    {
     "yawDelta": 29,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "id": "sequence_E1DDC33E_F2E0_BA2E_41EC_1754D7FE7065"
  },
  "initialSequence": "this.sequence_E1DDC33E_F2E0_BA2E_41EC_1754D7FE7065"
 },
 {
  "timeToIdle": 5000,
  "class": "PanoramaCamera",
  "id": "camera_E1DA535A_F2E0_BA76_41D1_2D39EE16A3B5",
  "initialPosition": {
   "hfov": 100,
   "class": "PanoramaCameraPosition",
   "yaw": 5.08,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "idleSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 29,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "cubic_in"
    },
    {
     "yawDelta": 302,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "linear"
    },
    {
     "yawDelta": 29,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "id": "sequence_E1DA435B_F2E0_BA76_419D_A2A38314F798"
  },
  "initialSequence": "this.sequence_E1DA435B_F2E0_BA76_419D_A2A38314F798"
 },
 {
  "timeToIdle": 5000,
  "class": "PanoramaCamera",
  "id": "camera_E1C6E37B_F2E0_BA36_41E1_4DA0DFA57074",
  "initialPosition": {
   "hfov": 100,
   "class": "PanoramaCameraPosition",
   "yaw": 39.25,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "idleSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 29,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "cubic_in"
    },
    {
     "yawDelta": 302,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "linear"
    },
    {
     "yawDelta": 29,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "id": "sequence_E1C6937B_F2E0_BA36_41EA_BFA90D3A63AA"
  },
  "initialSequence": "this.sequence_E1C6937B_F2E0_BA36_41EA_BFA90D3A63AA"
 },
 {
  "timeToIdle": 5000,
  "class": "PanoramaCamera",
  "id": "camera_E1C23399_F2E0_BAF2_41EB_A299C948C15A",
  "initialPosition": {
   "hfov": 100,
   "class": "PanoramaCameraPosition",
   "yaw": 90.86,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "idleSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 29,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "cubic_in"
    },
    {
     "yawDelta": 302,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "linear"
    },
    {
     "yawDelta": 29,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "id": "sequence_E1C2D399_F2E0_BAF2_41DB_BA8307819A67"
  },
  "initialSequence": "this.sequence_E1C2D399_F2E0_BAF2_41DB_BA8307819A67"
 },
 {
  "timeToIdle": 5000,
  "class": "PanoramaCamera",
  "id": "camera_E1CD83AF_F2E0_BA2D_41E6_4ED527578433",
  "initialPosition": {
   "hfov": 100,
   "class": "PanoramaCameraPosition",
   "yaw": 170.47,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "idleSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 29,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "cubic_in"
    },
    {
     "yawDelta": 302,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "linear"
    },
    {
     "yawDelta": 29,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "id": "sequence_E1CDB3B0_F2E0_BA32_41E9_70B61775E329"
  },
  "initialSequence": "this.sequence_E1CDB3B0_F2E0_BA32_41E9_70B61775E329"
 },
 {
  "timeToIdle": 5000,
  "class": "PanoramaCamera",
  "id": "camera_E1C9F3BF_F2E0_BA2E_41EE_1D4A9F3C48AD",
  "initialPosition": {
   "hfov": 100,
   "class": "PanoramaCameraPosition",
   "yaw": -168.48,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "idleSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 29,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "cubic_in"
    },
    {
     "yawDelta": 302,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "linear"
    },
    {
     "yawDelta": 29,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "id": "sequence_E1C9E3BF_F2E0_BA2E_41E1_DAB7EFCFF821"
  },
  "initialSequence": "this.sequence_E1C9E3BF_F2E0_BA2E_41E1_DAB7EFCFF821"
 },
 {
  "timeToIdle": 5000,
  "class": "PanoramaCamera",
  "id": "camera_E1B353D0_F2E0_BA72_41E2_03A06F40FA2F",
  "initialPosition": {
   "hfov": 100,
   "class": "PanoramaCameraPosition",
   "yaw": 176.86,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "idleSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 29,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "cubic_in"
    },
    {
     "yawDelta": 302,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "linear"
    },
    {
     "yawDelta": 29,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "id": "sequence_E1B343D0_F2E0_BA72_41E0_892F09433889"
  },
  "initialSequence": "this.sequence_E1B343D0_F2E0_BA72_41E0_892F09433889"
 },
 {
  "timeToIdle": 5000,
  "class": "PanoramaCamera",
  "id": "camera_E1BEF3E9_F2E0_BA52_41BE_F6185F39A1A1",
  "initialPosition": {
   "hfov": 100,
   "class": "PanoramaCameraPosition",
   "yaw": 87.07,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "idleSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 29,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "cubic_in"
    },
    {
     "yawDelta": 302,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "linear"
    },
    {
     "yawDelta": 29,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "id": "sequence_E1BEE3EA_F2E0_BA56_41DB_05DB9AA50AAC"
  },
  "initialSequence": "this.sequence_E1BEE3EA_F2E0_BA56_41DB_05DB9AA50AAC"
 },
 {
  "timeToIdle": 5000,
  "class": "PanoramaCamera",
  "id": "camera_E1BAE404_F2E0_BDD2_41E4_006F9E76AFB9",
  "initialPosition": {
   "hfov": 100,
   "class": "PanoramaCameraPosition",
   "yaw": -85.6,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "idleSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 29,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "cubic_in"
    },
    {
     "yawDelta": 302,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "linear"
    },
    {
     "yawDelta": 29,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "id": "sequence_E1BA9404_F2E0_BDD2_41E5_C25F6DABDA40"
  },
  "initialSequence": "this.sequence_E1BA9404_F2E0_BDD2_41E5_C25F6DABDA40"
 },
 {
  "timeToIdle": 5000,
  "class": "PanoramaCamera",
  "id": "camera_E1A4141C_F2E0_BDF2_41B4_739D6F70ECB6",
  "initialPosition": {
   "hfov": 100,
   "class": "PanoramaCameraPosition",
   "yaw": 112.15,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "idleSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 29,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "cubic_in"
    },
    {
     "yawDelta": 302,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "linear"
    },
    {
     "yawDelta": 29,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "id": "sequence_E1A4041C_F2E0_BDF2_41EA_6614DE3E5D81"
  },
  "initialSequence": "this.sequence_E1A4041C_F2E0_BDF2_41EA_6614DE3E5D81"
 },
 {
  "timeToIdle": 5000,
  "class": "PanoramaCamera",
  "id": "camera_E1A0C430_F2E0_BE32_41D2_0C4A6921420D",
  "initialPosition": {
   "hfov": 100,
   "class": "PanoramaCameraPosition",
   "yaw": 5.26,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "idleSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 29,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "cubic_in"
    },
    {
     "yawDelta": 302,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "linear"
    },
    {
     "yawDelta": 29,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "id": "sequence_E1A0F430_F2E0_BE32_41EC_F37C79A46D4B"
  },
  "initialSequence": "this.sequence_E1A0F430_F2E0_BE32_41EC_F37C79A46D4B"
 },
 {
  "timeToIdle": 5000,
  "class": "PanoramaCamera",
  "id": "camera_E1AA0447_F2E0_BE5E_41E2_B93D5E591312",
  "initialPosition": {
   "hfov": 100,
   "class": "PanoramaCameraPosition",
   "yaw": -165.03,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "idleSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 29,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "cubic_in"
    },
    {
     "yawDelta": 302,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "linear"
    },
    {
     "yawDelta": 29,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "id": "sequence_E1AA3447_F2E0_BE5E_4190_2D452620995E"
  },
  "initialSequence": "this.sequence_E1AA3447_F2E0_BE5E_4190_2D452620995E"
 },
 {
  "timeToIdle": 5000,
  "class": "PanoramaCamera",
  "id": "camera_E196345B_F2E0_BE76_41BC_7EB4E1C45BEA",
  "initialPosition": {
   "hfov": 100,
   "class": "PanoramaCameraPosition",
   "yaw": -115.85,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "idleSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 29,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "cubic_in"
    },
    {
     "yawDelta": 302,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "linear"
    },
    {
     "yawDelta": 29,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "id": "sequence_E196D45B_F2E0_BE76_41E2_F8F1A58652E8"
  },
  "initialSequence": "this.sequence_E196D45B_F2E0_BE76_41E2_F8F1A58652E8"
 },
 {
  "timeToIdle": 5000,
  "class": "PanoramaCamera",
  "id": "camera_E190B472_F2E0_BE36_41DE_9299D3CF9DB7",
  "initialPosition": {
   "hfov": 100,
   "class": "PanoramaCameraPosition",
   "yaw": -144.83,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "idleSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 29,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "cubic_in"
    },
    {
     "yawDelta": 302,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "linear"
    },
    {
     "yawDelta": 29,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "id": "sequence_E19F5472_F2E0_BE36_41E2_00C5BDD10FC6"
  },
  "initialSequence": "this.sequence_E19F5472_F2E0_BE36_41E2_00C5BDD10FC6"
 },
 {
  "timeToIdle": 5000,
  "class": "PanoramaCamera",
  "id": "camera_E19BB487_F2E0_BEDE_41E2_F4DB5815E3DB",
  "initialPosition": {
   "hfov": 100,
   "class": "PanoramaCameraPosition",
   "yaw": -5.64,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "idleSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 29,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "cubic_in"
    },
    {
     "yawDelta": 302,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "linear"
    },
    {
     "yawDelta": 29,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "id": "sequence_E19BA487_F2E0_BEDE_41B2_8235837A9105"
  },
  "initialSequence": "this.sequence_E19BA487_F2E0_BEDE_41B2_8235837A9105"
 },
 {
  "timeToIdle": 5000,
  "class": "PanoramaCamera",
  "id": "camera_E184D4A5_F2E0_BED2_41E6_DA1C968BE4A6",
  "initialPosition": {
   "hfov": 100,
   "class": "PanoramaCameraPosition",
   "yaw": -4.57,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "idleSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 29,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "cubic_in"
    },
    {
     "yawDelta": 302,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "linear"
    },
    {
     "yawDelta": 29,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "id": "sequence_E184F4A5_F2E0_BED2_41EA_F34C7687D3DD"
  },
  "initialSequence": "this.sequence_E184F4A5_F2E0_BED2_41EA_F34C7687D3DD"
 },
 {
  "timeToIdle": 5000,
  "class": "PanoramaCamera",
  "id": "camera_E18FE4BC_F2E0_BE32_41E3_3BEA66898C9D",
  "initialPosition": {
   "hfov": 100,
   "class": "PanoramaCameraPosition",
   "yaw": -122.08,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "idleSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 29,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "cubic_in"
    },
    {
     "yawDelta": 302,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "linear"
    },
    {
     "yawDelta": 29,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "id": "sequence_E18F94BC_F2E0_BE32_41E5_08E16E2F8EA3"
  },
  "initialSequence": "this.sequence_E18F94BC_F2E0_BE32_41E5_08E16E2F8EA3"
 },
 {
  "timeToIdle": 5000,
  "class": "PanoramaCamera",
  "id": "camera_E18864D7_F2E0_BE7E_41E6_7B8B124075AF",
  "initialPosition": {
   "hfov": 100,
   "class": "PanoramaCameraPosition",
   "yaw": 2.83,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "idleSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 29,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "cubic_in"
    },
    {
     "yawDelta": 302,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "linear"
    },
    {
     "yawDelta": 29,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "id": "sequence_E18814D7_F2E0_BE7E_41D1_0F51A0713C88"
  },
  "initialSequence": "this.sequence_E18814D7_F2E0_BE7E_41D1_0F51A0713C88"
 },
 {
  "timeToIdle": 5000,
  "class": "PanoramaCamera",
  "id": "camera_E17364EC_F2E0_BE52_41D5_BA5DB890DB2B",
  "initialPosition": {
   "hfov": 100,
   "class": "PanoramaCameraPosition",
   "yaw": 39.68,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "idleSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 29,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "cubic_in"
    },
    {
     "yawDelta": 302,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "linear"
    },
    {
     "yawDelta": 29,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "id": "sequence_E17314EC_F2E0_BE52_41D8_60C4DC9574B1"
  },
  "initialSequence": "this.sequence_E17314EC_F2E0_BE52_41D8_60C4DC9574B1"
 },
 {
  "timeToIdle": 5000,
  "class": "PanoramaCamera",
  "id": "camera_E17CB503_F2E0_BFD6_41E6_1124B9CCCEA9",
  "initialPosition": {
   "hfov": 100,
   "class": "PanoramaCameraPosition",
   "yaw": -178.54,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "idleSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 29,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "cubic_in"
    },
    {
     "yawDelta": 302,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "linear"
    },
    {
     "yawDelta": 29,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "id": "sequence_E17CA503_F2E0_BFD6_41EE_46AEB02A4526"
  },
  "initialSequence": "this.sequence_E17CA503_F2E0_BFD6_41EE_46AEB02A4526"
 },
 {
  "timeToIdle": 5000,
  "class": "PanoramaCamera",
  "id": "camera_E166A515_F2E0_BFF2_41E4_49FF288E8B79",
  "initialPosition": {
   "hfov": 100,
   "class": "PanoramaCameraPosition",
   "yaw": -18.98,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "idleSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 29,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "cubic_in"
    },
    {
     "yawDelta": 302,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "linear"
    },
    {
     "yawDelta": 29,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "id": "sequence_E1655515_F2E0_BFF2_41E2_2018AFE96750"
  },
  "initialSequence": "this.sequence_E1655515_F2E0_BFF2_41E2_2018AFE96750"
 },
 {
  "timeToIdle": 5000,
  "class": "PanoramaCamera",
  "id": "camera_E16E2525_F2E0_BFD2_41D2_8CC11A8A982A",
  "initialPosition": {
   "hfov": 100,
   "class": "PanoramaCameraPosition",
   "yaw": -154.38,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "idleSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 29,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "cubic_in"
    },
    {
     "yawDelta": 302,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "linear"
    },
    {
     "yawDelta": 29,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "id": "sequence_E16EC525_F2E0_BFD2_41D7_8D806CA90FF3"
  },
  "initialSequence": "this.sequence_E16EC525_F2E0_BFD2_41D7_8D806CA90FF3"
 },
 {
  "timeToIdle": 5000,
  "class": "PanoramaCamera",
  "id": "camera_E156353C_F2E0_BE32_41EC_5C7F584B6262",
  "initialPosition": {
   "hfov": 100,
   "class": "PanoramaCameraPosition",
   "yaw": 25.63,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "idleSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 29,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "cubic_in"
    },
    {
     "yawDelta": 302,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "linear"
    },
    {
     "yawDelta": 29,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "id": "sequence_E156253C_F2E0_BE32_41D9_D8838DA12F24"
  },
  "initialSequence": "this.sequence_E156253C_F2E0_BE32_41D9_D8838DA12F24"
 },
 {
  "timeToIdle": 5000,
  "class": "PanoramaCamera",
  "id": "camera_E150C559_F2E0_BE72_41E2_912E8AE64AC6",
  "initialPosition": {
   "hfov": 100,
   "class": "PanoramaCameraPosition",
   "yaw": 120.74,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "idleSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 29,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "cubic_in"
    },
    {
     "yawDelta": 302,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "linear"
    },
    {
     "yawDelta": 29,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "id": "sequence_E150F559_F2E0_BE72_41E6_B59F7FCA304F"
  },
  "initialSequence": "this.sequence_E150F559_F2E0_BE72_41E6_B59F7FCA304F"
 },
 {
  "timeToIdle": 5000,
  "class": "PanoramaCamera",
  "id": "camera_E147C573_F2E0_BE36_41D7_CACFA025E103",
  "initialPosition": {
   "hfov": 100,
   "class": "PanoramaCameraPosition",
   "yaw": 37.68,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "idleSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 29,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "cubic_in"
    },
    {
     "yawDelta": 302,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "linear"
    },
    {
     "yawDelta": 29,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "id": "sequence_E147F573_F2E0_BE36_41CC_71726C9F4B0F"
  },
  "initialSequence": "this.sequence_E147F573_F2E0_BE36_41CC_71726C9F4B0F"
 },
 {
  "timeToIdle": 5000,
  "class": "PanoramaCamera",
  "id": "camera_E14D2583_F2E0_BED6_41E4_8188E4A41745",
  "initialPosition": {
   "hfov": 100,
   "class": "PanoramaCameraPosition",
   "yaw": 169.86,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "idleSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 29,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "cubic_in"
    },
    {
     "yawDelta": 302,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "linear"
    },
    {
     "yawDelta": 29,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "id": "sequence_E14DD583_F2E0_BED6_41E1_56012CA113A9"
  },
  "initialSequence": "this.sequence_E14DD583_F2E0_BED6_41E1_56012CA113A9"
 },
 {
  "timeToIdle": 5000,
  "class": "PanoramaCamera",
  "id": "camera_E1311593_F2E0_BEF6_41E3_78C0CBCD8C75",
  "initialPosition": {
   "hfov": 100,
   "class": "PanoramaCameraPosition",
   "yaw": -169.46,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "idleSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 29,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "cubic_in"
    },
    {
     "yawDelta": 302,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "linear"
    },
    {
     "yawDelta": 29,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "id": "sequence_E1310593_F2E0_BEF6_41B1_E94E17787A6B"
  },
  "initialSequence": "this.sequence_E1310593_F2E0_BEF6_41B1_E94E17787A6B"
 },
 {
  "timeToIdle": 5000,
  "class": "PanoramaCamera",
  "id": "camera_E12705A2_F2E0_BED6_41D1_5B74A4E843CE",
  "initialPosition": {
   "hfov": 100,
   "class": "PanoramaCameraPosition",
   "yaw": 83.92,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "idleSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 29,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "cubic_in"
    },
    {
     "yawDelta": 302,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "linear"
    },
    {
     "yawDelta": 29,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "id": "sequence_E12725A2_F2E0_BED6_41EC_1098416617CA"
  },
  "initialSequence": "this.sequence_E12725A2_F2E0_BED6_41EC_1098416617CA"
 },
 {
  "timeToIdle": 5000,
  "class": "PanoramaCamera",
  "id": "camera_E12B55B3_F2E0_BE36_41C3_FAB815659764",
  "initialPosition": {
   "hfov": 100,
   "class": "PanoramaCameraPosition",
   "yaw": -10.3,
   "pitch": 0
  },
  "automaticZoomSpeed": 10,
  "idleSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawDelta": 29,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "cubic_in"
    },
    {
     "yawDelta": 302,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "linear"
    },
    {
     "yawDelta": 29,
     "class": "DistancePanoramaCameraMovement",
     "yawSpeed": 5.31,
     "easing": "cubic_out"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "id": "sequence_E12B75B3_F2E0_BE36_41AD_8F7CF34B6B3C"
  },
  "initialSequence": "this.sequence_E12B75B3_F2E0_BE36_41AD_8F7CF34B6B3C"
 },
 {
  "autoplay": true,
  "class": "MediaAudio",
  "audio": {
   "oggUrl": "media/audio_F104C3CD_E457_51DA_41C8_F428D7326D45.ogg",
   "class": "AudioResource",
   "mp3Url": "media/audio_F104C3CD_E457_51DA_41C8_F428D7326D45.mp3"
  },
  "id": "audio_F104C3CD_E457_51DA_41C8_F428D7326D45"
 }
], "children": [
 {
  "toolTipBorderRadius": 0,
  "progressOpacity": 1,
  "playbackBarHeadWidth": 6,
  "playbackBarBackgroundColorDirection": "vertical",
  "paddingTop": 0,
  "progressBarOpacity": 1,
  "toolTipPaddingRight": 6,
  "progressBottom": 0,
  "progressBarBackgroundColorDirection": "vertical",
  "toolTipFontFamily": "Courier New",
  "progressBorderColor": "#000000",
  "playbackBarHeight": 10,
  "playbackBarHeadShadowVerticalLength": 0,
  "playbackBarBackgroundColor": [
   "#FFFFFF"
  ],
  "progressHeight": 10,
  "class": "ViewerArea",
  "playbackBarHeadShadow": true,
  "toolTipBackgroundColor": "transparent",
  "minWidth": 100,
  "playbackBarHeadBorderRadius": 0,
  "toolTipPaddingLeft": 6,
  "progressBackgroundColor": [
   "#FFFFFF"
  ],
  "transitionMode": "blending",
  "playbackBarHeadBorderColor": "#000000",
  "toolTipTextShadowHorizontalLength": 0,
  "shadow": false,
  "minHeight": 50,
  "borderSize": 0,
  "progressBorderSize": 0,
  "progressBackgroundOpacity": 1,
  "progressBarBorderRadius": 0,
  "paddingLeft": 0,
  "playbackBarBottom": 5,
  "toolTipShadowOpacity": 0,
  "playbackBarBorderSize": 0,
  "playbackBarHeadShadowHorizontalLength": 0,
  "playbackBarProgressBackgroundColor": [
   "#3399FF"
  ],
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "toolTipTextShadowVerticalLength": 0,
  "playbackBarBackgroundOpacity": 1,
  "progressBarBorderSize": 0,
  "toolTipTextShadowColor": "#000000",
  "toolTipShadowBlurRadius": 3,
  "borderRadius": 0,
  "playbackBarProgressBorderRadius": 0,
  "playbackBarProgressBorderSize": 0,
  "toolTipTextShadowOpacity": 1,
  "toolTipFontStyle": "normal",
  "toolTipBorderColor": "#009933",
  "width": "100%",
  "playbackBarRight": 0,
  "toolTipTextShadowBlurRadius": 5,
  "progressBackgroundColorRatios": [
   0
  ],
  "playbackBarHeadShadowOpacity": 0.7,
  "playbackBarHeadShadowBlurRadius": 3,
  "progressBorderRadius": 0,
  "playbackBarLeft": 0,
  "progressLeft": 0,
  "playbackBarHeadHeight": 15,
  "progressBarBackgroundColor": [
   "#3399FF"
  ],
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarProgressBorderColor": "#000000",
  "playbackBarProgressBackgroundColorRatios": [
   0
  ],
  "playbackBarProgressOpacity": 1,
  "toolTipFontSize": 20,
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "toolTipFontColor": "#FFFFFF",
  "top": 0,
  "toolTipShadowSpread": 0,
  "toolTipOpacity": 1,
  "paddingRight": 0,
  "playbackBarHeadOpacity": 1,
  "bottom": "0%",
  "id": "MainViewer",
  "progressBarBorderColor": "#000000",
  "toolTipPaddingBottom": 4,
  "playbackBarOpacity": 1,
  "progressBarBackgroundColorRatios": [
   0
  ],
  "toolTipBorderSize": 0,
  "paddingBottom": 0,
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "playbackBarBorderColor": "#FFFFFF",
  "playbackBarHeadShadowColor": "#000000",
  "playbackBarBorderRadius": 0,
  "playbackBarHeadBorderSize": 0,
  "left": 0,
  "toolTipPaddingTop": 4,
  "toolTipFontWeight": "bold",
  "progressRight": 0,
  "toolTipShadowColor": "#CC0000",
  "progressBackgroundColorDirection": "vertical"
 },
 {
  "borderRadius": 0,
  "contentOpaque": false,
  "paddingTop": 0,
  "width": "100%",
  "height": "25%",
  "backgroundOpacity": 0,
  "verticalAlign": "middle",
  "class": "Container",
  "gap": 0,
  "scrollBarColor": "#000000",
  "minWidth": 1,
  "scrollBarWidth": 10,
  "horizontalAlign": "center",
  "overflow": "scroll",
  "scrollBarVisible": "rollOver",
  "shadow": false,
  "paddingRight": 0,
  "minHeight": 1,
  "borderSize": 0,
  "bottom": "10.2%",
  "id": "Container_F948B6B2_E3E9_FF4A_41CC_3A951185F1A6",
  "paddingBottom": 0,
  "paddingLeft": 0,
  "left": "0%",
  "scrollBarOpacity": 0.5,
  "children": [
   {
    "borderRadius": 0,
    "contentOpaque": false,
    "paddingTop": 0,
    "width": "20%",
    "height": "100%",
    "backgroundOpacity": 0,
    "verticalAlign": "top",
    "class": "Container",
    "gap": 10,
    "scrollBarColor": "#000000",
    "minWidth": 1,
    "scrollBarWidth": 10,
    "horizontalAlign": "left",
    "overflow": "scroll",
    "scrollBarVisible": "rollOver",
    "shadow": false,
    "paddingRight": 0,
    "minHeight": 1,
    "borderSize": 0,
    "scrollBarOpacity": 0.5,
    "id": "Container_FBCD4B54_E3FB_95CD_41E9_357BB0F032FD",
    "paddingBottom": 0,
    "paddingLeft": 0,
    "layout": "absolute",
    "scrollBarMargin": 2
   },
   {
    "borderRadius": 10,
    "scrollBarMargin": 2,
    "backgroundColor": [
     "#FF6600",
     "#FF0000"
    ],
    "paddingTop": 0,
    "width": "60%",
    "height": "100%",
    "backgroundOpacity": 0.3,
    "contentOpaque": false,
    "class": "Container",
    "backgroundColorRatios": [
     0,
     1
    ],
    "verticalAlign": "middle",
    "scrollBarColor": "#000000",
    "minWidth": 1,
    "scrollBarWidth": 10,
    "gap": 10,
    "horizontalAlign": "center",
    "backgroundColorDirection": "vertical",
    "overflow": "scroll",
    "scrollBarVisible": "rollOver",
    "shadow": false,
    "paddingRight": 0,
    "minHeight": 1,
    "id": "Container_F4CB314D_E3F7_95DE_41D2_8BE619796094",
    "borderSize": 0,
    "scrollBarOpacity": 0.5,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "children": [
     {
      "borderRadius": 5,
      "itemThumbnailWidth": 75,
      "itemThumbnailScaleMode": "fit_outside",
      "itemThumbnailShadowSpread": 1,
      "itemLabelHorizontalAlign": "center",
      "verticalAlign": "top",
      "paddingTop": 0,
      "itemThumbnailOpacity": 1,
      "width": "100%",
      "selectedItemLabelFontWeight": "bold",
      "playList": "this.ThumbnailList_FBF27676_E3FF_9FCD_41DE_778D0C3DF0F4_playlist",
      "itemLabelFontSize": 14,
      "itemHorizontalAlign": "center",
      "height": 150,
      "backgroundOpacity": 0,
      "itemPaddingLeft": 3,
      "class": "ThumbnailList",
      "itemBackgroundOpacity": 0,
      "itemThumbnailShadowVerticalLength": 3,
      "gap": 10,
      "itemThumbnailHeight": 75,
      "itemOpacity": 1,
      "scrollBarColor": "#FFFFFF",
      "minWidth": 1,
      "scrollBarWidth": 10,
      "horizontalAlign": "left",
      "itemPaddingRight": 3,
      "itemThumbnailShadowOpacity": 0.8,
      "itemLabelGap": 5,
      "itemThumbnailShadowColor": "#000000",
      "scrollBarVisible": "rollOver",
      "itemLabelFontColor": "#FFFFFF",
      "shadow": false,
      "itemLabelTextDecoration": "none",
      "itemThumbnailShadowBlurRadius": 4,
      "paddingRight": 20,
      "minHeight": 1,
      "itemLabelFontFamily": "Arial",
      "itemLabelPosition": "bottom",
      "itemPaddingTop": 3,
      "borderSize": 0,
      "itemThumbnailBorderRadius": 5,
      "scrollBarOpacity": 0.5,
      "id": "ThumbnailList_FBF27676_E3FF_9FCD_41DE_778D0C3DF0F4",
      "paddingBottom": 0,
      "itemLabelFontWeight": "normal",
      "paddingLeft": 20,
      "itemThumbnailShadowHorizontalLength": 3,
      "itemBackgroundColorRatios": [],
      "itemThumbnailShadow": true,
      "itemBorderRadius": 0,
      "itemPaddingBottom": 3,
      "itemVerticalAlign": "middle",
      "itemLabelFontStyle": "normal",
      "itemBackgroundColor": [],
      "itemBackgroundColorDirection": "vertical",
      "layout": "horizontal",
      "itemMode": "normal",
      "scrollBarMargin": 2
     }
    ],
    "layout": "horizontal"
   },
   {
    "borderRadius": 0,
    "contentOpaque": false,
    "paddingTop": 0,
    "width": "20%",
    "height": "100%",
    "backgroundOpacity": 0,
    "verticalAlign": "top",
    "class": "Container",
    "gap": 10,
    "scrollBarColor": "#000000",
    "minWidth": 1,
    "scrollBarWidth": 10,
    "horizontalAlign": "left",
    "overflow": "scroll",
    "scrollBarVisible": "rollOver",
    "shadow": false,
    "paddingRight": 0,
    "minHeight": 1,
    "borderSize": 0,
    "scrollBarOpacity": 0.5,
    "id": "Container_F4112FC0_E3FB_ACC5_41C6_3D891DD0FB80",
    "paddingBottom": 0,
    "paddingLeft": 0,
    "layout": "absolute",
    "scrollBarMargin": 2
   }
  ],
  "layout": "horizontal",
  "scrollBarMargin": 2
 },
 {
  "borderRadius": 0,
  "contentOpaque": false,
  "paddingTop": 0,
  "width": "100%",
  "height": "10%",
  "backgroundOpacity": 0,
  "verticalAlign": "middle",
  "class": "Container",
  "gap": 0,
  "scrollBarColor": "#000000",
  "minWidth": 1,
  "scrollBarWidth": 10,
  "horizontalAlign": "center",
  "overflow": "scroll",
  "scrollBarVisible": "rollOver",
  "shadow": false,
  "paddingRight": 0,
  "minHeight": 1,
  "borderSize": 0,
  "bottom": "0%",
  "id": "Container_FB28D4D6_E3F8_FCCA_41D3_C6FD56CE83D1",
  "paddingBottom": 0,
  "paddingLeft": 0,
  "left": "0%",
  "scrollBarOpacity": 0.5,
  "children": [
   {
    "borderRadius": 0,
    "contentOpaque": false,
    "paddingTop": 0,
    "width": "20%",
    "height": "100%",
    "backgroundOpacity": 0,
    "verticalAlign": "middle",
    "class": "Container",
    "gap": 10,
    "scrollBarColor": "#000000",
    "minWidth": 1,
    "scrollBarWidth": 10,
    "horizontalAlign": "center",
    "overflow": "scroll",
    "scrollBarVisible": "rollOver",
    "shadow": false,
    "paddingRight": 0,
    "minHeight": 1,
    "borderSize": 0,
    "scrollBarOpacity": 0.5,
    "id": "Container_FAB7EE3B_E3FB_6FBA_41E3_50821BB51CDB",
    "paddingBottom": 0,
    "paddingLeft": 0,
    "children": [
     {
      "toolTipBorderRadius": 3,
      "pressedIconURL": "skin/Button_FF177AEF_E3D8_94DB_41E8_8A761D69B1F5_pressed.png",
      "borderRadius": 0,
      "rollOverIconHeight": 32,
      "toolTipFontStyle": "normal",
      "toolTipBorderColor": "#767676",
      "backgroundColor": [
       "#5794FE",
       "#0065CD"
      ],
      "pressedIconWidth": 32,
      "toolTipTextShadowOpacity": 0,
      "verticalAlign": "middle",
      "paddingTop": 0,
      "width": 32,
      "toolTipPaddingRight": 6,
      "layout": "horizontal",
      "toolTipTextShadowBlurRadius": 3,
      "toolTipFontFamily": "Arial",
      "height": 32,
      "backgroundOpacity": 0,
      "mode": "push",
      "class": "Button",
      "iconHeight": 32,
      "toolTip": "Show",
      "shadowSpread": 1,
      "backgroundColorRatios": [
       0,
       1
      ],
      "toolTipBackgroundColor": "#F6F6F6",
      "minWidth": 0,
      "gap": 0,
      "toolTipPaddingLeft": 6,
      "horizontalAlign": "center",
      "fontSize": 12,
      "rollOverIconWidth": 32,
      "iconBeforeLabel": true,
      "toolTipFontSize": 12,
      "fontWeight": "normal",
      "toolTipFontColor": "#606060",
      "backgroundColorDirection": "vertical",
      "rollOverBackgroundOpacity": 0,
      "toolTipOpacity": 1,
      "fontColor": "#FFFFFF",
      "iconWidth": 32,
      "cursor": "hand",
      "rollOverIconURL": "skin/Button_FF177AEF_E3D8_94DB_41E8_8A761D69B1F5_rollover.png",
      "shadow": false,
      "borderColor": "#000000",
      "paddingRight": 0,
      "textDecoration": "none",
      "click": "this.setComponentVisibility(this.Container_F948B6B2_E3E9_FF4A_41CC_3A951185F1A6, true, 0, this.effect_EBF35195_E48A_1908_41D1_4DE5D46A547D, 'showEffect', false); this.setComponentVisibility(this.Container_FBAAAB9E_E3F8_957A_41EA_1E9392759E3C, true, 0, this.effect_EBF35195_E48A_1908_41D1_4DE5D46A547D, 'showEffect', false); this.setComponentVisibility(this.Container_FB81263B_E3F8_BFBA_41E7_F44B87180ABC, true, 0, this.effect_EBF35195_E48A_1908_41D1_4DE5D46A547D, 'showEffect', false)",
      "minHeight": 0,
      "toolTipBorderSize": 1,
      "fontFamily": "Arial",
      "borderSize": 0,
      "toolTipPaddingBottom": 4,
      "shadowBlurRadius": 6,
      "toolTipShadowSpread": 0,
      "id": "Button_FF177AEF_E3D8_94DB_41E8_8A761D69B1F5",
      "paddingBottom": 0,
      "toolTipFontWeight": "normal",
      "toolTipShadowOpacity": 1,
      "fontStyle": "normal",
      "shadowColor": "#000000",
      "paddingLeft": 0,
      "toolTipPaddingTop": 4,
      "toolTipShadowHorizontalLength": 0,
      "pressedIconHeight": 32,
      "toolTipShadowColor": "#333333",
      "toolTipShadowVerticalLength": 0,
      "toolTipTextShadowColor": "#000000",
      "iconURL": "skin/Button_FF177AEF_E3D8_94DB_41E8_8A761D69B1F5.png",
      "pressedBackgroundOpacity": 0,
      "toolTipShadowBlurRadius": 3
     }
    ],
    "layout": "horizontal",
    "scrollBarMargin": 2
   },
   {
    "borderRadius": 10,
    "scrollBarMargin": 2,
    "backgroundColor": [
     "#FF6600",
     "#FF0000"
    ],
    "paddingTop": 0,
    "width": "60%",
    "height": "100%",
    "backgroundOpacity": 0.3,
    "contentOpaque": false,
    "class": "Container",
    "backgroundColorRatios": [
     0,
     1
    ],
    "verticalAlign": "middle",
    "scrollBarColor": "#000000",
    "minWidth": 1,
    "scrollBarWidth": 10,
    "gap": 26,
    "horizontalAlign": "center",
    "backgroundColorDirection": "vertical",
    "overflow": "scroll",
    "scrollBarVisible": "rollOver",
    "shadow": false,
    "paddingRight": 0,
    "minHeight": 1,
    "id": "Container_FBAAAB9E_E3F8_957A_41EA_1E9392759E3C",
    "borderSize": 0,
    "scrollBarOpacity": 0.5,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "children": [
     {
      "toolTipBorderRadius": 3,
      "borderRadius": 0,
      "toolTipFontStyle": "normal",
      "toolTipBorderColor": "#767676",
      "toolTipTextShadowOpacity": 0,
      "verticalAlign": "middle",
      "paddingTop": 0,
      "width": 35,
      "toolTipPaddingRight": 6,
      "toolTipTextShadowBlurRadius": 3,
      "toolTipFontFamily": "Arial",
      "height": 44,
      "backgroundOpacity": 0,
      "mode": "push",
      "class": "IconButton",
      "toolTip": "Show Map",
      "toolTipBackgroundColor": "#F6F6F6",
      "minWidth": 1,
      "toolTipPaddingLeft": 6,
      "horizontalAlign": "center",
      "transparencyActive": true,
      "toolTipFontSize": 12,
      "toolTipFontColor": "#606060",
      "toolTipOpacity": 1,
      "click": "this.setComponentVisibility(this.Container_F1D6ABAB_E4BA_091F_41D1_BEAE77E99991, true, 0, null, null, false)",
      "cursor": "hand",
      "rollOverIconURL": "skin/IconButton_E321E17D_F2E3_9632_41DD_C5F5AB2E09C4_rollover.png",
      "shadow": false,
      "paddingRight": 0,
      "minHeight": 1,
      "id": "IconButton_E321E17D_F2E3_9632_41DD_C5F5AB2E09C4",
      "borderSize": 0,
      "toolTipPaddingBottom": 4,
      "maxWidth": 500,
      "toolTipShadowSpread": 0,
      "toolTipBorderSize": 1,
      "paddingBottom": 0,
      "toolTipFontWeight": "normal",
      "maxHeight": 500,
      "toolTipShadowOpacity": 1,
      "paddingLeft": 0,
      "toolTipPaddingTop": 4,
      "toolTipShadowHorizontalLength": 0,
      "toolTipShadowColor": "#333333",
      "toolTipTextShadowColor": "#000000",
      "toolTipShadowVerticalLength": 0,
      "iconURL": "skin/IconButton_E321E17D_F2E3_9632_41DD_C5F5AB2E09C4.png",
      "toolTipShadowBlurRadius": 3
     },
     "this.IconButton_F84B218A_E3D7_9545_41E3_91BEF5236893",
     "this.Button_FF765C95_E3E8_934E_41E9_93B5590FB7F9",
     "this.Button_FEF3ED90_E3E8_AD46_41D6_2DA6145DF309",
     "this.Button_FDF1F975_E3DB_95CE_41E5_C0C8C9BB93CD",
     {
      "toolTipBorderRadius": 3,
      "pressedIconURL": "skin/Button_FF5CC4E1_E3D8_9CC7_41DD_7CFFEC4D6C72_pressed.png",
      "borderRadius": 0,
      "rollOverIconHeight": 32,
      "toolTipFontStyle": "normal",
      "toolTipBorderColor": "#767676",
      "backgroundColor": [
       "#5794FE",
       "#0065CD"
      ],
      "pressedIconWidth": 32,
      "toolTipTextShadowOpacity": 0,
      "verticalAlign": "middle",
      "paddingTop": 0,
      "width": 32,
      "toolTipPaddingRight": 6,
      "layout": "horizontal",
      "toolTipTextShadowBlurRadius": 3,
      "toolTipFontFamily": "Arial",
      "height": 32,
      "backgroundOpacity": 0,
      "mode": "push",
      "class": "Button",
      "iconHeight": 32,
      "toolTip": "Hide",
      "shadowSpread": 1,
      "backgroundColorRatios": [
       0,
       1
      ],
      "toolTipBackgroundColor": "#F6F6F6",
      "minWidth": 0,
      "gap": 0,
      "toolTipPaddingLeft": 6,
      "horizontalAlign": "center",
      "fontSize": 12,
      "rollOverIconWidth": 32,
      "iconBeforeLabel": true,
      "toolTipFontSize": 12,
      "fontWeight": "normal",
      "toolTipFontColor": "#606060",
      "backgroundColorDirection": "vertical",
      "rollOverBackgroundOpacity": 0,
      "toolTipOpacity": 1,
      "fontColor": "#FFFFFF",
      "iconWidth": 32,
      "cursor": "hand",
      "rollOverIconURL": "skin/Button_FF5CC4E1_E3D8_9CC7_41DD_7CFFEC4D6C72_rollover.png",
      "shadow": false,
      "borderColor": "#000000",
      "paddingRight": 0,
      "textDecoration": "none",
      "click": "this.setComponentVisibility(this.Container_F948B6B2_E3E9_FF4A_41CC_3A951185F1A6, false, 0, this.effect_EBE8483B_E48A_7778_41CB_5D15D55453AC, 'hideEffect', false); this.setComponentVisibility(this.Container_FBAAAB9E_E3F8_957A_41EA_1E9392759E3C, false, 0, this.effect_EBE8483B_E48A_7778_41CB_5D15D55453AC, 'hideEffect', false); this.setComponentVisibility(this.Container_FB81263B_E3F8_BFBA_41E7_F44B87180ABC, false, 0, this.effect_EBE8483B_E48A_7778_41CB_5D15D55453AC, 'hideEffect', false)",
      "minHeight": 0,
      "toolTipBorderSize": 1,
      "fontFamily": "Arial",
      "borderSize": 0,
      "toolTipPaddingBottom": 4,
      "shadowBlurRadius": 6,
      "toolTipShadowSpread": 0,
      "id": "Button_FF5CC4E1_E3D8_9CC7_41DD_7CFFEC4D6C72",
      "paddingBottom": 0,
      "toolTipFontWeight": "normal",
      "toolTipShadowOpacity": 1,
      "fontStyle": "normal",
      "shadowColor": "#000000",
      "paddingLeft": 0,
      "toolTipPaddingTop": 4,
      "toolTipShadowHorizontalLength": 0,
      "pressedIconHeight": 32,
      "toolTipShadowColor": "#333333",
      "toolTipShadowVerticalLength": 0,
      "toolTipTextShadowColor": "#000000",
      "iconURL": "skin/Button_FF5CC4E1_E3D8_9CC7_41DD_7CFFEC4D6C72.png",
      "pressedBackgroundOpacity": 0,
      "toolTipShadowBlurRadius": 3
     },
     {
      "toolTipBorderRadius": 3,
      "toolTipShadowVerticalLength": 0,
      "borderRadius": 0,
      "toolTipFontStyle": "normal",
      "toolTipBorderColor": "#767676",
      "toolTipTextShadowOpacity": 0,
      "verticalAlign": "middle",
      "paddingTop": 0,
      "width": 36,
      "toolTipPaddingRight": 6,
      "toolTipTextShadowBlurRadius": 3,
      "toolTipFontFamily": "Arial",
      "height": 36,
      "backgroundOpacity": 0,
      "mode": "toggle",
      "class": "IconButton",
      "toolTip": "Toggle Thumb list",
      "toolTipBackgroundColor": "#F6F6F6",
      "minWidth": 1,
      "toolTipPaddingLeft": 6,
      "horizontalAlign": "center",
      "transparencyActive": true,
      "toolTipFontSize": 12,
      "toolTipFontColor": "#606060",
      "toolTipOpacity": 1,
      "click": "if(!this.Container_F948B6B2_E3E9_FF4A_41CC_3A951185F1A6.get('visible')){ this.setComponentVisibility(this.Container_F948B6B2_E3E9_FF4A_41CC_3A951185F1A6, true, 0, this.effect_E38EF7D0_F2E3_FA72_41BF_05DCB58A2444, 'showEffect', false) } else if(this.Container_F948B6B2_E3E9_FF4A_41CC_3A951185F1A6.get('visible')){ this.setComponentVisibility(this.Container_F948B6B2_E3E9_FF4A_41CC_3A951185F1A6, false, 0, this.effect_E38EE7D0_F2E3_FA72_41E4_C05F85CB0C84, 'hideEffect', false) }",
      "cursor": "hand",
      "shadow": false,
      "paddingRight": 0,
      "minHeight": 1,
      "id": "IconButton_E3CDFC11_F2E1_EDF2_41E4_9FFAC58D710B",
      "borderSize": 0,
      "toolTipPaddingBottom": 4,
      "maxWidth": 500,
      "toolTipShadowSpread": 0,
      "toolTipBorderSize": 1,
      "paddingBottom": 0,
      "toolTipFontWeight": "normal",
      "maxHeight": 500,
      "toolTipShadowOpacity": 1,
      "paddingLeft": 0,
      "toolTipPaddingTop": 4,
      "toolTipShadowHorizontalLength": 0,
      "toolTipShadowColor": "#333333",
      "toolTipTextShadowColor": "#000000",
      "pressedIconURL": "skin/IconButton_E3CDFC11_F2E1_EDF2_41E4_9FFAC58D710B_pressed.png",
      "iconURL": "skin/IconButton_E3CDFC11_F2E1_EDF2_41E4_9FFAC58D710B.png",
      "toolTipShadowBlurRadius": 3
     },
     {
      "toolTipBorderRadius": 3,
      "pressedIconURL": "skin/Button_F878E023_E3D9_934A_41D3_B5D619D5AE06_pressed.png",
      "borderRadius": 0,
      "rollOverIconHeight": 40,
      "toolTipFontStyle": "normal",
      "toolTipBorderColor": "#767676",
      "backgroundColor": [
       "#5794FE",
       "#0065CD"
      ],
      "pressedIconWidth": 40,
      "toolTipTextShadowOpacity": 0,
      "verticalAlign": "middle",
      "paddingTop": 0,
      "width": 40,
      "toolTipPaddingRight": 6,
      "layout": "horizontal",
      "toolTipTextShadowBlurRadius": 3,
      "toolTipFontFamily": "Arial",
      "height": 40,
      "backgroundOpacity": 0,
      "mode": "toggle",
      "class": "Button",
      "iconHeight": 40,
      "toolTip": "Mute/Unmute audio",
      "shadowSpread": 1,
      "backgroundColorRatios": [
       0,
       1
      ],
      "toolTipBackgroundColor": "#F6F6F6",
      "minWidth": 0,
      "gap": 0,
      "toolTipPaddingLeft": 6,
      "horizontalAlign": "center",
      "fontSize": 12,
      "rollOverIconWidth": 40,
      "iconBeforeLabel": true,
      "toolTipFontSize": 12,
      "fontWeight": "normal",
      "toolTipFontColor": "#606060",
      "backgroundColorDirection": "vertical",
      "rollOverBackgroundOpacity": 0,
      "toolTipOpacity": 1,
      "fontColor": "#FFFFFF",
      "iconWidth": 40,
      "cursor": "hand",
      "shadow": false,
      "borderColor": "#000000",
      "paddingRight": 0,
      "textDecoration": "none",
      "minHeight": 0,
      "toolTipBorderSize": 1,
      "fontFamily": "Arial",
      "borderSize": 0,
      "toolTipPaddingBottom": 4,
      "shadowBlurRadius": 6,
      "toolTipShadowSpread": 0,
      "id": "Button_F878E023_E3D9_934A_41D3_B5D619D5AE06",
      "paddingBottom": 0,
      "toolTipFontWeight": "normal",
      "toolTipShadowOpacity": 1,
      "fontStyle": "normal",
      "shadowColor": "#000000",
      "paddingLeft": 0,
      "toolTipPaddingTop": 4,
      "toolTipShadowHorizontalLength": 0,
      "pressedIconHeight": 40,
      "toolTipShadowColor": "#333333",
      "toolTipShadowVerticalLength": 0,
      "toolTipTextShadowColor": "#000000",
      "iconURL": "skin/Button_F878E023_E3D9_934A_41D3_B5D619D5AE06.png",
      "pressedBackgroundOpacity": 0,
      "toolTipShadowBlurRadius": 3
     },
     {
      "toolTipBorderRadius": 3,
      "toolTipShadowVerticalLength": 0,
      "borderRadius": 0,
      "toolTipFontStyle": "normal",
      "toolTipBorderColor": "#767676",
      "toolTipTextShadowOpacity": 0,
      "verticalAlign": "middle",
      "paddingTop": 0,
      "width": 40,
      "toolTipPaddingRight": 6,
      "toolTipTextShadowBlurRadius": 3,
      "toolTipFontFamily": "Arial",
      "height": 30,
      "backgroundOpacity": 0,
      "mode": "toggle",
      "class": "IconButton",
      "toolTip": "Fullscreen",
      "toolTipBackgroundColor": "#F6F6F6",
      "minWidth": 1,
      "toolTipPaddingLeft": 6,
      "horizontalAlign": "center",
      "transparencyActive": true,
      "toolTipFontSize": 12,
      "toolTipFontColor": "#606060",
      "toolTipOpacity": 1,
      "cursor": "hand",
      "shadow": false,
      "paddingRight": 0,
      "minHeight": 1,
      "id": "IconButton_EA1E3BFC_E48A_08F9_41E9_79A5BA601B24",
      "borderSize": 0,
      "toolTipPaddingBottom": 4,
      "maxWidth": 128,
      "toolTipShadowSpread": 0,
      "toolTipBorderSize": 1,
      "paddingBottom": 0,
      "toolTipFontWeight": "normal",
      "maxHeight": 128,
      "toolTipShadowOpacity": 1,
      "paddingLeft": 0,
      "toolTipPaddingTop": 4,
      "toolTipShadowHorizontalLength": 0,
      "toolTipShadowColor": "#333333",
      "toolTipTextShadowColor": "#000000",
      "iconURL": "skin/IconButton_EA1E3BFC_E48A_08F9_41E9_79A5BA601B24.png",
      "toolTipShadowBlurRadius": 3
     }
    ],
    "layout": "horizontal"
   },
   {
    "borderRadius": 0,
    "contentOpaque": false,
    "paddingTop": 0,
    "width": "20%",
    "height": "100%",
    "backgroundOpacity": 0,
    "verticalAlign": "middle",
    "class": "Container",
    "gap": 10,
    "scrollBarColor": "#000000",
    "minWidth": 1,
    "scrollBarWidth": 10,
    "horizontalAlign": "center",
    "overflow": "scroll",
    "scrollBarVisible": "rollOver",
    "shadow": false,
    "paddingRight": 0,
    "minHeight": 1,
    "borderSize": 0,
    "scrollBarOpacity": 0.5,
    "id": "Container_FB81263B_E3F8_BFBA_41E7_F44B87180ABC",
    "paddingBottom": 0,
    "paddingLeft": 0,
    "layout": "horizontal",
    "scrollBarMargin": 2
   }
  ],
  "layout": "horizontal",
  "scrollBarMargin": 2
 },
 {
  "borderRadius": 0,
  "scrollBarMargin": 2,
  "backgroundColor": [
   "#000000",
   "#000000"
  ],
  "paddingTop": 0,
  "width": "100%",
  "height": "100%",
  "backgroundOpacity": 0.6,
  "contentOpaque": false,
  "class": "Container",
  "backgroundColorRatios": [
   0,
   1
  ],
  "verticalAlign": "top",
  "scrollBarColor": "#000000",
  "minWidth": 1,
  "scrollBarWidth": 10,
  "gap": 10,
  "horizontalAlign": "left",
  "backgroundColorDirection": "vertical",
  "overflow": "scroll",
  "scrollBarVisible": "rollOver",
  "top": "0%",
  "shadow": false,
  "paddingRight": 0,
  "minHeight": 1,
  "visible": false,
  "id": "Container_F1D6ABAB_E4BA_091F_41D1_BEAE77E99991",
  "borderSize": 0,
  "scrollBarOpacity": 0.5,
  "paddingBottom": 0,
  "paddingLeft": 0,
  "left": "0%",
  "children": [
   {
    "borderRadius": 0,
    "backgroundColor": [
     "#FFFFFF",
     "#FFFFFF"
    ],
    "scrollBarMargin": 2,
    "paddingTop": 0,
    "backgroundOpacity": 0.3,
    "contentOpaque": false,
    "class": "Container",
    "backgroundColorRatios": [
     0,
     1
    ],
    "verticalAlign": "top",
    "scrollBarColor": "#000000",
    "minWidth": 1,
    "scrollBarWidth": 10,
    "gap": 10,
    "horizontalAlign": "left",
    "backgroundColorDirection": "vertical",
    "overflow": "scroll",
    "scrollBarVisible": "rollOver",
    "top": "10%",
    "shadow": false,
    "paddingRight": 0,
    "minHeight": 1,
    "id": "Container_F192DC5B_E4BA_0F3F_41D6_98C6B8BF9B0C",
    "borderSize": 0,
    "bottom": "10%",
    "paddingBottom": 0,
    "paddingLeft": 0,
    "left": "10%",
    "scrollBarOpacity": 0.5,
    "children": [
     {
      "borderRadius": 0,
      "backgroundColor": [
       "#FFFFFF"
      ],
      "paddingTop": 0,
      "width": "100%",
      "insetBorder": false,
      "height": "100%",
      "backgroundOpacity": 1,
      "class": "WebFrame",
      "backgroundColorRatios": [
       0
      ],
      "minWidth": 1,
      "url": "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13235.531658464759!2d73.3885472!3d33.9698488!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38de319089a8f14b%3A0xc39f3515db5e255b!2sCrown%20Inn%20Apartments%20Murree!5e0!3m2!1sen!2s!4v1678871151474!5m2!1sen!2s",
      "backgroundColorDirection": "vertical",
      "top": "0%",
      "shadow": false,
      "paddingRight": 0,
      "minHeight": 1,
      "id": "WebFrame_F06C4199_E486_793B_41E6_F288F2AA3B3D",
      "borderSize": 0,
      "paddingBottom": 0,
      "paddingLeft": 0,
      "left": "0%",
      "scrollEnabled": true
     },
     {
      "toolTipBorderRadius": 3,
      "borderRadius": 0,
      "toolTipShadowBlurRadius": 3,
      "toolTipFontStyle": "normal",
      "toolTipBorderColor": "#767676",
      "toolTipTextShadowOpacity": 0,
      "verticalAlign": "middle",
      "paddingTop": 0,
      "width": 41,
      "toolTipPaddingRight": 6,
      "toolTipTextShadowBlurRadius": 3,
      "toolTipFontFamily": "Arial",
      "height": 44,
      "backgroundOpacity": 0,
      "mode": "push",
      "toolTip": "Close",
      "class": "IconButton",
      "toolTipBackgroundColor": "#F6F6F6",
      "minWidth": 1,
      "toolTipPaddingLeft": 6,
      "horizontalAlign": "center",
      "transparencyActive": true,
      "toolTipFontSize": 12,
      "toolTipFontColor": "#606060",
      "top": "0%",
      "click": "this.setComponentVisibility(this.Container_F1D6ABAB_E4BA_091F_41D1_BEAE77E99991, false, 0, null, null, false)",
      "cursor": "hand",
      "shadow": false,
      "toolTipOpacity": 1,
      "paddingRight": 0,
      "minHeight": 1,
      "id": "IconButton_F184F0AB_E48E_F71F_41BC_A4D4FF401D07",
      "borderSize": 0,
      "toolTipPaddingBottom": 4,
      "maxWidth": 500,
      "toolTipShadowSpread": 0,
      "toolTipBorderSize": 1,
      "paddingBottom": 0,
      "toolTipFontWeight": "normal",
      "maxHeight": 500,
      "toolTipShadowOpacity": 1,
      "paddingLeft": 0,
      "toolTipPaddingTop": 4,
      "toolTipShadowHorizontalLength": 0,
      "toolTipShadowColor": "#333333",
      "toolTipTextShadowColor": "#000000",
      "toolTipShadowVerticalLength": 0,
      "iconURL": "skin/IconButton_F184F0AB_E48E_F71F_41BC_A4D4FF401D07.png",
      "right": "0%"
     }
    ],
    "layout": "absolute",
    "right": "10%"
   }
  ],
  "layout": "absolute"
 },
 {
  "borderRadius": 0,
  "contentOpaque": false,
  "paddingTop": 0,
  "width": "100%",
  "height": "15%",
  "backgroundOpacity": 0,
  "verticalAlign": "top",
  "class": "Container",
  "gap": 10,
  "scrollBarColor": "#000000",
  "minWidth": 1,
  "scrollBarWidth": 10,
  "horizontalAlign": "left",
  "overflow": "scroll",
  "scrollBarVisible": "rollOver",
  "top": "0%",
  "shadow": false,
  "paddingRight": 0,
  "minHeight": 1,
  "borderSize": 0,
  "scrollBarOpacity": 0.5,
  "id": "Container_E96EB46B_E63B_DB16_41D4_2E1841170C6A",
  "paddingBottom": 0,
  "paddingLeft": 0,
  "left": "0%",
  "children": [
   {
    "borderRadius": 0,
    "contentOpaque": false,
    "paddingTop": 0,
    "width": "50%",
    "height": "100%",
    "backgroundOpacity": 0,
    "verticalAlign": "middle",
    "class": "Container",
    "gap": 10,
    "scrollBarColor": "#000000",
    "minWidth": 1,
    "scrollBarWidth": 10,
    "horizontalAlign": "left",
    "overflow": "scroll",
    "scrollBarVisible": "rollOver",
    "shadow": false,
    "paddingRight": 0,
    "minHeight": 1,
    "borderSize": 0,
    "scrollBarOpacity": 0.5,
    "id": "Container_E8C43719_E639_E532_41C3_ADB3C5DEF5B9",
    "paddingBottom": 0,
    "paddingLeft": 0,
    "children": [
     {
      "borderRadius": 0,
      "verticalAlign": "middle",
      "paddingTop": 0,
      "width": "20.11%",
      "height": "100%",
      "backgroundOpacity": 0,
      "class": "Image",
      "minWidth": 1,
      "horizontalAlign": "center",
      "scaleMode": "fit_inside",
      "url": "skin/Image_F4914DA0_E42E_7C85_41B5_06DB110E9CE6.png",
      "shadow": false,
      "paddingRight": 0,
      "minHeight": 1,
      "borderSize": 0,
      "maxWidth": 403,
      "id": "Image_F4914DA0_E42E_7C85_41B5_06DB110E9CE6",
      "paddingBottom": 0,
      "maxHeight": 403,
      "paddingLeft": 0
     }
    ],
    "layout": "horizontal",
    "scrollBarMargin": 2
   },
   {
    "borderRadius": 0,
    "contentOpaque": false,
    "paddingTop": 0,
    "width": "50%",
    "height": "100%",
    "backgroundOpacity": 0,
    "verticalAlign": "middle",
    "class": "Container",
    "gap": 10,
    "scrollBarColor": "#000000",
    "minWidth": 1,
    "scrollBarWidth": 10,
    "horizontalAlign": "right",
    "overflow": "scroll",
    "scrollBarVisible": "rollOver",
    "shadow": false,
    "paddingRight": 0,
    "minHeight": 1,
    "borderSize": 0,
    "scrollBarOpacity": 0.5,
    "id": "Container_E917C3F5_E639_FCF3_41EC_1C465BD00661",
    "paddingBottom": 0,
    "paddingLeft": 0,
    "children": [
     {
      "borderRadius": 0,
      "verticalAlign": "middle",
      "paddingTop": 0,
      "width": "19.561%",
      "height": "96.703%",
      "backgroundOpacity": 0,
      "class": "Image",
      "minWidth": 1,
      "horizontalAlign": "center",
      "scaleMode": "fit_inside",
      "url": "skin/Image_F4605D46_E42A_1D8D_41E6_F03D691FC86B.png",
      "shadow": false,
      "paddingRight": 0,
      "minHeight": 1,
      "borderSize": 0,
      "maxWidth": 267,
      "id": "Image_F4605D46_E42A_1D8D_41E6_F03D691FC86B",
      "paddingBottom": 0,
      "maxHeight": 307,
      "paddingLeft": 0
     }
    ],
    "layout": "horizontal",
    "scrollBarMargin": 2
   }
  ],
  "layout": "horizontal",
  "scrollBarMargin": 2
 }
], 
 "borderRadius": 0,
 "scrollBarMargin": 2,
 "paddingTop": 0,
 "width": "100%",
 "height": "100%",
 "contentOpaque": false,
 "class": "Player",
 "verticalAlign": "top",
 "scrollBarColor": "#000000",
 "minWidth": 20,
 "scrollBarWidth": 10,
 "gap": 10,
 "horizontalAlign": "left",
 "backgroundPreloadEnabled": true,
 "overflow": "visible",
 "scrollBarVisible": "rollOver",
 "vrPolyfillScale": 0.5,
 "shadow": false,
 "paddingRight": 0,
 "minHeight": 20,
 "id": "rootPlayer",
 "borderSize": 0,
 "scrollBarOpacity": 0.5,
 "paddingBottom": 0,
 "paddingLeft": 0,
 "buttonToggleMute": "this.Button_F878E023_E3D9_934A_41D3_B5D619D5AE06",
 "start": "this.playAudioList([this.audio_F104C3CD_E457_51DA_41C8_F428D7326D45]); this.syncPlaylists([this.ThumbnailList_FBF27676_E3FF_9FCD_41DE_778D0C3DF0F4_playlist,this.mainPlayList]); this.mainPlayList.set('selectedIndex', 0); if(!this.get('fullscreenAvailable')) { [this.IconButton_EA1E3BFC_E48A_08F9_41E9_79A5BA601B24].forEach(function(component) { component.set('visible', false); }) }",
 "buttonToggleFullscreen": "this.IconButton_EA1E3BFC_E48A_08F9_41E9_79A5BA601B24",
 "scripts": {
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "registerKey": function(key, value){  window[key] = value; },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){  var audios = window.currentGlobalAudios; if(!audios) return; var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var self = this; var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, self); playList.unbind('change', changePlayListFunction, self); } }; if(endFunction){ var playListItem = playList.get('items')[index]; var playListItemClass = playListItem.get('class'); if(playListItemClass == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); endObject = camera.get('initialSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('visible', true); htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('visible', false); htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "autotriggerAtStart": function(player, callback){  var stateChangeFunction = function(event){ if(event.data.state == 'playing'){ callback(); player.unbind('stateChange', stateChangeFunction, this); } }; player.bind('stateChange', stateChangeFunction, this); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf') { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "unregisterKey": function(key){  delete window[key]; },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('text') == '' || component.get('text') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else if(player.get('state') == 'playing') { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "resumeGlobalAudios": function(caller){  if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller) return; window.currentGlobalAudiosActionCaller = undefined; var audios = window.currentGlobalAudios; if(!audios) return; for(var audio in audios){ audios[audio].play(); } },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "pauseGlobalAudios": function(caller){  var audios = window.currentGlobalAudios; window.currentGlobalAudiosActionCaller = caller; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(a.get('state') == 'playing') a.pause(); } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); }; },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "getKey": function(key){  return window[key]; },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "startPanoramaWithCamera": function(panorama, camera){  var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == panorama && item.get('class') == 'PanoramaPlayListItem'){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { var restoreCameraOnStop = function(){ for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); } restoreItems[0].item.unbind('stop', restoreCameraOnStop, this); }; restoreItems[0].item.bind('stop', restoreCameraOnStop, this); } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "existsKey": function(key){  return key in window; }
 },
 "layout": "absolute",
 "mouseWheelEnabled": true
})