import React from 'react'
import {colors} from '../../styles/vars'

export const Logo = (props) =>
  <svg className={props.className} xmlns="http://www.w3.org/2000/svg" width="136" height="60">
    <path d="M 69.014 21.185 C 67.572 21.191 66.178 20.667 65.098 19.713 L 66.297 18.276 C 67.051 18.969 68.031 19.367 69.056 19.395 C 69.884 19.395 70.388 19.067 70.388 18.527 L 70.388 18.495 C 70.388 17.983 70.07 17.721 68.528 17.323 C 66.668 16.852 65.465 16.336 65.465 14.508 L 65.465 14.48 C 65.465 12.809 66.811 11.69 68.699 11.69 C 69.944 11.67 71.157 12.084 72.129 12.862 L 71.08 14.39 C 70.391 13.85 69.553 13.532 68.678 13.479 C 67.899 13.479 67.493 13.828 67.493 14.281 L 67.493 14.309 C 67.493 14.916 67.888 15.112 69.482 15.52 C 71.356 16.008 72.412 16.678 72.412 18.286 L 72.412 18.31 C 72.412 20.142 71.014 21.167 69.021 21.167 M 76.817 21.052 L 76.817 11.84 L 83.785 11.84 L 83.785 13.643 L 78.835 13.643 L 78.835 15.513 L 83.191 15.513 L 83.191 17.313 L 78.835 17.313 L 78.835 19.249 L 83.848 19.249 L 83.848 21.052 Z M 92.648 21.213 C 91.38 21.239 90.156 20.748 89.258 19.853 C 88.361 18.958 87.868 17.737 87.893 16.472 L 87.893 16.448 C 87.87 15.17 88.371 13.938 89.28 13.038 C 90.189 12.137 91.427 11.647 92.707 11.679 C 94.07 11.613 95.395 12.131 96.35 13.102 L 95.057 14.592 C 94.438 13.948 93.591 13.572 92.697 13.545 C 91.137 13.545 90.015 14.836 90.015 16.416 L 90.015 16.444 C 90.015 18.021 91.113 19.34 92.697 19.34 C 93.746 19.34 94.396 18.917 95.123 18.258 L 96.417 19.563 C 95.48 20.659 94.091 21.267 92.648 21.213 M 107.702 16.448 C 107.732 15.689 107.45 14.951 106.922 14.404 C 106.395 13.857 105.666 13.548 104.905 13.549 C 104.151 13.546 103.429 13.852 102.906 14.394 C 102.383 14.936 102.105 15.668 102.136 16.42 L 102.136 16.448 C 102.108 17.206 102.39 17.943 102.918 18.489 C 103.445 19.035 104.173 19.344 104.933 19.343 C 105.687 19.346 106.41 19.04 106.933 18.498 C 107.456 17.956 107.734 17.224 107.702 16.472 Z M 104.905 21.213 C 102.056 21.213 100.011 19.092 100.011 16.472 L 100.011 16.448 C 100.01 15.158 100.533 13.923 101.461 13.024 C 102.388 12.126 103.641 11.64 104.933 11.679 C 107.783 11.679 109.828 13.8 109.828 16.42 L 109.828 16.448 C 109.828 17.737 109.304 18.971 108.377 19.869 C 107.449 20.767 106.197 21.251 104.905 21.213 M 120.757 21.052 L 116.285 15.195 L 116.285 21.052 L 114.278 21.052 L 114.278 11.84 L 116.152 11.84 L 120.481 17.512 L 120.481 11.84 L 122.484 11.84 L 122.484 21.052 Z M 133.731 16.448 C 133.773 15.695 133.492 14.961 132.958 14.428 C 132.424 13.896 131.688 13.615 130.934 13.657 L 129.364 13.657 L 129.364 19.214 L 130.934 19.214 C 132.598 19.214 133.731 18.094 133.731 16.462 L 133.731 16.437 Z M 130.934 21.052 L 127.333 21.052 L 127.333 11.84 L 130.934 11.84 C 133.839 11.84 135.829 13.828 135.829 16.42 L 135.829 16.448 C 135.829 19.04 133.825 21.052 130.934 21.052 M 70.056 37.019 C 68.791 37.038 67.574 36.544 66.681 35.65 C 65.789 34.756 65.298 33.539 65.322 32.278 L 65.322 32.25 C 65.3 30.973 65.801 29.742 66.71 28.842 C 67.619 27.943 68.856 27.452 70.136 27.485 C 71.495 27.419 72.818 27.937 73.769 28.908 L 72.479 30.394 C 71.859 29.75 71.01 29.374 70.115 29.348 C 68.559 29.348 67.437 30.638 67.437 32.219 L 67.437 32.243 C 67.437 33.823 68.531 35.142 70.115 35.142 C 71.164 35.142 71.818 34.72 72.545 34.06 L 73.835 35.365 C 72.893 36.465 71.497 37.072 70.049 37.012 M 83.89 36.858 L 83.89 33.16 L 80.142 33.16 L 80.142 36.858 L 78.111 36.858 L 78.111 27.645 L 80.142 27.645 L 80.142 31.291 L 83.89 31.291 L 83.89 27.645 L 85.921 27.645 L 85.921 36.858 Z M 94.861 30.007 L 93.634 32.993 L 96.081 32.993 Z M 97.658 36.851 L 96.812 34.786 L 92.907 34.786 L 92.064 36.851 L 89.991 36.851 L 93.948 27.565 L 95.822 27.565 L 99.78 36.844 Z M 110.328 36.858 L 105.856 31.001 L 105.856 36.858 L 103.853 36.858 L 103.853 27.645 L 105.723 27.645 L 110.052 33.317 L 110.052 27.645 L 112.058 27.645 L 112.058 36.858 Z M 121.246 37.019 C 119.982 37.038 118.764 36.544 117.872 35.65 C 116.979 34.756 116.489 33.539 116.512 32.278 L 116.512 32.25 C 116.49 30.975 116.99 29.745 117.897 28.846 C 118.803 27.947 120.038 27.455 121.316 27.485 C 122.678 27.417 124.003 27.935 124.956 28.908 L 123.666 30.394 C 123.046 29.75 122.197 29.374 121.302 29.348 C 119.746 29.348 118.624 30.638 118.624 32.219 L 118.624 32.243 C 118.624 33.823 119.718 35.142 121.302 35.142 C 122.351 35.142 123.005 34.72 123.729 34.06 L 125.022 35.365 C 124.08 36.465 122.684 37.072 121.236 37.012 M 129.301 36.858 L 129.301 27.645 L 136.266 27.645 L 136.266 29.445 L 131.319 29.445 L 131.319 31.315 L 135.675 31.315 L 135.675 33.119 L 131.319 33.119 L 131.319 35.055 L 136.332 35.055 L 136.332 36.858 Z M 70.056 52.821 C 68.792 52.841 67.574 52.348 66.681 51.455 C 65.789 50.562 65.298 49.345 65.322 48.084 L 65.322 48.056 C 65.299 46.778 65.8 45.547 66.709 44.647 C 67.618 43.747 68.856 43.257 70.136 43.291 C 71.495 43.225 72.818 43.743 73.769 44.714 L 72.479 46.2 C 71.859 45.555 71.01 45.179 70.115 45.153 C 68.559 45.153 67.437 46.444 67.437 48.024 L 67.437 48.049 C 67.437 49.629 68.531 50.944 70.115 50.944 C 71.164 50.944 71.818 50.526 72.545 49.866 L 73.835 51.167 C 72.894 52.269 71.498 52.876 70.049 52.814 M 83.89 52.664 L 83.89 48.963 L 80.142 48.963 L 80.142 52.664 L 78.111 52.664 L 78.111 43.448 L 80.142 43.448 L 80.142 47.097 L 83.89 47.097 L 83.89 43.448 L 85.921 43.448 L 85.921 52.664 Z M 94.637 52.807 C 92.155 52.807 90.638 51.412 90.638 48.715 L 90.638 43.448 L 92.669 43.448 L 92.669 48.68 C 92.669 50.18 93.42 50.955 94.662 50.955 C 95.903 50.955 96.654 50.205 96.654 48.747 L 96.654 43.448 L 98.686 43.448 L 98.686 48.649 C 98.686 51.44 97.116 52.807 94.637 52.807 M 109.048 46.594 C 109.048 45.726 108.443 45.279 107.454 45.279 L 105.433 45.279 L 105.433 47.927 L 107.492 47.927 C 108.482 47.927 109.048 47.397 109.048 46.622 Z M 109.01 52.681 L 107.031 49.734 L 105.433 49.734 L 105.433 52.681 L 103.402 52.681 L 103.402 43.448 L 107.625 43.448 C 109.8 43.448 111.121 44.595 111.121 46.49 L 111.121 46.517 C 111.183 47.805 110.372 48.974 109.143 49.371 L 111.398 52.664 Z M 119.918 52.821 C 118.653 52.842 117.434 52.349 116.541 51.456 C 115.648 50.563 115.157 49.345 115.18 48.084 L 115.18 48.056 C 115.157 46.778 115.658 45.547 116.567 44.647 C 117.476 43.747 118.715 43.257 119.995 43.291 C 121.357 43.222 122.684 43.74 123.638 44.714 L 122.344 46.2 C 121.726 45.556 120.878 45.18 119.984 45.153 C 118.425 45.153 117.306 46.444 117.306 48.024 L 117.306 48.049 C 117.306 49.629 118.4 50.944 119.984 50.944 C 121.033 50.944 121.683 50.526 122.41 49.866 L 123.704 51.167 C 122.764 52.27 121.367 52.88 119.918 52.821 M 133.745 52.664 L 133.745 48.963 L 130.001 48.963 L 130.001 52.664 L 127.966 52.664 L 127.966 43.448 L 130.001 43.448 L 130.001 47.097 L 133.745 47.097 L 133.745 43.448 L 135.776 43.448 L 135.776 52.664 Z" fill={props.light ? 'hsl(0,0%, 100%)' : colors.darkPrimary} />
    <path d="M 43.398 11.428 C 45.51 12.842 47.367 14.603 48.89 16.636 C 49.242 17.078 49.628 17.492 50.044 17.874 C 50.296 18.108 51.292 17.833 52.187 17.365 C 52.862 17.016 53.543 16.573 53.439 16.04 C 53.194 14.798 50.46 12.098 48.572 10.409 C 33.301 -3.237 8.534 4.828 4.335 24.816 C 1.227 39.621 12.149 54.572 27.347 56.041 C 39.136 57.178 48.177 52.594 54.243 42.359 C 55.071 40.964 55.991 40.542 57.089 41.152 C 58.186 41.763 58.319 42.785 57.554 44.205 C 48.401 61.186 24.959 65.32 10.439 52.517 C 1.196 44.365 -2.276 32.027 1.507 20.735 C 5.377 9.185 15.789 0.903 27.994 0.091 C 40.887 -0.767 50.764 4.451 57.445 15.541 C 58.599 17.456 58.015 17.888 56.214 19.217 C 54.464 20.465 52.474 21.336 50.369 21.778 C 48.638 22.179 48.03 22.259 47.121 20.731 C 45.926 18.726 44.377 16.953 42.548 15.499 L 42.415 15.412 C 39.094 13.203 35.661 10.922 31.144 10.922 C 27.49 10.922 24.274 11.892 22.096 13.65 C 20.113 15.23 19.023 17.208 19.023 19.231 C 19.023 21.16 19.83 22.58 21.819 24.15 C 24.071 25.685 27.315 26.791 31.514 27.436 L 31.651 27.436 C 35.58 27.979 39.374 29.247 42.838 31.176 C 45.938 33.232 47.832 36.672 47.911 40.385 C 47.911 43.838 46.163 46.912 42.73 49.51 C 39.435 51.942 35.427 53.22 31.329 53.145 C 27.787 53.1 22.638 52.28 18.488 49.797 C 15.691 48.129 13.083 45.356 11.674 43.413 C 11.034 42.534 10.726 41.477 11.646 40.709 C 12.89 39.663 14.023 40.49 14.411 40.803 C 16.016 42.579 18.012 44.864 20.355 46.197 C 24.008 48.29 28.553 49.256 31.325 49.256 C 34.801 49.256 38.104 48.192 40.359 46.353 C 42.688 44.801 44.02 42.624 44.02 40.371 C 43.926 38.069 42.989 36.464 40.562 34.441 C 38.548 32.913 35.189 31.744 30.577 30.97 L 30.423 30.897 L 30.34 30.869 C 26.546 30.171 22.648 29.271 19.897 27.303 C 16.844 25.535 15.023 22.524 15.023 19.245 C 15.023 15.966 16.809 12.712 19.918 10.409 C 22.84 8.4 26.721 7.336 31.14 7.336 C 36.217 7.301 40.265 9.276 43.398 11.428 Z" fill={props.light ? 'hsl(0, 0%, 100%)' : colors.primary } />
  </svg>