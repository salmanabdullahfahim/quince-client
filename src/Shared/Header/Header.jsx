import React from 'react';
import { Link } from 'react-router-dom';
import quinceLogo from '../../../public/chefIcon.svg'

const Header = () => {
    return (
        <div className='shadow-xl rounded-lg'>
            <nav className="relative px-4 py-4 flex justify-between items-center">
                <div className='flex items-center gap-2'>
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" className="w-10 h-10" fill="#FF5733" viewBox="0, 0, 430, 540">
                        <g id="Layer_1">
                            <path d="M421.619,496.667 C421.188,497.022 420.669,497.191 420.155,497.191 C419.488,497.191 418.831,496.907 418.375,496.356 L159.397,182.428 C158.589,181.444 158.729,179.994 159.709,179.183 C160.695,178.376 162.145,178.515 162.954,179.494 L421.927,493.423 C422.74,494.406 422.599,495.857 421.619,496.667 M298.01,415.453 C253.411,416.366 198.236,423.213 163.077,429.068 C166.935,427.649 170.995,426.166 175.065,424.697 C184.148,421.422 193.259,418.229 200.138,416.014 C202,415.416 203.679,414.896 205.169,414.463 C206.436,414.09 207.568,413.775 208.502,413.544 C209.521,413.293 210.327,413.13 210.887,413.071 C211.439,412.995 211.743,413.071 211.743,413.049 L211.682,413.034 C211.574,412.998 211.312,412.907 210.89,412.863 C210.318,412.789 209.477,412.755 208.407,412.758 C206.273,412.766 203.23,412.923 199.592,413.185 C192.314,413.718 182.647,414.674 172.995,415.716 C168.314,416.223 163.636,416.75 159.231,417.257 C163.103,415.819 167.195,414.312 171.296,412.821 C180.16,409.597 189.047,406.456 195.761,404.285 C197.601,403.689 199.254,403.179 200.723,402.747 C201.934,402.392 203.023,402.089 203.924,401.865 C204.918,401.621 205.706,401.463 206.249,401.405 C206.79,401.334 207.086,401.402 207.086,401.385 C207.086,401.406 206.817,401.262 206.254,401.197 C205.696,401.12 204.877,401.081 203.829,401.08 C201.746,401.077 198.769,401.214 195.216,401.458 C188.106,401.945 178.661,402.848 169.229,403.838 C164.653,404.317 160.081,404.818 155.772,405.299 C159.547,403.887 163.527,402.406 167.528,400.94 C176.169,397.772 184.833,394.687 191.381,392.555 C193.188,391.967 194.811,391.464 196.248,391.04 C197.419,390.695 198.474,390.401 199.343,390.185 C200.312,389.946 201.083,389.794 201.613,389.736 C202.139,389.673 202.43,389.73 202.433,389.72 C202.433,389.74 202.164,389.599 201.619,389.53 C201.074,389.453 200.274,389.408 199.253,389.398 C197.213,389.382 194.312,389.506 190.843,389.726 C183.9,390.174 174.674,391.023 165.464,391.96 C160.992,392.412 156.52,392.887 152.313,393.344 C155.987,391.955 159.865,390.502 163.76,389.061 C172.175,385.946 180.62,382.919 187.001,380.828 C188.774,380.247 190.369,379.75 191.779,379.334 C192.905,378.999 193.921,378.715 194.763,378.506 C195.709,378.271 196.46,378.126 196.974,378.07 C197.487,378.012 197.773,378.062 197.776,378.058 C197.776,378.073 197.516,377.941 196.985,377.864 C196.452,377.784 195.67,377.732 194.675,377.719 C192.687,377.689 189.854,377.797 186.467,377.998 C179.691,378.401 170.687,379.197 161.7,380.079 C160.475,380.199 159.246,380.321 158.023,380.444 L160.263,377.079 C168.366,374.057 176.475,371.125 182.623,369.098 C184.366,368.525 185.927,368.035 187.31,367.624 C188.393,367.301 189.374,367.026 190.185,366.826 C191.107,366.599 191.836,366.457 192.34,366.404 C192.839,366.349 193.12,366.393 193.12,366.393 C193.12,366.41 192.868,366.28 192.35,366.198 C191.831,366.117 191.071,366.062 190.1,366.04 C188.16,365.999 185.398,366.087 182.094,366.269 C177.709,366.51 172.363,366.919 166.706,367.407 L170.426,361.823 C206.838,355.46 251.014,351.559 276.073,349.685 L291.684,368.608 C294.263,383.353 297.026,401.312 298.01,415.453 M259.515,331.246 C258.5,331.617 257.499,331.898 256.542,332.154 C255.595,332.441 254.672,332.642 253.801,332.826 C253.306,332.942 252.859,333.005 252.394,333.09 C232.375,334.859 207.81,337.424 184.354,340.92 L222.099,284.259 L260.545,330.865 C260.206,330.984 259.853,331.139 259.515,331.246 M48.727,532.591 C48.285,533.257 47.551,533.617 46.808,533.617 C46.369,533.617 45.925,533.49 45.531,533.229 C44.475,532.526 44.186,531.093 44.892,530.035 L214.645,275.226 L217.709,278.94 L48.727,532.591 z M109.076,250.731 C109.034,250.838 108.99,250.948 108.947,251.051 L107.528,250.549 C108.068,250.608 108.583,250.669 109.076,250.731 M114.213,259.708 C117.147,255.563 120.401,250.909 124.104,246.079 C127.787,241.243 131.905,236.21 136.541,231.395 C141.142,226.54 146.39,222.055 152.099,218.232 C155.506,215.978 159.134,214.098 162.91,212.512 L203.722,261.984 L148.726,344.539 C143.485,342.7 137.558,339.799 132.235,335.796 C128.598,333.113 125.28,329.954 122.637,326.605 C119.97,323.259 118.078,319.691 117.005,316.396 C116.519,314.749 116.155,313.174 116.041,311.756 C115.875,310.339 115.903,309.063 115.99,308.04 C116.06,307.009 116.208,306.174 116.338,305.621 C116.453,305.064 116.513,304.763 116.513,304.763 C116.513,304.763 116.386,305.042 116.141,305.556 C115.884,306.069 115.548,306.821 115.218,307.871 C114.872,308.909 114.528,310.193 114.338,311.721 C114.102,313.246 114.074,314.998 114.173,316.921 C114.458,320.749 115.59,325.204 117.637,329.605 C119.659,334.022 122.494,338.428 125.833,342.426 C127.97,345.029 130.329,347.432 132.777,349.652 C132.292,349.428 131.817,349.22 131.329,348.98 C130.202,348.422 129.076,347.803 127.925,347.159 C126.837,346.492 125.681,345.828 124.598,345.073 C122.414,343.623 120.338,341.955 118.334,340.146 C116.38,338.368 114.604,336.399 112.976,334.328 C111.4,332.308 110.021,330.173 108.866,328 C107.551,325.535 106.516,323.038 105.735,320.591 C105.161,318.786 104.734,317.006 104.427,315.298 C104.132,313.383 103.953,311.546 103.917,309.863 C103.908,309.013 103.929,308.204 103.97,307.432 C104.024,306.794 104.082,306.188 104.141,305.615 C104.329,304.587 104.486,303.68 104.625,302.94 C104.797,302.507 104.884,302.199 104.869,302.028 C104.837,301.734 104.691,301.574 104.45,301.53 C104.186,301.133 103.891,300.932 103.533,300.918 C103.354,300.507 103.208,300.265 103.033,300.252 C103.018,300.011 102.964,299.949 102.87,300.091 C102.779,300.224 102.604,300.549 102.353,301.036 C101.935,301.755 101.472,302.671 101.015,303.825 C100.652,304.681 100.298,305.636 99.971,306.691 C99.799,307.255 99.635,307.848 99.49,308.469 C98.999,310.369 98.691,312.507 98.539,314.826 C98.406,317.105 98.483,319.556 98.81,322.102 C99.154,324.95 99.817,327.914 100.837,330.867 C101.975,334.104 103.454,337.357 105.303,340.452 C106.44,342.358 107.678,344.231 109.015,346.026 C109.805,347.101 110.634,348.148 111.5,349.157 C112.608,350.526 113.823,351.778 115.016,353.038 C115.976,354.002 116.95,354.935 117.936,355.841 C116.334,355.016 114.713,354.126 113.074,353.124 C111.792,352.33 110.534,351.451 109.242,350.563 C108.044,349.61 106.725,348.705 105.563,347.644 C103.138,345.627 100.955,343.297 98.903,340.826 C96.872,338.366 95.183,335.658 93.719,332.862 C92.281,330.085 91.169,327.19 90.392,324.293 C89.481,320.986 88.999,317.702 88.831,314.574 C88.707,312.251 88.767,310.01 88.949,307.918 C89.224,305.523 89.581,303.284 90.089,301.331 C90.353,300.301 90.64,299.351 90.93,298.469 C91.194,297.717 91.456,297.02 91.699,296.376 C92.274,295.122 92.748,294.083 93.123,293.337 C93.505,292.742 93.707,292.383 93.699,292.298 C93.678,292.15 93.424,292.249 92.958,292.562 C92.469,292.69 91.849,293.116 91.074,293.799 C90.649,294.003 90.206,294.353 89.732,294.884 C89.584,294.959 89.415,295.131 89.221,295.415 C89.039,295.683 88.821,296.052 88.561,296.515 C87.98,297.436 87.389,298.522 86.809,299.777 C86.319,300.808 85.833,301.929 85.36,303.135 C85.113,303.801 84.87,304.499 84.64,305.218 C83.897,307.491 83.304,310.014 82.901,312.733 C82.503,315.47 82.323,318.403 82.452,321.467 C82.563,324.924 83.076,328.531 84.036,332.126 C85.056,335.859 86.449,339.625 88.34,343.18 C89.505,345.384 90.785,347.553 92.192,349.624 C93.027,350.865 93.911,352.068 94.846,353.222 C96.026,354.822 97.377,356.23 98.652,357.698 C99.99,359.079 101.324,360.45 102.698,361.723 C103.167,362.154 103.642,362.572 104.117,362.99 C103.918,362.888 103.732,362.785 103.531,362.684 C100.646,361.133 97.723,359.319 94.825,357.272 C93.381,356.238 91.996,355.103 90.561,353.968 C89.25,352.731 87.767,351.586 86.534,350.217 C83.862,347.63 81.573,344.639 79.473,341.507 C77.364,338.366 75.764,334.915 74.462,331.394 C73.163,327.867 72.318,324.206 71.923,320.585 C71.036,313.336 71.903,306.329 73.471,300.54 C74.313,297.664 75.214,295.026 76.266,292.8 C77.264,290.544 78.335,288.67 79.258,287.142 C80.221,285.656 81.01,284.483 81.623,283.737 C82.213,282.976 82.526,282.569 82.526,282.569 C82.526,282.569 82.159,282.924 81.47,283.598 C80.76,284.25 79.811,285.301 78.618,286.678 C77.473,288.083 76.114,289.831 74.768,291.993 C73.369,294.123 72.061,296.695 70.757,299.58 C68.273,305.378 66.26,312.691 66.097,320.837 C65.972,324.9 66.328,329.148 67.234,333.387 C68.142,337.614 69.449,341.898 71.376,345.906 C73.288,349.906 75.521,353.823 78.196,357.291 C79.446,359.117 80.932,360.679 82.295,362.356 C83.152,363.265 84.004,364.168 84.864,365.054 C19.246,333.275 70.052,255.387 108.725,251.611 C106.126,258.286 104.268,264.066 102.748,268.54 C101.564,272.005 100.681,274.757 99.967,276.578 C99.245,278.433 98.859,279.421 98.859,279.421 C98.859,279.421 99.639,278.692 100.979,277.221 C102.304,275.713 104.235,273.475 106.456,270.492 C108.696,267.527 111.277,263.862 114.213,259.708 M115.772,170.661 C113.665,170.522 111.742,170.486 110.024,170.278 C108.322,170 106.807,169.748 105.484,169.531 C104.18,169.259 103.097,168.913 102.205,168.692 C100.446,168.205 99.508,167.946 99.508,167.946 C99.508,167.946 100.478,168.024 102.298,168.17 C103.208,168.235 104.313,168.387 105.624,168.427 C106.928,168.433 108.427,168.441 110.108,168.445 C111.776,168.399 113.615,168.153 115.595,167.996 C116.566,167.809 117.58,167.611 118.63,167.403 C119.681,167.218 120.761,167.015 121.82,166.61 C122.889,166.241 124.011,165.936 125.109,165.499 C126.17,164.983 127.259,164.455 128.38,163.911 C130.438,162.637 132.398,161.479 134.589,159.298 C138.367,155.802 141.249,150.557 142.561,144.672 C143.896,138.736 143.703,132.101 142.547,125.378 C141.406,118.624 138.91,111.855 135.975,105.187 C132.936,98.541 129.109,92.097 124.742,86.03 C120.417,79.894 115.615,74.19 110.362,68.924 C105.138,63.703 99.707,58.831 94.012,54.696 C88.322,50.563 82.543,46.945 76.772,44.086 C70.983,41.291 65.285,39.075 59.851,37.724 C54.421,36.342 49.285,35.799 44.734,35.875 C40.193,36.041 36.237,36.808 33.127,37.923 C30.013,39.049 27.699,40.342 26.189,41.327 C24.698,42.371 23.928,42.97 23.928,42.97 C23.928,42.97 24.579,42.245 25.864,40.95 C27.218,39.709 29.285,37.881 32.388,36.255 C35.468,34.613 39.542,33.11 44.416,32.38 C49.275,31.683 54.909,31.581 60.875,32.556 C66.862,33.432 73.206,35.204 79.586,37.835 C85.956,40.473 92.446,43.837 98.652,48.067 C104.869,52.273 111.016,57.068 116.621,62.608 C122.228,68.078 127.545,74.197 132.243,80.683 C136.865,87.257 140.884,94.272 144.099,101.559 C147.307,108.853 149.524,116.495 150.565,124.129 C151.636,131.752 151.303,139.466 149.208,146.444 C147.17,153.451 143.146,159.47 137.954,163.382 C137.37,163.818 136.792,164.247 136.22,164.676 L135.358,165.308 L134.326,165.882 C132.941,166.597 131.627,167.44 130.287,167.933 C128.951,168.39 127.648,168.834 126.383,169.268 C125.1,169.604 123.823,169.795 122.613,170.046 C121.404,170.336 120.214,170.415 119.07,170.476 C117.925,170.552 116.826,170.64 115.772,170.661 M194.979,207.671 L198.006,207.88 C199.897,208.021 201.867,208.216 203.823,208.418 C207.731,208.842 211.613,209.298 215.441,209.925 C219.26,210.56 223.05,211.229 226.766,212.026 C229.754,212.678 232.686,213.4 235.586,214.152 L219.733,237.948 L194.744,207.657 L194.979,207.671 z M270.525,191.348 C271.23,190.289 272.656,190.004 273.72,190.709 C274.777,191.414 275.066,192.845 274.36,193.903 L233.722,254.904 L230.659,251.191 L270.525,191.348 z M267.663,132.565 C267.862,133.45 268.038,134.555 268.376,135.819 C268.749,137.071 269.176,138.512 269.656,140.12 C270.184,141.706 270.948,143.393 271.669,145.243 C272.134,146.122 272.619,147.032 273.118,147.979 C273.599,148.929 274.106,149.904 274.801,150.802 C275.459,151.718 276.076,152.704 276.812,153.63 C277.613,154.496 278.435,155.386 279.28,156.299 C281.095,157.903 282.77,159.445 285.489,160.91 C289.93,163.516 295.784,164.758 301.797,164.31 C307.866,163.875 314.161,161.77 320.263,158.721 C326.402,155.677 332.155,151.33 337.691,146.592 C343.176,141.761 348.239,136.234 352.783,130.3 C357.408,124.384 361.476,118.139 365.001,111.59 C368.485,105.077 371.581,98.47 373.892,91.823 C376.206,85.181 377.994,78.603 379.063,72.252 C380.066,65.9 380.54,59.806 380.26,54.211 C380.012,48.612 379.049,43.542 377.663,39.207 C376.187,34.91 374.31,31.347 372.344,28.688 C370.368,26.034 368.458,24.193 367.08,23.034 C365.649,21.906 364.853,21.342 364.853,21.342 C364.853,21.342 365.735,21.754 367.346,22.613 C368.924,23.55 371.272,25 373.727,27.498 C376.19,29.972 378.807,33.438 380.916,37.892 C382.988,42.342 384.712,47.707 385.505,53.698 C386.398,59.685 386.536,66.267 385.861,73.136 C385.18,80.001 383.834,87.184 381.583,94.352 C379.352,101.516 376.539,108.786 372.856,115.753 C369.244,122.704 364.919,129.563 360.069,135.934 C355.113,142.258 349.561,148.135 343.513,153.322 C337.46,158.499 330.786,162.835 323.775,166.038 C316.789,169.262 309.309,171.175 302.023,171.19 C294.726,171.263 287.797,169.153 282.555,165.311 C281.966,164.878 281.388,164.452 280.815,164.028 L279.96,163.387 L279.112,162.561 C278.029,161.448 276.839,160.43 275.98,159.29 C275.156,158.142 274.355,157.024 273.575,155.939 C272.884,154.808 272.331,153.64 271.74,152.555 C271.113,151.484 270.693,150.366 270.3,149.287 C269.898,148.213 269.498,147.184 269.175,146.184 C268.699,144.126 268.175,142.274 267.878,140.572 C267.655,138.862 267.455,137.338 267.281,136.008 C267.162,134.682 267.181,133.542 267.136,132.628 C267.093,130.801 267.069,129.829 267.069,129.829 C267.069,129.829 267.275,130.779 267.663,132.565 M275.971,229.208 C286.985,234.497 296.078,239.731 303.009,242.782 C306.458,244.321 309.45,245.208 311.574,245.288 C313.739,245.381 314.663,244.565 314.652,244.636 C314.652,244.636 314.381,244.679 313.885,244.659 C313.387,244.656 312.669,244.486 311.817,244.137 C310.088,243.451 307.91,241.684 305.225,239.308 C301.165,235.665 295.923,230.423 289.148,224.674 C300.952,221.676 318.792,219.256 334.866,225.609 C347.956,230.786 357.843,241.118 364.255,256.316 C374.547,280.706 373.625,303.278 361.652,319.873 C355.762,328.036 347.309,334.418 336.73,338.966 C338.774,337.079 340.755,335.042 342.662,332.906 C345.54,329.461 348.182,325.724 350.306,321.682 C352.377,317.611 353.951,313.311 354.912,308.975 C355.906,304.642 356.155,300.273 355.986,296.139 C355.655,287.831 353.276,280.494 350.571,274.704 C349.152,271.828 347.751,269.262 346.276,267.139 C344.859,264.981 343.455,263.229 342.272,261.821 C341.047,260.441 340.077,259.38 339.356,258.72 C338.654,258.038 338.279,257.674 338.279,257.674 C338.279,257.674 338.6,258.088 339.201,258.856 C339.827,259.615 340.637,260.796 341.637,262.297 C342.6,263.832 343.727,265.719 344.801,267.985 C345.933,270.216 346.931,272.867 347.893,275.76 C348.799,278.676 349.526,281.896 349.98,285.31 C350.44,288.726 350.491,292.356 350.155,296.015 C349.795,299.673 349.057,303.388 347.702,306.918 C346.379,310.456 344.571,313.822 342.413,316.924 C340.196,320.004 337.584,322.768 334.832,325.275 C331.956,327.689 329.025,329.923 325.904,331.746 C325.133,332.209 324.375,332.669 323.615,333.122 C322.827,333.535 322.044,333.939 321.271,334.341 C320.975,334.496 320.684,334.646 320.392,334.797 C320.946,334.228 321.505,333.663 322.052,333.079 C324.799,329.98 327.362,326.625 329.515,323.016 C330.056,322.093 330.568,321.158 331.055,320.213 C332.488,317.45 333.684,314.597 334.613,311.716 C335.872,307.869 336.565,303.976 336.895,300.251 C337.545,292.813 336.527,286.051 334.939,280.554 C334.107,277.866 333.18,275.433 332.182,273.389 C331.673,272.325 331.146,271.357 330.654,270.48 C330.171,269.654 329.713,268.904 329.294,268.235 C328.353,266.875 327.607,265.837 327.017,265.183 C326.458,264.514 326.158,264.154 326.158,264.154 C326.158,264.154 326.398,264.554 326.851,265.296 C327.332,266.032 327.905,267.164 328.61,268.59 C328.946,269.343 329.314,270.187 329.69,271.115 C330,271.978 330.339,272.916 330.631,273.926 C331.288,276.005 331.818,278.427 332.215,281.046 C332.598,283.66 332.783,286.511 332.714,289.506 C332.63,292.543 332.194,295.733 331.441,298.937 C330.687,302.11 329.62,305.315 328.088,308.369 C326.577,311.436 324.692,314.364 322.538,317.066 C320.244,319.854 317.639,322.369 314.926,324.636 C312.734,326.377 310.513,327.997 308.229,329.413 C307.684,329.747 307.135,330.069 306.583,330.38 C305.874,330.791 305.164,331.196 304.464,331.595 C304.103,331.78 303.749,331.958 303.39,332.135 L303.219,331.316 C305.182,329.119 307.042,326.796 308.726,324.352 C309.279,323.541 309.811,322.722 310.329,321.89 C311.836,319.479 313.171,316.981 314.313,314.455 C315.84,311.096 316.973,307.683 317.805,304.359 C319.434,297.798 319.783,291.612 319.3,286.408 C319.062,283.905 318.612,281.609 318.086,279.64 C317.814,278.637 317.486,277.71 317.205,276.869 C316.89,276.058 316.588,275.314 316.317,274.648 C315.656,273.31 315.138,272.294 314.682,271.649 C314.265,270.988 314.04,270.636 314.04,270.636 C314.04,270.636 314.2,271.021 314.501,271.737 C314.838,272.449 315.171,273.534 315.584,274.881 C315.75,275.58 315.935,276.36 316.123,277.216 C316.233,278.037 316.381,278.924 316.46,279.87 C316.643,281.792 316.708,283.987 316.538,286.327 C316.397,288.645 316.037,291.13 315.448,293.701 C314.817,296.358 313.901,299.111 312.728,301.858 C311.579,304.551 310.18,307.245 308.478,309.822 C306.776,312.419 304.817,314.904 302.665,317.212 C300.292,319.709 297.695,321.97 295.023,323.998 C294.123,324.667 293.216,325.302 292.307,325.92 L289.957,323.071 C297.533,313.069 302.481,301.435 303.666,292.257 C304.017,289.943 304.042,287.78 303.993,285.891 C303.954,284.948 303.826,284.062 303.758,283.257 C303.607,282.459 303.464,281.722 303.339,281.058 C302.959,279.743 302.666,278.753 302.346,278.115 C302.07,277.465 301.921,277.117 301.921,277.117 C301.921,277.117 302,277.484 302.152,278.178 C302.343,278.866 302.439,279.904 302.558,281.174 C302.554,281.819 302.55,282.538 302.55,283.315 C302.466,284.094 302.428,284.927 302.293,285.813 C301.999,287.579 301.598,289.547 300.859,291.613 C299.498,295.766 297.104,300.325 294.017,304.777 C291.251,308.736 287.873,312.579 284.169,316.055 L238.111,260.225 L262.727,223.273 C267.396,225.203 271.821,227.209 275.971,229.208 M424.257,485.867 L317.495,356.451 C341.378,352.257 359.803,342.129 370.994,326.614 C385.201,306.919 386.611,279.668 374.873,251.84 C367.209,233.68 355.176,221.255 339.1,214.894 C315.577,205.595 289.899,211.931 277.971,215.928 C275.712,214.314 273.318,212.707 270.823,211.123 L287.778,185.671 C291.084,186.513 294.561,186.942 298.185,186.942 C326.209,186.942 359.093,161.772 380.009,124.314 C392.908,101.217 399.676,76.47 399.068,54.632 C398.45,32.363 390.242,15.706 375.965,7.736 C370.143,4.484 363.57,2.835 356.421,2.835 C328.4,2.835 295.516,28.004 274.602,65.463 C252.746,104.606 249.9,146.561 265.3,169.547 L246.078,198.403 C245.195,198.045 244.331,197.673 243.432,197.331 C239.598,195.835 235.62,194.506 231.548,193.325 C227.48,192.132 223.318,191.053 219.079,190.202 C214.838,189.344 210.549,188.552 206.215,188.023 C204.048,187.764 201.882,187.519 199.626,187.319 L196.43,187.051 L194.875,186.93 L193.04,186.856 C188.112,186.656 183.094,186.861 178.128,187.513 L158.931,164.244 C174.169,138.766 161.316,93.871 126.884,58.236 C102.288,32.775 71.098,16.96 45.493,16.96 C32.71,16.96 21.86,20.914 14.117,28.395 C2.356,39.759 -1.31,57.96 3.797,79.646 C8.804,100.908 21.687,123.095 40.069,142.123 C64.67,167.586 95.859,183.402 121.465,183.402 C127.061,183.402 132.256,182.599 137.013,181.119 L150.214,197.119 C146.977,199.016 143.945,201.136 141.14,203.398 C134.35,208.945 128.82,215.195 124.419,221.462 C120.005,227.744 116.577,233.987 113.776,239.826 L113.771,239.84 C98.201,237.487 47.383,234.284 27.034,287.74 C17.051,313.983 19.56,340.029 33.92,359.211 C49.822,380.45 78.688,391.78 116.15,391.78 C116.519,391.78 116.9,391.758 117.267,391.757 L33.625,517.309 C29.389,523.664 31.112,532.245 37.464,536.476 C39.822,538.047 42.484,538.799 45.114,538.799 C49.584,538.799 53.973,536.635 56.633,532.636 L123.477,432.299 L126.991,455.9 L137.088,453.991 C157.167,448.26 247.981,435.73 307.602,435.73 L316.857,435.73 L316.817,425.504 C316.783,417.416 315.854,407.034 314.519,396.492 L402.932,503.562 C405.665,506.874 409.619,508.537 413.602,508.537 C416.701,508.537 419.817,507.479 422.392,505.352 C428.281,500.494 429.119,491.757 424.257,485.867" fill="#FF5733" />
                        </g>
                    </svg>

                    <Link className="text-3xl font-bold leading-none" to='/'>
                        Quince
                    </Link>
                </div>
                <div className="lg:hidden">
                    <button className="navbar-burger flex items-center text-gray-600 dark:text-gray-300 p-3">
                        <svg
                            className="block h-4 w-4 fill-current"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <title>Mobile menu</title>
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                        </svg>
                    </button>
                </div>
                <ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:items-center lg:w-auto lg:space-x-6">
                    <li>
                        <Link
                            className=" text-orange-500 hover:text-orange-600 dark:text-gray-300"
                            to='/'
                        >
                            Home
                        </Link>
                    </li>
                    <li className="text-gray-300">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            stroke="currentColor"
                            className="w-4 h-4 current-fill"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                            />
                        </svg>
                    </li>

                    <li>
                        <Link
                            className=" text-gray-500 hover:text-orange-600 dark:text-gray-300"
                            to='/blog'
                        >
                            Blog
                        </Link>
                    </li>

                </ul>
                <div className="space-x-2 hidden lg:block">
                    <Link to='/login'>
                        <button className="rounded-md border border-orange-600 px-3.5 py-1.5 text-base font-semibold leading-7 text-orange-600 hover:bg-orange-400 ">
                            Login
                        </button>
                    </Link>
                    <Link to='/register'>
                        <button className="rounded-md bg-orange-500 px-3.5 py-1.5 text-base font-semibold leading-7 text-white hover:bg-orange-400 ">
                            SignUp
                        </button>
                    </Link>
                </div>
            </nav>
        </div>
    );
};

export default Header;