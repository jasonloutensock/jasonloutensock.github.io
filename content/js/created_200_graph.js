/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 5212.0, "minX": 0.0, "maxY": 19309.0, "series": [{"data": [[0.0, 5212.0], [0.1, 5212.0], [0.2, 5212.0], [0.3, 5212.0], [0.4, 5212.0], [0.5, 5328.0], [0.6, 5328.0], [0.7, 5328.0], [0.8, 5328.0], [0.9, 5328.0], [1.0, 5340.0], [1.1, 5340.0], [1.2, 5340.0], [1.3, 5340.0], [1.4, 5340.0], [1.5, 5371.0], [1.6, 5371.0], [1.7, 5371.0], [1.8, 5371.0], [1.9, 5371.0], [2.0, 5388.0], [2.1, 5388.0], [2.2, 5388.0], [2.3, 5388.0], [2.4, 5388.0], [2.5, 5417.0], [2.6, 5417.0], [2.7, 5417.0], [2.8, 5417.0], [2.9, 5417.0], [3.0, 5437.0], [3.1, 5437.0], [3.2, 5437.0], [3.3, 5437.0], [3.4, 5437.0], [3.5, 5525.0], [3.6, 5525.0], [3.7, 5525.0], [3.8, 5525.0], [3.9, 5525.0], [4.0, 5605.0], [4.1, 5605.0], [4.2, 5605.0], [4.3, 5605.0], [4.4, 5605.0], [4.5, 5705.0], [4.6, 5705.0], [4.7, 5705.0], [4.8, 5705.0], [4.9, 5705.0], [5.0, 5707.0], [5.1, 5707.0], [5.2, 5707.0], [5.3, 5707.0], [5.4, 5707.0], [5.5, 5782.0], [5.6, 5782.0], [5.7, 5782.0], [5.8, 5782.0], [5.9, 5782.0], [6.0, 5807.0], [6.1, 5807.0], [6.2, 5807.0], [6.3, 5807.0], [6.4, 5807.0], [6.5, 5939.0], [6.6, 5939.0], [6.7, 5939.0], [6.8, 5939.0], [6.9, 5939.0], [7.0, 5969.0], [7.1, 5969.0], [7.2, 5969.0], [7.3, 5969.0], [7.4, 5969.0], [7.5, 5998.0], [7.6, 5998.0], [7.7, 5998.0], [7.8, 5998.0], [7.9, 5998.0], [8.0, 6042.0], [8.1, 6042.0], [8.2, 6042.0], [8.3, 6042.0], [8.4, 6042.0], [8.5, 6052.0], [8.6, 6052.0], [8.7, 6052.0], [8.8, 6052.0], [8.9, 6052.0], [9.0, 6058.0], [9.1, 6058.0], [9.2, 6058.0], [9.3, 6058.0], [9.4, 6058.0], [9.5, 6155.0], [9.6, 6155.0], [9.7, 6155.0], [9.8, 6155.0], [9.9, 6155.0], [10.0, 6320.0], [10.1, 6320.0], [10.2, 6320.0], [10.3, 6320.0], [10.4, 6320.0], [10.5, 6482.0], [10.6, 6482.0], [10.7, 6482.0], [10.8, 6482.0], [10.9, 6482.0], [11.0, 6549.0], [11.1, 6549.0], [11.2, 6549.0], [11.3, 6549.0], [11.4, 6549.0], [11.5, 6604.0], [11.6, 6604.0], [11.7, 6604.0], [11.8, 6604.0], [11.9, 6604.0], [12.0, 6644.0], [12.1, 6644.0], [12.2, 6644.0], [12.3, 6644.0], [12.4, 6644.0], [12.5, 6730.0], [12.6, 6730.0], [12.7, 6730.0], [12.8, 6730.0], [12.9, 6730.0], [13.0, 6749.0], [13.1, 6749.0], [13.2, 6749.0], [13.3, 6749.0], [13.4, 6749.0], [13.5, 6779.0], [13.6, 6779.0], [13.7, 6779.0], [13.8, 6779.0], [13.9, 6779.0], [14.0, 6839.0], [14.1, 6839.0], [14.2, 6839.0], [14.3, 6839.0], [14.4, 6839.0], [14.5, 6919.0], [14.6, 6919.0], [14.7, 6919.0], [14.8, 6919.0], [14.9, 6919.0], [15.0, 6923.0], [15.1, 6923.0], [15.2, 6923.0], [15.3, 6923.0], [15.4, 6923.0], [15.5, 6939.0], [15.6, 6939.0], [15.7, 6939.0], [15.8, 6939.0], [15.9, 6939.0], [16.0, 6940.0], [16.1, 6940.0], [16.2, 6940.0], [16.3, 6940.0], [16.4, 6940.0], [16.5, 6953.0], [16.6, 6953.0], [16.7, 6953.0], [16.8, 6953.0], [16.9, 6953.0], [17.0, 7007.0], [17.1, 7007.0], [17.2, 7007.0], [17.3, 7007.0], [17.4, 7007.0], [17.5, 7039.0], [17.6, 7039.0], [17.7, 7039.0], [17.8, 7039.0], [17.9, 7039.0], [18.0, 7039.0], [18.1, 7039.0], [18.2, 7039.0], [18.3, 7039.0], [18.4, 7039.0], [18.5, 7189.0], [18.6, 7189.0], [18.7, 7189.0], [18.8, 7189.0], [18.9, 7189.0], [19.0, 7210.0], [19.1, 7210.0], [19.2, 7210.0], [19.3, 7210.0], [19.4, 7210.0], [19.5, 7261.0], [19.6, 7261.0], [19.7, 7261.0], [19.8, 7261.0], [19.9, 7261.0], [20.0, 7373.0], [20.1, 7373.0], [20.2, 7373.0], [20.3, 7373.0], [20.4, 7373.0], [20.5, 7435.0], [20.6, 7435.0], [20.7, 7435.0], [20.8, 7435.0], [20.9, 7435.0], [21.0, 7487.0], [21.1, 7487.0], [21.2, 7487.0], [21.3, 7487.0], [21.4, 7487.0], [21.5, 7559.0], [21.6, 7559.0], [21.7, 7559.0], [21.8, 7559.0], [21.9, 7559.0], [22.0, 7593.0], [22.1, 7593.0], [22.2, 7593.0], [22.3, 7593.0], [22.4, 7593.0], [22.5, 7669.0], [22.6, 7669.0], [22.7, 7669.0], [22.8, 7669.0], [22.9, 7669.0], [23.0, 7732.0], [23.1, 7732.0], [23.2, 7732.0], [23.3, 7732.0], [23.4, 7732.0], [23.5, 7800.0], [23.6, 7800.0], [23.7, 7800.0], [23.8, 7800.0], [23.9, 7800.0], [24.0, 7862.0], [24.1, 7862.0], [24.2, 7862.0], [24.3, 7862.0], [24.4, 7862.0], [24.5, 7882.0], [24.6, 7882.0], [24.7, 7882.0], [24.8, 7882.0], [24.9, 7882.0], [25.0, 8050.0], [25.1, 8050.0], [25.2, 8050.0], [25.3, 8050.0], [25.4, 8050.0], [25.5, 8234.0], [25.6, 8234.0], [25.7, 8234.0], [25.8, 8234.0], [25.9, 8234.0], [26.0, 8404.0], [26.1, 8404.0], [26.2, 8404.0], [26.3, 8404.0], [26.4, 8404.0], [26.5, 8506.0], [26.6, 8506.0], [26.7, 8506.0], [26.8, 8506.0], [26.9, 8506.0], [27.0, 8613.0], [27.1, 8613.0], [27.2, 8613.0], [27.3, 8613.0], [27.4, 8613.0], [27.5, 8629.0], [27.6, 8629.0], [27.7, 8629.0], [27.8, 8629.0], [27.9, 8629.0], [28.0, 8636.0], [28.1, 8636.0], [28.2, 8636.0], [28.3, 8636.0], [28.4, 8636.0], [28.5, 8683.0], [28.6, 8683.0], [28.7, 8683.0], [28.8, 8683.0], [28.9, 8683.0], [29.0, 8711.0], [29.1, 8711.0], [29.2, 8711.0], [29.3, 8711.0], [29.4, 8711.0], [29.5, 8711.0], [29.6, 8711.0], [29.7, 8711.0], [29.8, 8711.0], [29.9, 8711.0], [30.0, 8777.0], [30.1, 8777.0], [30.2, 8777.0], [30.3, 8777.0], [30.4, 8777.0], [30.5, 8796.0], [30.6, 8796.0], [30.7, 8796.0], [30.8, 8796.0], [30.9, 8796.0], [31.0, 8883.0], [31.1, 8883.0], [31.2, 8883.0], [31.3, 8883.0], [31.4, 8883.0], [31.5, 8921.0], [31.6, 8921.0], [31.7, 8921.0], [31.8, 8921.0], [31.9, 8921.0], [32.0, 8967.0], [32.1, 8967.0], [32.2, 8967.0], [32.3, 8967.0], [32.4, 8967.0], [32.5, 8967.0], [32.6, 8967.0], [32.7, 8967.0], [32.8, 8967.0], [32.9, 8967.0], [33.0, 8974.0], [33.1, 8974.0], [33.2, 8974.0], [33.3, 8974.0], [33.4, 8974.0], [33.5, 8994.0], [33.6, 8994.0], [33.7, 8994.0], [33.8, 8994.0], [33.9, 8994.0], [34.0, 8995.0], [34.1, 8995.0], [34.2, 8995.0], [34.3, 8995.0], [34.4, 8995.0], [34.5, 9081.0], [34.6, 9081.0], [34.7, 9081.0], [34.8, 9081.0], [34.9, 9081.0], [35.0, 9107.0], [35.1, 9107.0], [35.2, 9107.0], [35.3, 9107.0], [35.4, 9107.0], [35.5, 9138.0], [35.6, 9138.0], [35.7, 9138.0], [35.8, 9138.0], [35.9, 9138.0], [36.0, 9241.0], [36.1, 9241.0], [36.2, 9241.0], [36.3, 9241.0], [36.4, 9241.0], [36.5, 9303.0], [36.6, 9303.0], [36.7, 9303.0], [36.8, 9303.0], [36.9, 9303.0], [37.0, 9331.0], [37.1, 9331.0], [37.2, 9331.0], [37.3, 9331.0], [37.4, 9331.0], [37.5, 9400.0], [37.6, 9400.0], [37.7, 9400.0], [37.8, 9400.0], [37.9, 9400.0], [38.0, 9434.0], [38.1, 9434.0], [38.2, 9434.0], [38.3, 9434.0], [38.4, 9434.0], [38.5, 9486.0], [38.6, 9486.0], [38.7, 9486.0], [38.8, 9486.0], [38.9, 9486.0], [39.0, 9599.0], [39.1, 9599.0], [39.2, 9599.0], [39.3, 9599.0], [39.4, 9599.0], [39.5, 9604.0], [39.6, 9604.0], [39.7, 9604.0], [39.8, 9604.0], [39.9, 9604.0], [40.0, 9610.0], [40.1, 9610.0], [40.2, 9610.0], [40.3, 9610.0], [40.4, 9610.0], [40.5, 10001.0], [40.6, 10001.0], [40.7, 10001.0], [40.8, 10001.0], [40.9, 10001.0], [41.0, 10013.0], [41.1, 10013.0], [41.2, 10013.0], [41.3, 10013.0], [41.4, 10013.0], [41.5, 10031.0], [41.6, 10031.0], [41.7, 10031.0], [41.8, 10031.0], [41.9, 10031.0], [42.0, 10156.0], [42.1, 10156.0], [42.2, 10156.0], [42.3, 10156.0], [42.4, 10156.0], [42.5, 10249.0], [42.6, 10249.0], [42.7, 10249.0], [42.8, 10249.0], [42.9, 10249.0], [43.0, 10314.0], [43.1, 10314.0], [43.2, 10314.0], [43.3, 10314.0], [43.4, 10314.0], [43.5, 10332.0], [43.6, 10332.0], [43.7, 10332.0], [43.8, 10332.0], [43.9, 10332.0], [44.0, 10333.0], [44.1, 10333.0], [44.2, 10333.0], [44.3, 10333.0], [44.4, 10333.0], [44.5, 10356.0], [44.6, 10356.0], [44.7, 10356.0], [44.8, 10356.0], [44.9, 10356.0], [45.0, 10427.0], [45.1, 10427.0], [45.2, 10427.0], [45.3, 10427.0], [45.4, 10427.0], [45.5, 10484.0], [45.6, 10484.0], [45.7, 10484.0], [45.8, 10484.0], [45.9, 10484.0], [46.0, 10664.0], [46.1, 10664.0], [46.2, 10664.0], [46.3, 10664.0], [46.4, 10664.0], [46.5, 10665.0], [46.6, 10665.0], [46.7, 10665.0], [46.8, 10665.0], [46.9, 10665.0], [47.0, 10699.0], [47.1, 10699.0], [47.2, 10699.0], [47.3, 10699.0], [47.4, 10699.0], [47.5, 10759.0], [47.6, 10759.0], [47.7, 10759.0], [47.8, 10759.0], [47.9, 10759.0], [48.0, 10833.0], [48.1, 10833.0], [48.2, 10833.0], [48.3, 10833.0], [48.4, 10833.0], [48.5, 10880.0], [48.6, 10880.0], [48.7, 10880.0], [48.8, 10880.0], [48.9, 10880.0], [49.0, 10919.0], [49.1, 10919.0], [49.2, 10919.0], [49.3, 10919.0], [49.4, 10919.0], [49.5, 10996.0], [49.6, 10996.0], [49.7, 10996.0], [49.8, 10996.0], [49.9, 10996.0], [50.0, 11011.0], [50.1, 11011.0], [50.2, 11011.0], [50.3, 11011.0], [50.4, 11011.0], [50.5, 11032.0], [50.6, 11032.0], [50.7, 11032.0], [50.8, 11032.0], [50.9, 11032.0], [51.0, 11048.0], [51.1, 11048.0], [51.2, 11048.0], [51.3, 11048.0], [51.4, 11048.0], [51.5, 11093.0], [51.6, 11093.0], [51.7, 11093.0], [51.8, 11093.0], [51.9, 11093.0], [52.0, 11158.0], [52.1, 11158.0], [52.2, 11158.0], [52.3, 11158.0], [52.4, 11158.0], [52.5, 11195.0], [52.6, 11195.0], [52.7, 11195.0], [52.8, 11195.0], [52.9, 11195.0], [53.0, 11224.0], [53.1, 11224.0], [53.2, 11224.0], [53.3, 11224.0], [53.4, 11224.0], [53.5, 11246.0], [53.6, 11246.0], [53.7, 11246.0], [53.8, 11246.0], [53.9, 11246.0], [54.0, 11329.0], [54.1, 11329.0], [54.2, 11329.0], [54.3, 11329.0], [54.4, 11329.0], [54.5, 11360.0], [54.6, 11360.0], [54.7, 11360.0], [54.8, 11360.0], [54.9, 11360.0], [55.0, 11454.0], [55.1, 11454.0], [55.2, 11454.0], [55.3, 11454.0], [55.4, 11454.0], [55.5, 11539.0], [55.6, 11539.0], [55.7, 11539.0], [55.8, 11539.0], [55.9, 11539.0], [56.0, 11644.0], [56.1, 11644.0], [56.2, 11644.0], [56.3, 11644.0], [56.4, 11644.0], [56.5, 11989.0], [56.6, 11989.0], [56.7, 11989.0], [56.8, 11989.0], [56.9, 11989.0], [57.0, 12054.0], [57.1, 12054.0], [57.2, 12054.0], [57.3, 12054.0], [57.4, 12054.0], [57.5, 12137.0], [57.6, 12137.0], [57.7, 12137.0], [57.8, 12137.0], [57.9, 12137.0], [58.0, 12212.0], [58.1, 12212.0], [58.2, 12212.0], [58.3, 12212.0], [58.4, 12212.0], [58.5, 12264.0], [58.6, 12264.0], [58.7, 12264.0], [58.8, 12264.0], [58.9, 12264.0], [59.0, 12265.0], [59.1, 12265.0], [59.2, 12265.0], [59.3, 12265.0], [59.4, 12265.0], [59.5, 12270.0], [59.6, 12270.0], [59.7, 12270.0], [59.8, 12270.0], [59.9, 12270.0], [60.0, 12276.0], [60.1, 12276.0], [60.2, 12276.0], [60.3, 12276.0], [60.4, 12276.0], [60.5, 12334.0], [60.6, 12334.0], [60.7, 12334.0], [60.8, 12334.0], [60.9, 12334.0], [61.0, 12342.0], [61.1, 12342.0], [61.2, 12342.0], [61.3, 12342.0], [61.4, 12342.0], [61.5, 12464.0], [61.6, 12464.0], [61.7, 12464.0], [61.8, 12464.0], [61.9, 12464.0], [62.0, 12521.0], [62.1, 12521.0], [62.2, 12521.0], [62.3, 12521.0], [62.4, 12521.0], [62.5, 12545.0], [62.6, 12545.0], [62.7, 12545.0], [62.8, 12545.0], [62.9, 12545.0], [63.0, 12582.0], [63.1, 12582.0], [63.2, 12582.0], [63.3, 12582.0], [63.4, 12582.0], [63.5, 12598.0], [63.6, 12598.0], [63.7, 12598.0], [63.8, 12598.0], [63.9, 12598.0], [64.0, 12738.0], [64.1, 12738.0], [64.2, 12738.0], [64.3, 12738.0], [64.4, 12738.0], [64.5, 12879.0], [64.6, 12879.0], [64.7, 12879.0], [64.8, 12879.0], [64.9, 12879.0], [65.0, 12967.0], [65.1, 12967.0], [65.2, 12967.0], [65.3, 12967.0], [65.4, 12967.0], [65.5, 12999.0], [65.6, 12999.0], [65.7, 12999.0], [65.8, 12999.0], [65.9, 12999.0], [66.0, 13044.0], [66.1, 13044.0], [66.2, 13044.0], [66.3, 13044.0], [66.4, 13044.0], [66.5, 13175.0], [66.6, 13175.0], [66.7, 13175.0], [66.8, 13175.0], [66.9, 13175.0], [67.0, 13209.0], [67.1, 13209.0], [67.2, 13209.0], [67.3, 13209.0], [67.4, 13209.0], [67.5, 13227.0], [67.6, 13227.0], [67.7, 13227.0], [67.8, 13227.0], [67.9, 13227.0], [68.0, 13295.0], [68.1, 13295.0], [68.2, 13295.0], [68.3, 13295.0], [68.4, 13295.0], [68.5, 13300.0], [68.6, 13300.0], [68.7, 13300.0], [68.8, 13300.0], [68.9, 13300.0], [69.0, 13517.0], [69.1, 13517.0], [69.2, 13517.0], [69.3, 13517.0], [69.4, 13517.0], [69.5, 13528.0], [69.6, 13528.0], [69.7, 13528.0], [69.8, 13528.0], [69.9, 13528.0], [70.0, 13533.0], [70.1, 13533.0], [70.2, 13533.0], [70.3, 13533.0], [70.4, 13533.0], [70.5, 13627.0], [70.6, 13627.0], [70.7, 13627.0], [70.8, 13627.0], [70.9, 13627.0], [71.0, 13676.0], [71.1, 13676.0], [71.2, 13676.0], [71.3, 13676.0], [71.4, 13676.0], [71.5, 13745.0], [71.6, 13745.0], [71.7, 13745.0], [71.8, 13745.0], [71.9, 13745.0], [72.0, 13784.0], [72.1, 13784.0], [72.2, 13784.0], [72.3, 13784.0], [72.4, 13784.0], [72.5, 13786.0], [72.6, 13786.0], [72.7, 13786.0], [72.8, 13786.0], [72.9, 13786.0], [73.0, 13798.0], [73.1, 13798.0], [73.2, 13798.0], [73.3, 13798.0], [73.4, 13798.0], [73.5, 13804.0], [73.6, 13804.0], [73.7, 13804.0], [73.8, 13804.0], [73.9, 13804.0], [74.0, 13877.0], [74.1, 13877.0], [74.2, 13877.0], [74.3, 13877.0], [74.4, 13877.0], [74.5, 13963.0], [74.6, 13963.0], [74.7, 13963.0], [74.8, 13963.0], [74.9, 13963.0], [75.0, 13973.0], [75.1, 13973.0], [75.2, 13973.0], [75.3, 13973.0], [75.4, 13973.0], [75.5, 13977.0], [75.6, 13977.0], [75.7, 13977.0], [75.8, 13977.0], [75.9, 13977.0], [76.0, 14022.0], [76.1, 14022.0], [76.2, 14022.0], [76.3, 14022.0], [76.4, 14022.0], [76.5, 14032.0], [76.6, 14032.0], [76.7, 14032.0], [76.8, 14032.0], [76.9, 14032.0], [77.0, 14188.0], [77.1, 14188.0], [77.2, 14188.0], [77.3, 14188.0], [77.4, 14188.0], [77.5, 14194.0], [77.6, 14194.0], [77.7, 14194.0], [77.8, 14194.0], [77.9, 14194.0], [78.0, 14362.0], [78.1, 14362.0], [78.2, 14362.0], [78.3, 14362.0], [78.4, 14362.0], [78.5, 14388.0], [78.6, 14388.0], [78.7, 14388.0], [78.8, 14388.0], [78.9, 14388.0], [79.0, 14432.0], [79.1, 14432.0], [79.2, 14432.0], [79.3, 14432.0], [79.4, 14432.0], [79.5, 14461.0], [79.6, 14461.0], [79.7, 14461.0], [79.8, 14461.0], [79.9, 14461.0], [80.0, 14519.0], [80.1, 14519.0], [80.2, 14519.0], [80.3, 14519.0], [80.4, 14519.0], [80.5, 14545.0], [80.6, 14545.0], [80.7, 14545.0], [80.8, 14545.0], [80.9, 14545.0], [81.0, 14594.0], [81.1, 14594.0], [81.2, 14594.0], [81.3, 14594.0], [81.4, 14594.0], [81.5, 14621.0], [81.6, 14621.0], [81.7, 14621.0], [81.8, 14621.0], [81.9, 14621.0], [82.0, 14675.0], [82.1, 14675.0], [82.2, 14675.0], [82.3, 14675.0], [82.4, 14675.0], [82.5, 14692.0], [82.6, 14692.0], [82.7, 14692.0], [82.8, 14692.0], [82.9, 14692.0], [83.0, 14720.0], [83.1, 14720.0], [83.2, 14720.0], [83.3, 14720.0], [83.4, 14720.0], [83.5, 14762.0], [83.6, 14762.0], [83.7, 14762.0], [83.8, 14762.0], [83.9, 14762.0], [84.0, 14886.0], [84.1, 14886.0], [84.2, 14886.0], [84.3, 14886.0], [84.4, 14886.0], [84.5, 14896.0], [84.6, 14896.0], [84.7, 14896.0], [84.8, 14896.0], [84.9, 14896.0], [85.0, 14966.0], [85.1, 14966.0], [85.2, 14966.0], [85.3, 14966.0], [85.4, 14966.0], [85.5, 14989.0], [85.6, 14989.0], [85.7, 14989.0], [85.8, 14989.0], [85.9, 14989.0], [86.0, 15062.0], [86.1, 15062.0], [86.2, 15062.0], [86.3, 15062.0], [86.4, 15062.0], [86.5, 15081.0], [86.6, 15081.0], [86.7, 15081.0], [86.8, 15081.0], [86.9, 15081.0], [87.0, 15102.0], [87.1, 15102.0], [87.2, 15102.0], [87.3, 15102.0], [87.4, 15102.0], [87.5, 15166.0], [87.6, 15166.0], [87.7, 15166.0], [87.8, 15166.0], [87.9, 15166.0], [88.0, 15267.0], [88.1, 15267.0], [88.2, 15267.0], [88.3, 15267.0], [88.4, 15267.0], [88.5, 15693.0], [88.6, 15693.0], [88.7, 15693.0], [88.8, 15693.0], [88.9, 15693.0], [89.0, 15778.0], [89.1, 15778.0], [89.2, 15778.0], [89.3, 15778.0], [89.4, 15778.0], [89.5, 16083.0], [89.6, 16083.0], [89.7, 16083.0], [89.8, 16083.0], [89.9, 16083.0], [90.0, 16144.0], [90.1, 16144.0], [90.2, 16144.0], [90.3, 16144.0], [90.4, 16144.0], [90.5, 16173.0], [90.6, 16173.0], [90.7, 16173.0], [90.8, 16173.0], [90.9, 16173.0], [91.0, 16457.0], [91.1, 16457.0], [91.2, 16457.0], [91.3, 16457.0], [91.4, 16457.0], [91.5, 16944.0], [91.6, 16944.0], [91.7, 16944.0], [91.8, 16944.0], [91.9, 16944.0], [92.0, 17208.0], [92.1, 17208.0], [92.2, 17208.0], [92.3, 17208.0], [92.4, 17208.0], [92.5, 17222.0], [92.6, 17222.0], [92.7, 17222.0], [92.8, 17222.0], [92.9, 17222.0], [93.0, 17487.0], [93.1, 17487.0], [93.2, 17487.0], [93.3, 17487.0], [93.4, 17487.0], [93.5, 17846.0], [93.6, 17846.0], [93.7, 17846.0], [93.8, 17846.0], [93.9, 17846.0], [94.0, 18310.0], [94.1, 18310.0], [94.2, 18310.0], [94.3, 18310.0], [94.4, 18310.0], [94.5, 18366.0], [94.6, 18366.0], [94.7, 18366.0], [94.8, 18366.0], [94.9, 18366.0], [95.0, 18445.0], [95.1, 18445.0], [95.2, 18445.0], [95.3, 18445.0], [95.4, 18445.0], [95.5, 18610.0], [95.6, 18610.0], [95.7, 18610.0], [95.8, 18610.0], [95.9, 18610.0], [96.0, 18645.0], [96.1, 18645.0], [96.2, 18645.0], [96.3, 18645.0], [96.4, 18645.0], [96.5, 18888.0], [96.6, 18888.0], [96.7, 18888.0], [96.8, 18888.0], [96.9, 18888.0], [97.0, 18945.0], [97.1, 18945.0], [97.2, 18945.0], [97.3, 18945.0], [97.4, 18945.0], [97.5, 18956.0], [97.6, 18956.0], [97.7, 18956.0], [97.8, 18956.0], [97.9, 18956.0], [98.0, 19022.0], [98.1, 19022.0], [98.2, 19022.0], [98.3, 19022.0], [98.4, 19022.0], [98.5, 19085.0], [98.6, 19085.0], [98.7, 19085.0], [98.8, 19085.0], [98.9, 19085.0], [99.0, 19212.0], [99.1, 19212.0], [99.2, 19212.0], [99.3, 19212.0], [99.4, 19212.0], [99.5, 19309.0], [99.6, 19309.0], [99.7, 19309.0], [99.8, 19309.0], [99.9, 19309.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 5200.0, "maxY": 6.0, "series": [{"data": [[5300.0, 4.0], [5200.0, 1.0], [5400.0, 2.0], [5500.0, 1.0], [5600.0, 1.0], [5700.0, 3.0], [5800.0, 1.0], [5900.0, 3.0], [6000.0, 3.0], [6100.0, 1.0], [6300.0, 1.0], [6500.0, 1.0], [6400.0, 1.0], [6600.0, 2.0], [6700.0, 3.0], [6900.0, 5.0], [6800.0, 1.0], [7000.0, 3.0], [7100.0, 1.0], [7200.0, 2.0], [7300.0, 1.0], [7400.0, 2.0], [7500.0, 2.0], [7600.0, 1.0], [7700.0, 1.0], [7800.0, 3.0], [8000.0, 1.0], [8200.0, 1.0], [8400.0, 1.0], [8500.0, 1.0], [8600.0, 4.0], [8700.0, 4.0], [8800.0, 1.0], [8900.0, 6.0], [9000.0, 1.0], [9100.0, 2.0], [9200.0, 1.0], [9300.0, 2.0], [9400.0, 3.0], [9500.0, 1.0], [9600.0, 2.0], [10000.0, 3.0], [10100.0, 1.0], [10200.0, 1.0], [10300.0, 4.0], [10400.0, 2.0], [10600.0, 3.0], [10700.0, 1.0], [10800.0, 2.0], [10900.0, 2.0], [11000.0, 4.0], [11200.0, 2.0], [11100.0, 2.0], [11300.0, 2.0], [11400.0, 1.0], [11500.0, 1.0], [11600.0, 1.0], [11900.0, 1.0], [12000.0, 1.0], [12100.0, 1.0], [12200.0, 5.0], [12300.0, 2.0], [12400.0, 1.0], [12500.0, 4.0], [12700.0, 1.0], [12800.0, 1.0], [13000.0, 1.0], [12900.0, 2.0], [13100.0, 1.0], [13200.0, 3.0], [13300.0, 1.0], [13500.0, 3.0], [13600.0, 2.0], [13700.0, 4.0], [13800.0, 2.0], [13900.0, 3.0], [14000.0, 2.0], [14100.0, 2.0], [14300.0, 2.0], [14400.0, 2.0], [14500.0, 3.0], [14600.0, 3.0], [14700.0, 2.0], [14800.0, 2.0], [14900.0, 2.0], [15000.0, 2.0], [15100.0, 2.0], [15200.0, 1.0], [15600.0, 1.0], [15700.0, 1.0], [16100.0, 2.0], [16000.0, 1.0], [16400.0, 1.0], [16900.0, 1.0], [17200.0, 2.0], [17400.0, 1.0], [17800.0, 1.0], [18300.0, 2.0], [18400.0, 1.0], [18600.0, 2.0], [18800.0, 1.0], [18900.0, 2.0], [19000.0, 2.0], [19200.0, 1.0], [19300.0, 1.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 19300.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 27.0, "minX": 2.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 173.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 173.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 27.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 100.56500000000003, "minX": 1.63823466E12, "maxY": 100.56500000000003, "series": [{"data": [[1.63823466E12, 100.56500000000003]], "isOverall": false, "label": "Users requesting location", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.63823466E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -25200000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 5270.0, "minX": 2.0, "maxY": 19260.5, "series": [{"data": [[2.0, 19260.5], [3.0, 19085.0], [4.0, 19022.0], [5.0, 18956.0], [6.0, 18945.0], [7.0, 18888.0], [8.0, 18645.0], [9.0, 18610.0], [10.0, 18366.0], [11.0, 18445.0], [12.0, 18310.0], [13.0, 17846.0], [14.0, 17487.0], [15.0, 17208.0], [16.0, 17222.0], [17.0, 16944.0], [18.0, 16457.0], [19.0, 16173.0], [20.0, 16083.0], [21.0, 16144.0], [22.0, 15778.0], [23.0, 15693.0], [24.0, 15267.0], [25.0, 15166.0], [26.0, 15102.0], [27.0, 15081.0], [28.0, 14989.0], [29.0, 15062.0], [30.0, 14966.0], [31.0, 14896.0], [33.0, 14762.0], [32.0, 14886.0], [35.0, 14594.0], [34.0, 14675.0], [37.0, 14720.0], [36.0, 14692.0], [39.0, 14545.0], [38.0, 14621.0], [41.0, 14519.0], [40.0, 14461.0], [43.0, 14432.0], [42.0, 14362.0], [45.0, 14188.0], [44.0, 14388.0], [47.0, 14032.0], [46.0, 14194.0], [49.0, 13973.0], [48.0, 13977.0], [51.0, 13963.0], [50.0, 14022.0], [53.0, 13804.0], [52.0, 13877.0], [55.0, 13786.0], [54.0, 13798.0], [57.0, 13745.0], [56.0, 13784.0], [59.0, 13676.0], [58.0, 13627.0], [61.0, 13533.0], [60.0, 13528.0], [63.0, 13227.0], [62.0, 13517.0], [67.0, 13175.0], [66.0, 13209.0], [65.0, 13295.0], [64.0, 13300.0], [71.0, 12879.0], [70.0, 13005.5], [68.0, 12999.0], [74.0, 12582.0], [73.0, 12598.0], [72.0, 12738.0], [79.0, 12334.0], [78.0, 12342.0], [77.0, 12464.0], [76.0, 12533.0], [83.0, 12264.0], [82.0, 12270.0], [81.0, 12276.0], [80.0, 12265.0], [87.0, 12021.5], [85.0, 12137.0], [84.0, 12212.0], [91.0, 11360.0], [90.0, 11454.0], [89.0, 11539.0], [88.0, 11644.0], [94.0, 11158.0], [93.0, 11224.0], [92.0, 11329.0], [99.0, 10996.0], [98.0, 11093.0], [97.0, 11048.0], [96.0, 11220.5], [103.0, 10899.5], [101.0, 11011.0], [100.0, 11032.0], [107.0, 10665.0], [106.0, 10664.0], [105.0, 10759.0], [104.0, 10833.0], [111.0, 10427.0], [110.0, 10332.0], [109.0, 10484.0], [108.0, 10699.0], [115.0, 10334.333333333334], [112.0, 10249.0], [119.0, 10001.0], [118.0, 10031.0], [117.0, 10013.0], [116.0, 10156.0], [123.0, 9486.0], [122.0, 9599.0], [121.0, 9604.0], [120.0, 9610.0], [127.0, 9303.0], [126.0, 9331.0], [125.0, 9434.0], [124.0, 9400.0], [135.0, 8921.0], [134.0, 8967.0], [133.0, 8967.0], [132.0, 8994.0], [131.0, 9081.0], [130.0, 9138.0], [129.0, 9107.0], [128.0, 9241.0], [143.0, 8613.0], [142.0, 8629.0], [141.0, 8777.0], [140.0, 8711.0], [139.0, 8796.0], [138.0, 8939.0], [136.0, 8974.0], [151.0, 7882.0], [150.0, 8050.0], [149.0, 8234.0], [148.0, 8404.0], [147.0, 8506.0], [146.0, 8636.0], [145.0, 8683.0], [144.0, 8711.0], [159.0, 7487.0], [158.0, 7435.0], [157.0, 7593.0], [156.0, 7559.0], [155.0, 7669.0], [154.0, 7732.0], [153.0, 7862.0], [152.0, 7800.0], [167.0, 7007.0], [166.0, 7039.0], [165.0, 6939.0], [164.0, 7114.0], [162.0, 7261.0], [161.0, 7210.0], [160.0, 7373.0], [175.0, 6730.0], [174.0, 6749.0], [173.0, 6779.0], [172.0, 6919.0], [171.0, 6889.5], [169.0, 6953.0], [168.0, 6923.0], [183.0, 6042.0], [182.0, 6155.0], [181.0, 6058.0], [180.0, 6320.0], [179.0, 6549.0], [178.0, 6482.0], [177.0, 6604.0], [176.0, 6644.0], [191.0, 5705.0], [190.0, 5707.0], [189.0, 5782.0], [188.0, 5807.0], [187.0, 5998.0], [186.0, 5939.0], [185.0, 6052.0], [184.0, 5969.0], [198.0, 5371.0], [197.0, 5437.0], [196.0, 5417.0], [195.0, 5340.0], [194.0, 5388.0], [193.0, 5525.0], [192.0, 5605.0], [200.0, 5270.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[100.56500000000003, 11171.484999999999]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 200.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 1922.35, "minX": 1.63823466E12, "maxY": 4736.666666666667, "series": [{"data": [[1.63823466E12, 1922.35]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.63823466E12, 4736.666666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.63823466E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -25200000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 11171.484999999999, "minX": 1.63823466E12, "maxY": 11171.484999999999, "series": [{"data": [[1.63823466E12, 11171.484999999999]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.63823466E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -25200000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 11171.150000000005, "minX": 1.63823466E12, "maxY": 11171.150000000005, "series": [{"data": [[1.63823466E12, 11171.150000000005]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.63823466E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -25200000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 4264.1349999999975, "minX": 1.63823466E12, "maxY": 4264.1349999999975, "series": [{"data": [[1.63823466E12, 4264.1349999999975]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.63823466E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -25200000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 5212.0, "minX": 1.63823466E12, "maxY": 19309.0, "series": [{"data": [[1.63823466E12, 19309.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.63823466E12, 16343.399999999998]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.63823466E12, 19237.219999999998]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.63823466E12, 18620.5]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.63823466E12, 5212.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.63823466E12, 11093.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.63823466E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -25200000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 5402.5, "minX": 4.0, "maxY": 18956.0, "series": [{"data": [[4.0, 16158.5], [17.0, 6919.0], [18.0, 10455.5], [19.0, 12967.0], [20.0, 13963.0], [10.0, 15091.5], [5.0, 18956.0], [12.0, 8636.0], [13.0, 5605.0], [14.0, 11176.5], [7.0, 18610.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[17.0, 12212.0], [18.0, 10302.5], [19.0, 9434.0], [20.0, 7862.0], [5.0, 17208.0], [12.0, 8613.0], [13.0, 5402.5], [14.0, 11486.5]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 20.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 5402.5, "minX": 4.0, "maxY": 18956.0, "series": [{"data": [[4.0, 16158.5], [17.0, 6919.0], [18.0, 10455.5], [19.0, 12967.0], [20.0, 13948.0], [10.0, 15091.5], [5.0, 18956.0], [12.0, 8636.0], [13.0, 5605.0], [14.0, 11176.0], [7.0, 18610.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[17.0, 12212.0], [18.0, 10302.5], [19.0, 9434.0], [20.0, 7862.0], [5.0, 17208.0], [12.0, 8613.0], [13.0, 5402.5], [14.0, 11486.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 20.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 3.3333333333333335, "minX": 1.63823466E12, "maxY": 3.3333333333333335, "series": [{"data": [[1.63823466E12, 3.3333333333333335]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.63823466E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -25200000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.63823466E12, "maxY": 2.8666666666666667, "series": [{"data": [[1.63823466E12, 0.016666666666666666]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.63823466E12, 2.8666666666666667]], "isOverall": false, "label": "201", "isController": false}, {"data": [[1.63823466E12, 0.45]], "isOverall": false, "label": "404", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.63823466E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -25200000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 0.45, "minX": 1.63823466E12, "maxY": 2.8833333333333333, "series": [{"data": [[1.63823466E12, 2.8833333333333333]], "isOverall": false, "label": "HTTP Request-success", "isController": false}, {"data": [[1.63823466E12, 0.45]], "isOverall": false, "label": "HTTP Request-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.63823466E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -25200000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 0.45, "minX": 1.63823466E12, "maxY": 2.8833333333333333, "series": [{"data": [[1.63823466E12, 2.8833333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.63823466E12, 0.45]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.63823466E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -25200000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

