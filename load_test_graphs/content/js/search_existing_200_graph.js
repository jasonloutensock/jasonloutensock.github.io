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
        data: {"result": {"minY": 2590.0, "minX": 0.0, "maxY": 4963.0, "series": [{"data": [[0.0, 2590.0], [0.1, 2590.0], [0.2, 2590.0], [0.3, 2590.0], [0.4, 2590.0], [0.5, 2592.0], [0.6, 2592.0], [0.7, 2592.0], [0.8, 2592.0], [0.9, 2592.0], [1.0, 2630.0], [1.1, 2630.0], [1.2, 2630.0], [1.3, 2630.0], [1.4, 2630.0], [1.5, 2745.0], [1.6, 2745.0], [1.7, 2745.0], [1.8, 2745.0], [1.9, 2745.0], [2.0, 2819.0], [2.1, 2819.0], [2.2, 2819.0], [2.3, 2819.0], [2.4, 2819.0], [2.5, 2829.0], [2.6, 2829.0], [2.7, 2829.0], [2.8, 2829.0], [2.9, 2829.0], [3.0, 2842.0], [3.1, 2842.0], [3.2, 2842.0], [3.3, 2842.0], [3.4, 2842.0], [3.5, 2843.0], [3.6, 2843.0], [3.7, 2843.0], [3.8, 2843.0], [3.9, 2843.0], [4.0, 2860.0], [4.1, 2860.0], [4.2, 2860.0], [4.3, 2860.0], [4.4, 2860.0], [4.5, 2864.0], [4.6, 2864.0], [4.7, 2864.0], [4.8, 2864.0], [4.9, 2864.0], [5.0, 2879.0], [5.1, 2879.0], [5.2, 2879.0], [5.3, 2879.0], [5.4, 2879.0], [5.5, 2887.0], [5.6, 2887.0], [5.7, 2887.0], [5.8, 2887.0], [5.9, 2887.0], [6.0, 2890.0], [6.1, 2890.0], [6.2, 2890.0], [6.3, 2890.0], [6.4, 2890.0], [6.5, 2897.0], [6.6, 2897.0], [6.7, 2897.0], [6.8, 2897.0], [6.9, 2897.0], [7.0, 2908.0], [7.1, 2908.0], [7.2, 2908.0], [7.3, 2908.0], [7.4, 2908.0], [7.5, 2912.0], [7.6, 2912.0], [7.7, 2912.0], [7.8, 2912.0], [7.9, 2912.0], [8.0, 2913.0], [8.1, 2913.0], [8.2, 2913.0], [8.3, 2913.0], [8.4, 2913.0], [8.5, 2913.0], [8.6, 2913.0], [8.7, 2913.0], [8.8, 2913.0], [8.9, 2913.0], [9.0, 2921.0], [9.1, 2921.0], [9.2, 2921.0], [9.3, 2921.0], [9.4, 2921.0], [9.5, 2921.0], [9.6, 2921.0], [9.7, 2921.0], [9.8, 2921.0], [9.9, 2921.0], [10.0, 2922.0], [10.1, 2922.0], [10.2, 2922.0], [10.3, 2922.0], [10.4, 2922.0], [10.5, 2922.0], [10.6, 2922.0], [10.7, 2922.0], [10.8, 2922.0], [10.9, 2922.0], [11.0, 2936.0], [11.1, 2936.0], [11.2, 2936.0], [11.3, 2936.0], [11.4, 2936.0], [11.5, 2936.0], [11.6, 2936.0], [11.7, 2936.0], [11.8, 2936.0], [11.9, 2936.0], [12.0, 2941.0], [12.1, 2941.0], [12.2, 2941.0], [12.3, 2941.0], [12.4, 2941.0], [12.5, 2947.0], [12.6, 2947.0], [12.7, 2947.0], [12.8, 2947.0], [12.9, 2947.0], [13.0, 2949.0], [13.1, 2949.0], [13.2, 2949.0], [13.3, 2949.0], [13.4, 2949.0], [13.5, 2952.0], [13.6, 2952.0], [13.7, 2952.0], [13.8, 2952.0], [13.9, 2952.0], [14.0, 2963.0], [14.1, 2963.0], [14.2, 2963.0], [14.3, 2963.0], [14.4, 2963.0], [14.5, 2964.0], [14.6, 2964.0], [14.7, 2964.0], [14.8, 2964.0], [14.9, 2964.0], [15.0, 2978.0], [15.1, 2978.0], [15.2, 2978.0], [15.3, 2978.0], [15.4, 2978.0], [15.5, 2991.0], [15.6, 2991.0], [15.7, 2991.0], [15.8, 2991.0], [15.9, 2991.0], [16.0, 3016.0], [16.1, 3016.0], [16.2, 3016.0], [16.3, 3016.0], [16.4, 3016.0], [16.5, 3018.0], [16.6, 3018.0], [16.7, 3018.0], [16.8, 3018.0], [16.9, 3018.0], [17.0, 3024.0], [17.1, 3024.0], [17.2, 3024.0], [17.3, 3024.0], [17.4, 3024.0], [17.5, 3029.0], [17.6, 3029.0], [17.7, 3029.0], [17.8, 3029.0], [17.9, 3029.0], [18.0, 3030.0], [18.1, 3030.0], [18.2, 3030.0], [18.3, 3030.0], [18.4, 3030.0], [18.5, 3033.0], [18.6, 3033.0], [18.7, 3033.0], [18.8, 3033.0], [18.9, 3033.0], [19.0, 3033.0], [19.1, 3033.0], [19.2, 3033.0], [19.3, 3033.0], [19.4, 3033.0], [19.5, 3036.0], [19.6, 3036.0], [19.7, 3036.0], [19.8, 3036.0], [19.9, 3036.0], [20.0, 3045.0], [20.1, 3045.0], [20.2, 3045.0], [20.3, 3045.0], [20.4, 3045.0], [20.5, 3050.0], [20.6, 3050.0], [20.7, 3050.0], [20.8, 3050.0], [20.9, 3050.0], [21.0, 3061.0], [21.1, 3061.0], [21.2, 3061.0], [21.3, 3061.0], [21.4, 3061.0], [21.5, 3092.0], [21.6, 3092.0], [21.7, 3092.0], [21.8, 3092.0], [21.9, 3092.0], [22.0, 3102.0], [22.1, 3102.0], [22.2, 3102.0], [22.3, 3102.0], [22.4, 3102.0], [22.5, 3103.0], [22.6, 3103.0], [22.7, 3103.0], [22.8, 3103.0], [22.9, 3103.0], [23.0, 3104.0], [23.1, 3104.0], [23.2, 3104.0], [23.3, 3104.0], [23.4, 3104.0], [23.5, 3119.0], [23.6, 3119.0], [23.7, 3119.0], [23.8, 3119.0], [23.9, 3119.0], [24.0, 3122.0], [24.1, 3122.0], [24.2, 3122.0], [24.3, 3122.0], [24.4, 3122.0], [24.5, 3123.0], [24.6, 3123.0], [24.7, 3123.0], [24.8, 3123.0], [24.9, 3123.0], [25.0, 3128.0], [25.1, 3128.0], [25.2, 3128.0], [25.3, 3128.0], [25.4, 3128.0], [25.5, 3131.0], [25.6, 3131.0], [25.7, 3131.0], [25.8, 3131.0], [25.9, 3131.0], [26.0, 3143.0], [26.1, 3143.0], [26.2, 3143.0], [26.3, 3143.0], [26.4, 3143.0], [26.5, 3150.0], [26.6, 3150.0], [26.7, 3150.0], [26.8, 3150.0], [26.9, 3150.0], [27.0, 3159.0], [27.1, 3159.0], [27.2, 3159.0], [27.3, 3159.0], [27.4, 3159.0], [27.5, 3160.0], [27.6, 3160.0], [27.7, 3160.0], [27.8, 3160.0], [27.9, 3160.0], [28.0, 3161.0], [28.1, 3161.0], [28.2, 3161.0], [28.3, 3161.0], [28.4, 3161.0], [28.5, 3164.0], [28.6, 3164.0], [28.7, 3164.0], [28.8, 3164.0], [28.9, 3164.0], [29.0, 3167.0], [29.1, 3167.0], [29.2, 3167.0], [29.3, 3167.0], [29.4, 3167.0], [29.5, 3174.0], [29.6, 3174.0], [29.7, 3174.0], [29.8, 3174.0], [29.9, 3174.0], [30.0, 3188.0], [30.1, 3188.0], [30.2, 3188.0], [30.3, 3188.0], [30.4, 3188.0], [30.5, 3190.0], [30.6, 3190.0], [30.7, 3190.0], [30.8, 3190.0], [30.9, 3190.0], [31.0, 3195.0], [31.1, 3195.0], [31.2, 3195.0], [31.3, 3195.0], [31.4, 3195.0], [31.5, 3216.0], [31.6, 3216.0], [31.7, 3216.0], [31.8, 3216.0], [31.9, 3216.0], [32.0, 3219.0], [32.1, 3219.0], [32.2, 3219.0], [32.3, 3219.0], [32.4, 3219.0], [32.5, 3221.0], [32.6, 3221.0], [32.7, 3221.0], [32.8, 3221.0], [32.9, 3221.0], [33.0, 3226.0], [33.1, 3226.0], [33.2, 3226.0], [33.3, 3226.0], [33.4, 3226.0], [33.5, 3237.0], [33.6, 3237.0], [33.7, 3237.0], [33.8, 3237.0], [33.9, 3237.0], [34.0, 3240.0], [34.1, 3240.0], [34.2, 3240.0], [34.3, 3240.0], [34.4, 3240.0], [34.5, 3243.0], [34.6, 3243.0], [34.7, 3243.0], [34.8, 3243.0], [34.9, 3243.0], [35.0, 3249.0], [35.1, 3249.0], [35.2, 3249.0], [35.3, 3249.0], [35.4, 3249.0], [35.5, 3250.0], [35.6, 3250.0], [35.7, 3250.0], [35.8, 3250.0], [35.9, 3250.0], [36.0, 3257.0], [36.1, 3257.0], [36.2, 3257.0], [36.3, 3257.0], [36.4, 3257.0], [36.5, 3257.0], [36.6, 3257.0], [36.7, 3257.0], [36.8, 3257.0], [36.9, 3257.0], [37.0, 3265.0], [37.1, 3265.0], [37.2, 3265.0], [37.3, 3265.0], [37.4, 3265.0], [37.5, 3274.0], [37.6, 3274.0], [37.7, 3274.0], [37.8, 3274.0], [37.9, 3274.0], [38.0, 3292.0], [38.1, 3292.0], [38.2, 3292.0], [38.3, 3292.0], [38.4, 3292.0], [38.5, 3295.0], [38.6, 3295.0], [38.7, 3295.0], [38.8, 3295.0], [38.9, 3295.0], [39.0, 3297.0], [39.1, 3297.0], [39.2, 3297.0], [39.3, 3297.0], [39.4, 3297.0], [39.5, 3316.0], [39.6, 3316.0], [39.7, 3316.0], [39.8, 3316.0], [39.9, 3316.0], [40.0, 3343.0], [40.1, 3343.0], [40.2, 3343.0], [40.3, 3343.0], [40.4, 3343.0], [40.5, 3390.0], [40.6, 3390.0], [40.7, 3390.0], [40.8, 3390.0], [40.9, 3390.0], [41.0, 3399.0], [41.1, 3399.0], [41.2, 3399.0], [41.3, 3399.0], [41.4, 3399.0], [41.5, 3427.0], [41.6, 3427.0], [41.7, 3427.0], [41.8, 3427.0], [41.9, 3427.0], [42.0, 3447.0], [42.1, 3447.0], [42.2, 3447.0], [42.3, 3447.0], [42.4, 3447.0], [42.5, 3455.0], [42.6, 3455.0], [42.7, 3455.0], [42.8, 3455.0], [42.9, 3455.0], [43.0, 3461.0], [43.1, 3461.0], [43.2, 3461.0], [43.3, 3461.0], [43.4, 3461.0], [43.5, 3464.0], [43.6, 3464.0], [43.7, 3464.0], [43.8, 3464.0], [43.9, 3464.0], [44.0, 3490.0], [44.1, 3490.0], [44.2, 3490.0], [44.3, 3490.0], [44.4, 3490.0], [44.5, 3494.0], [44.6, 3494.0], [44.7, 3494.0], [44.8, 3494.0], [44.9, 3494.0], [45.0, 3497.0], [45.1, 3497.0], [45.2, 3497.0], [45.3, 3497.0], [45.4, 3497.0], [45.5, 3505.0], [45.6, 3505.0], [45.7, 3505.0], [45.8, 3505.0], [45.9, 3505.0], [46.0, 3517.0], [46.1, 3517.0], [46.2, 3517.0], [46.3, 3517.0], [46.4, 3517.0], [46.5, 3526.0], [46.6, 3526.0], [46.7, 3526.0], [46.8, 3526.0], [46.9, 3526.0], [47.0, 3535.0], [47.1, 3535.0], [47.2, 3535.0], [47.3, 3535.0], [47.4, 3535.0], [47.5, 3535.0], [47.6, 3535.0], [47.7, 3535.0], [47.8, 3535.0], [47.9, 3535.0], [48.0, 3565.0], [48.1, 3565.0], [48.2, 3565.0], [48.3, 3565.0], [48.4, 3565.0], [48.5, 3568.0], [48.6, 3568.0], [48.7, 3568.0], [48.8, 3568.0], [48.9, 3568.0], [49.0, 3582.0], [49.1, 3582.0], [49.2, 3582.0], [49.3, 3582.0], [49.4, 3582.0], [49.5, 3602.0], [49.6, 3602.0], [49.7, 3602.0], [49.8, 3602.0], [49.9, 3602.0], [50.0, 3607.0], [50.1, 3607.0], [50.2, 3607.0], [50.3, 3607.0], [50.4, 3607.0], [50.5, 3616.0], [50.6, 3616.0], [50.7, 3616.0], [50.8, 3616.0], [50.9, 3616.0], [51.0, 3623.0], [51.1, 3623.0], [51.2, 3623.0], [51.3, 3623.0], [51.4, 3623.0], [51.5, 3632.0], [51.6, 3632.0], [51.7, 3632.0], [51.8, 3632.0], [51.9, 3632.0], [52.0, 3639.0], [52.1, 3639.0], [52.2, 3639.0], [52.3, 3639.0], [52.4, 3639.0], [52.5, 3641.0], [52.6, 3641.0], [52.7, 3641.0], [52.8, 3641.0], [52.9, 3641.0], [53.0, 3653.0], [53.1, 3653.0], [53.2, 3653.0], [53.3, 3653.0], [53.4, 3653.0], [53.5, 3654.0], [53.6, 3654.0], [53.7, 3654.0], [53.8, 3654.0], [53.9, 3654.0], [54.0, 3658.0], [54.1, 3658.0], [54.2, 3658.0], [54.3, 3658.0], [54.4, 3658.0], [54.5, 3660.0], [54.6, 3660.0], [54.7, 3660.0], [54.8, 3660.0], [54.9, 3660.0], [55.0, 3672.0], [55.1, 3672.0], [55.2, 3672.0], [55.3, 3672.0], [55.4, 3672.0], [55.5, 3673.0], [55.6, 3673.0], [55.7, 3673.0], [55.8, 3673.0], [55.9, 3673.0], [56.0, 3674.0], [56.1, 3674.0], [56.2, 3674.0], [56.3, 3674.0], [56.4, 3674.0], [56.5, 3674.0], [56.6, 3674.0], [56.7, 3674.0], [56.8, 3674.0], [56.9, 3674.0], [57.0, 3674.0], [57.1, 3674.0], [57.2, 3674.0], [57.3, 3674.0], [57.4, 3674.0], [57.5, 3677.0], [57.6, 3677.0], [57.7, 3677.0], [57.8, 3677.0], [57.9, 3677.0], [58.0, 3682.0], [58.1, 3682.0], [58.2, 3682.0], [58.3, 3682.0], [58.4, 3682.0], [58.5, 3687.0], [58.6, 3687.0], [58.7, 3687.0], [58.8, 3687.0], [58.9, 3687.0], [59.0, 3692.0], [59.1, 3692.0], [59.2, 3692.0], [59.3, 3692.0], [59.4, 3692.0], [59.5, 3706.0], [59.6, 3706.0], [59.7, 3706.0], [59.8, 3706.0], [59.9, 3706.0], [60.0, 3714.0], [60.1, 3714.0], [60.2, 3714.0], [60.3, 3714.0], [60.4, 3714.0], [60.5, 3716.0], [60.6, 3716.0], [60.7, 3716.0], [60.8, 3716.0], [60.9, 3716.0], [61.0, 3717.0], [61.1, 3717.0], [61.2, 3717.0], [61.3, 3717.0], [61.4, 3717.0], [61.5, 3723.0], [61.6, 3723.0], [61.7, 3723.0], [61.8, 3723.0], [61.9, 3723.0], [62.0, 3732.0], [62.1, 3732.0], [62.2, 3732.0], [62.3, 3732.0], [62.4, 3732.0], [62.5, 3733.0], [62.6, 3733.0], [62.7, 3733.0], [62.8, 3733.0], [62.9, 3733.0], [63.0, 3740.0], [63.1, 3740.0], [63.2, 3740.0], [63.3, 3740.0], [63.4, 3740.0], [63.5, 3743.0], [63.6, 3743.0], [63.7, 3743.0], [63.8, 3743.0], [63.9, 3743.0], [64.0, 3750.0], [64.1, 3750.0], [64.2, 3750.0], [64.3, 3750.0], [64.4, 3750.0], [64.5, 3752.0], [64.6, 3752.0], [64.7, 3752.0], [64.8, 3752.0], [64.9, 3752.0], [65.0, 3763.0], [65.1, 3763.0], [65.2, 3763.0], [65.3, 3763.0], [65.4, 3763.0], [65.5, 3774.0], [65.6, 3774.0], [65.7, 3774.0], [65.8, 3774.0], [65.9, 3774.0], [66.0, 3790.0], [66.1, 3790.0], [66.2, 3790.0], [66.3, 3790.0], [66.4, 3790.0], [66.5, 3802.0], [66.6, 3802.0], [66.7, 3802.0], [66.8, 3802.0], [66.9, 3802.0], [67.0, 3802.0], [67.1, 3802.0], [67.2, 3802.0], [67.3, 3802.0], [67.4, 3802.0], [67.5, 3805.0], [67.6, 3805.0], [67.7, 3805.0], [67.8, 3805.0], [67.9, 3805.0], [68.0, 3830.0], [68.1, 3830.0], [68.2, 3830.0], [68.3, 3830.0], [68.4, 3830.0], [68.5, 3850.0], [68.6, 3850.0], [68.7, 3850.0], [68.8, 3850.0], [68.9, 3850.0], [69.0, 3851.0], [69.1, 3851.0], [69.2, 3851.0], [69.3, 3851.0], [69.4, 3851.0], [69.5, 3875.0], [69.6, 3875.0], [69.7, 3875.0], [69.8, 3875.0], [69.9, 3875.0], [70.0, 3881.0], [70.1, 3881.0], [70.2, 3881.0], [70.3, 3881.0], [70.4, 3881.0], [70.5, 3883.0], [70.6, 3883.0], [70.7, 3883.0], [70.8, 3883.0], [70.9, 3883.0], [71.0, 3919.0], [71.1, 3919.0], [71.2, 3919.0], [71.3, 3919.0], [71.4, 3919.0], [71.5, 3950.0], [71.6, 3950.0], [71.7, 3950.0], [71.8, 3950.0], [71.9, 3950.0], [72.0, 3968.0], [72.1, 3968.0], [72.2, 3968.0], [72.3, 3968.0], [72.4, 3968.0], [72.5, 4000.0], [72.6, 4000.0], [72.7, 4000.0], [72.8, 4000.0], [72.9, 4000.0], [73.0, 4012.0], [73.1, 4012.0], [73.2, 4012.0], [73.3, 4012.0], [73.4, 4012.0], [73.5, 4021.0], [73.6, 4021.0], [73.7, 4021.0], [73.8, 4021.0], [73.9, 4021.0], [74.0, 4046.0], [74.1, 4046.0], [74.2, 4046.0], [74.3, 4046.0], [74.4, 4046.0], [74.5, 4060.0], [74.6, 4060.0], [74.7, 4060.0], [74.8, 4060.0], [74.9, 4060.0], [75.0, 4068.0], [75.1, 4068.0], [75.2, 4068.0], [75.3, 4068.0], [75.4, 4068.0], [75.5, 4070.0], [75.6, 4070.0], [75.7, 4070.0], [75.8, 4070.0], [75.9, 4070.0], [76.0, 4075.0], [76.1, 4075.0], [76.2, 4075.0], [76.3, 4075.0], [76.4, 4075.0], [76.5, 4086.0], [76.6, 4086.0], [76.7, 4086.0], [76.8, 4086.0], [76.9, 4086.0], [77.0, 4097.0], [77.1, 4097.0], [77.2, 4097.0], [77.3, 4097.0], [77.4, 4097.0], [77.5, 4104.0], [77.6, 4104.0], [77.7, 4104.0], [77.8, 4104.0], [77.9, 4104.0], [78.0, 4107.0], [78.1, 4107.0], [78.2, 4107.0], [78.3, 4107.0], [78.4, 4107.0], [78.5, 4109.0], [78.6, 4109.0], [78.7, 4109.0], [78.8, 4109.0], [78.9, 4109.0], [79.0, 4118.0], [79.1, 4118.0], [79.2, 4118.0], [79.3, 4118.0], [79.4, 4118.0], [79.5, 4118.0], [79.6, 4118.0], [79.7, 4118.0], [79.8, 4118.0], [79.9, 4118.0], [80.0, 4124.0], [80.1, 4124.0], [80.2, 4124.0], [80.3, 4124.0], [80.4, 4124.0], [80.5, 4130.0], [80.6, 4130.0], [80.7, 4130.0], [80.8, 4130.0], [80.9, 4130.0], [81.0, 4156.0], [81.1, 4156.0], [81.2, 4156.0], [81.3, 4156.0], [81.4, 4156.0], [81.5, 4173.0], [81.6, 4173.0], [81.7, 4173.0], [81.8, 4173.0], [81.9, 4173.0], [82.0, 4174.0], [82.1, 4174.0], [82.2, 4174.0], [82.3, 4174.0], [82.4, 4174.0], [82.5, 4193.0], [82.6, 4193.0], [82.7, 4193.0], [82.8, 4193.0], [82.9, 4193.0], [83.0, 4220.0], [83.1, 4220.0], [83.2, 4220.0], [83.3, 4220.0], [83.4, 4220.0], [83.5, 4250.0], [83.6, 4250.0], [83.7, 4250.0], [83.8, 4250.0], [83.9, 4250.0], [84.0, 4261.0], [84.1, 4261.0], [84.2, 4261.0], [84.3, 4261.0], [84.4, 4261.0], [84.5, 4272.0], [84.6, 4272.0], [84.7, 4272.0], [84.8, 4272.0], [84.9, 4272.0], [85.0, 4273.0], [85.1, 4273.0], [85.2, 4273.0], [85.3, 4273.0], [85.4, 4273.0], [85.5, 4274.0], [85.6, 4274.0], [85.7, 4274.0], [85.8, 4274.0], [85.9, 4274.0], [86.0, 4276.0], [86.1, 4276.0], [86.2, 4276.0], [86.3, 4276.0], [86.4, 4276.0], [86.5, 4285.0], [86.6, 4285.0], [86.7, 4285.0], [86.8, 4285.0], [86.9, 4285.0], [87.0, 4291.0], [87.1, 4291.0], [87.2, 4291.0], [87.3, 4291.0], [87.4, 4291.0], [87.5, 4312.0], [87.6, 4312.0], [87.7, 4312.0], [87.8, 4312.0], [87.9, 4312.0], [88.0, 4323.0], [88.1, 4323.0], [88.2, 4323.0], [88.3, 4323.0], [88.4, 4323.0], [88.5, 4352.0], [88.6, 4352.0], [88.7, 4352.0], [88.8, 4352.0], [88.9, 4352.0], [89.0, 4416.0], [89.1, 4416.0], [89.2, 4416.0], [89.3, 4416.0], [89.4, 4416.0], [89.5, 4428.0], [89.6, 4428.0], [89.7, 4428.0], [89.8, 4428.0], [89.9, 4428.0], [90.0, 4445.0], [90.1, 4445.0], [90.2, 4445.0], [90.3, 4445.0], [90.4, 4445.0], [90.5, 4463.0], [90.6, 4463.0], [90.7, 4463.0], [90.8, 4463.0], [90.9, 4463.0], [91.0, 4464.0], [91.1, 4464.0], [91.2, 4464.0], [91.3, 4464.0], [91.4, 4464.0], [91.5, 4464.0], [91.6, 4464.0], [91.7, 4464.0], [91.8, 4464.0], [91.9, 4464.0], [92.0, 4466.0], [92.1, 4466.0], [92.2, 4466.0], [92.3, 4466.0], [92.4, 4466.0], [92.5, 4474.0], [92.6, 4474.0], [92.7, 4474.0], [92.8, 4474.0], [92.9, 4474.0], [93.0, 4474.0], [93.1, 4474.0], [93.2, 4474.0], [93.3, 4474.0], [93.4, 4474.0], [93.5, 4497.0], [93.6, 4497.0], [93.7, 4497.0], [93.8, 4497.0], [93.9, 4497.0], [94.0, 4633.0], [94.1, 4633.0], [94.2, 4633.0], [94.3, 4633.0], [94.4, 4633.0], [94.5, 4672.0], [94.6, 4672.0], [94.7, 4672.0], [94.8, 4672.0], [94.9, 4672.0], [95.0, 4722.0], [95.1, 4722.0], [95.2, 4722.0], [95.3, 4722.0], [95.4, 4722.0], [95.5, 4735.0], [95.6, 4735.0], [95.7, 4735.0], [95.8, 4735.0], [95.9, 4735.0], [96.0, 4739.0], [96.1, 4739.0], [96.2, 4739.0], [96.3, 4739.0], [96.4, 4739.0], [96.5, 4798.0], [96.6, 4798.0], [96.7, 4798.0], [96.8, 4798.0], [96.9, 4798.0], [97.0, 4873.0], [97.1, 4873.0], [97.2, 4873.0], [97.3, 4873.0], [97.4, 4873.0], [97.5, 4874.0], [97.6, 4874.0], [97.7, 4874.0], [97.8, 4874.0], [97.9, 4874.0], [98.0, 4909.0], [98.1, 4909.0], [98.2, 4909.0], [98.3, 4909.0], [98.4, 4909.0], [98.5, 4915.0], [98.6, 4915.0], [98.7, 4915.0], [98.8, 4915.0], [98.9, 4915.0], [99.0, 4924.0], [99.1, 4924.0], [99.2, 4924.0], [99.3, 4924.0], [99.4, 4924.0], [99.5, 4963.0], [99.6, 4963.0], [99.7, 4963.0], [99.8, 4963.0], [99.9, 4963.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 2500.0, "maxY": 20.0, "series": [{"data": [[2500.0, 2.0], [2600.0, 1.0], [2800.0, 10.0], [2700.0, 1.0], [2900.0, 18.0], [3000.0, 12.0], [3100.0, 19.0], [3200.0, 16.0], [3300.0, 4.0], [3400.0, 8.0], [3500.0, 8.0], [3600.0, 20.0], [3700.0, 14.0], [3800.0, 9.0], [3900.0, 3.0], [4000.0, 10.0], [4100.0, 11.0], [4200.0, 9.0], [4300.0, 3.0], [4400.0, 10.0], [4600.0, 2.0], [4700.0, 4.0], [4800.0, 2.0], [4900.0, 4.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 4900.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 200.0, "minX": 2.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 200.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 200.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 101.06000000000002, "minX": 1.63828092E12, "maxY": 101.06000000000002, "series": [{"data": [[1.63828092E12, 101.06000000000002]], "isOverall": false, "label": "Users requesting location", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.63828092E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 2591.0, "minX": 2.0, "maxY": 4943.5, "series": [{"data": [[2.0, 4943.5], [3.0, 4874.0], [4.0, 4909.0], [5.0, 4915.0], [6.0, 4873.0], [7.0, 4735.0], [8.0, 4739.0], [9.0, 4798.0], [11.0, 4697.0], [12.0, 4633.0], [14.0, 4481.5], [15.0, 4464.0], [17.0, 4468.5], [18.0, 4474.0], [19.0, 4464.0], [20.0, 4445.0], [22.0, 4422.0], [23.0, 4352.0], [24.0, 4272.0], [25.0, 4285.0], [26.0, 4276.0], [29.0, 4302.666666666667], [30.0, 4250.0], [31.0, 4291.0], [33.0, 4274.0], [32.0, 4261.0], [35.0, 4173.0], [34.0, 4220.0], [36.0, 4193.0], [39.0, 4068.0], [38.0, 4122.0], [43.0, 4110.75], [45.0, 4109.0], [44.0, 4156.0], [47.0, 4118.0], [46.0, 4107.0], [49.0, 4130.0], [48.0, 4021.0], [53.0, 3919.0], [52.0, 4049.0], [55.0, 4046.0], [54.0, 4086.0], [59.0, 3881.0], [58.0, 3972.6666666666665], [61.0, 3883.0], [60.0, 3875.0], [63.0, 3805.0], [62.0, 3850.0], [67.0, 3790.0], [66.0, 3716.0], [65.0, 3802.0], [64.0, 3851.0], [69.0, 3802.0], [68.0, 3830.0], [74.0, 3706.0], [73.0, 3724.25], [78.0, 3713.5], [76.0, 3747.5], [83.0, 3641.0], [82.0, 3722.75], [86.0, 3682.0], [85.0, 3658.0], [84.0, 3717.0], [91.0, 3654.0], [90.0, 3686.25], [95.0, 3653.0], [94.0, 3692.0], [93.0, 3568.0], [92.0, 3526.0], [98.0, 3639.0], [97.0, 3687.0], [96.0, 3607.0], [103.0, 3555.0], [101.0, 3535.0], [100.0, 3595.0], [106.0, 3582.0], [105.0, 3565.0], [104.0, 3632.0], [111.0, 3455.0], [110.0, 3535.0], [109.0, 3576.6666666666665], [115.0, 3490.0], [114.0, 3497.0], [113.0, 3447.0], [112.0, 3461.0], [119.0, 3394.5], [117.0, 3445.5], [123.0, 3240.0], [122.0, 3265.0], [121.0, 3329.5], [127.0, 3219.0], [126.0, 3226.0], [125.0, 3295.0], [124.0, 3257.0], [131.0, 3257.0], [130.0, 3221.0], [129.0, 3294.5], [143.0, 3159.0], [142.0, 3216.0], [141.0, 3188.0], [140.0, 3243.0], [139.0, 3249.0], [138.0, 3128.0], [137.0, 3195.0], [136.0, 3218.4], [151.0, 3092.0], [150.0, 3103.0], [149.0, 3170.0], [147.0, 3128.0], [144.0, 3143.0], [159.0, 3119.0], [158.0, 3030.0], [157.0, 3061.0], [156.0, 3174.0], [155.0, 3142.0], [153.0, 3104.0], [152.0, 3131.0], [167.0, 3026.0], [165.0, 2842.0], [164.0, 3045.0], [163.0, 3033.0], [162.0, 3018.0], [161.0, 3041.5], [172.0, 3024.0], [171.0, 2984.5], [169.0, 3029.0], [168.0, 2947.0], [183.0, 2944.0], [181.0, 2912.0], [180.0, 2927.75], [191.0, 2849.6666666666665], [189.0, 2949.0], [188.0, 2924.5], [187.0, 2854.0], [198.0, 2630.0], [197.0, 2860.0], [196.0, 2745.0], [195.0, 2921.5], [193.0, 2880.5], [200.0, 2591.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[101.06000000000002, 3607.4849999999988]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 200.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 2010.7166666666667, "minX": 1.63828092E12, "maxY": 4736.666666666667, "series": [{"data": [[1.63828092E12, 2010.7166666666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.63828092E12, 4736.666666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.63828092E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 3607.4849999999988, "minX": 1.63828092E12, "maxY": 3607.4849999999988, "series": [{"data": [[1.63828092E12, 3607.4849999999988]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.63828092E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 3607.329999999999, "minX": 1.63828092E12, "maxY": 3607.329999999999, "series": [{"data": [[1.63828092E12, 3607.329999999999]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.63828092E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 2635.3399999999992, "minX": 1.63828092E12, "maxY": 2635.3399999999992, "series": [{"data": [[1.63828092E12, 2635.3399999999992]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.63828092E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 2590.0, "minX": 1.63828092E12, "maxY": 4963.0, "series": [{"data": [[1.63828092E12, 4963.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.63828092E12, 4443.3]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.63828092E12, 4923.91]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.63828092E12, 4719.499999999999]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.63828092E12, 2590.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.63828092E12, 3604.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.63828092E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 3036.0, "minX": 22.0, "maxY": 4652.5, "series": [{"data": [[79.0, 3036.0], [22.0, 4652.5], [99.0, 3750.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 99.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 3036.0, "minX": 22.0, "maxY": 4652.5, "series": [{"data": [[79.0, 3036.0], [22.0, 4652.5], [99.0, 3749.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 99.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 3.3333333333333335, "minX": 1.63828092E12, "maxY": 3.3333333333333335, "series": [{"data": [[1.63828092E12, 3.3333333333333335]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.63828092E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 3.3333333333333335, "minX": 1.63828092E12, "maxY": 3.3333333333333335, "series": [{"data": [[1.63828092E12, 3.3333333333333335]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.63828092E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 3.3333333333333335, "minX": 1.63828092E12, "maxY": 3.3333333333333335, "series": [{"data": [[1.63828092E12, 3.3333333333333335]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.63828092E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 3.3333333333333335, "minX": 1.63828092E12, "maxY": 3.3333333333333335, "series": [{"data": [[1.63828092E12, 3.3333333333333335]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.63828092E12, "title": "Total Transactions Per Second"}},
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

