const mtTheme = {
    drawer: {
        defaultProps: {
            size: 600,
            overlay: true,
            placement: 'left',
            overlayProps: undefined,
            className: '',
            dismiss: {
                enabled: false,
                escapeKey: false,
                referencePress: false,
                referencePressEvent: false,
                outsidePress: true,
                outsidePressEvent: 'mousedown',
                ancestorScroll: true
            },
            onClose: undefined,
            transition: {
                type: 'tween',
                duration: 0.3
            }
        },
        styles: {
            base: {
                drawer: {
                    position: 'fixed',
                    zIndex: 'z-[22]',
                    pointerEvents: 'pointer-events-auto',
                    backgroundColor: 'bg-white',
                    boxSizing: 'box-border',
                    width: 'w-full',
                    boxShadow: 'shadow-2xl shadow-blue-gray-900/10'
                },
                overlay: {
                    position: 'absolute',
                    inset: 'inset-0',
                    width: 'w-full',
                    height: 'h-full',
                    // pointerEvents: 'pointer-events-auto',
                    zIndex: 'z-[20]',
                    backgroundColor: 'bg-gray-900',
                    backgroundOpacity: 'bg-opacity-30',
                    backdropBlur: 'backdrop-blur-sm'
                }
            }
        }
    },
    dialog: {
        defaultProps: {
            size: 'md',
            dismiss: {},
            animate: {
                unmount: {},
                mount: {}
            },
            className: ''
        },
        valid: {
            sizes: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl']
        },
        styles: {
            base: {
                backdrop: {
                    display: 'grid',
                    placeItems: 'place-items-center',
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: 'w-screen',
                    height: 'h-screen',
                    backgroundColor: 'bg-gray-900',
                    backgroundOpacity: 'bg-opacity-30',
                    backdropFilter: 'backdrop-blur-sm'
                },
                container: {
                    position: 'relative',
                    bg: 'bg-white',
                    m: 'm-4',
                    borderRadius: 'rounded-lg',
                    boxShadow: 'shadow-2xl',
                    color: 'text-blue-gray-500',
                    fontSmoothing: 'antialiased',
                    fontFamily: 'font-sans',
                    fontSize: 'text-base',
                    fontWeight: 'font-light',
                    lineHeight: 'leading-relaxed'
                }
            },
            sizes: {
                xs: {
                    width: 'w-full md:w-3/5 lg:w-2/5 2xl:w-1/4',
                    minWidth: 'min-w-[80%] md:min-w-[60%] lg:min-w-[40%] 2xl:min-w-[25%]',
                    maxWidth: 'max-w-[80%] md:max-w-[60%] lg:max-w-[40%] 2xl:max-w-[25%]'
                },
                sm: {
                    width: 'w-full md:w-2/3 lg:w-2/4 2xl:w-1/3',
                    minWidth: 'min-w-[80%] md:min-w-[66.666667%] lg:min-w-[50%] 2xl:min-w-[33.333333%]',
                    maxWidth: 'max-w-[80%] md:max-w-[66.666667%] lg:max-w-[50%] 2xl:max-w-[33.333333%]'
                },
                md: {
                    width: 'w-full md:w-3/4 lg:w-3/5 2xl:w-2/5',
                    minWidth: 'min-w-[90%] md:min-w-[75%] lg:min-w-[60%] 2xl:min-w-[40%]',
                    maxWidth: 'max-w-[90%] md:max-w-[75%] lg:max-w-[60%] 2xl:max-w-[40%]'
                },
                lg: {
                    width: 'w-full md:w-5/6 lg:w-3/4 2xl:w-3/5',
                    minWidth: 'min-w-[90%] md:min-w-[83.333333%] lg:min-w-[75%] 2xl:min-w-[60%]',
                    maxWidth: 'max-w-[90%] md:max-w-[83.333333%] lg:max-w-[75%] 2xl:max-w-[60%]'
                },
                xl: {
                    width: 'w-full md:w-5/6 2xl:w-3/4',
                    minWidth: 'min-w-[95%] md:min-w-[83.333333%] 2xl:min-w-[75%]',
                    maxWidth: 'max-w-[95%] md:max-w-[83.333333%] 2xl:max-w-[75%]'
                },
                xxl: {
                    display: 'flex',
                    flexDirection: 'flex-col',
                    width: 'w-screen',
                    minWidth: 'min-w-[100vw]',
                    maxWidth: 'max-w-[100vw]',
                    height: 'h-screen',
                    minHeight: 'min-h-[100vh]',
                    maxHeight: 'max-h-[100vh]',
                    m: 'm-0',
                    borderRadius: 'rounded-none'
                }
            }
        }
    }
}
const mtTheme2 = {
    drawer: {
        defaultProps: {
            size: 800,
            overlay: true,
            placement: 'left',
            overlayProps: undefined,
            className: '',
            dismiss: {
                enabled: false,
                escapeKey: false,
                referencePress: false,
                referencePressEvent: false,
                outsidePress: true,
                outsidePressEvent: 'mousedown',
                ancestorScroll: true
            },
            onClose: undefined,
            transition: {
                type: 'tween',
                duration: 0.3
            }
        },
        styles: {
            base: {
                drawer: {
                    position: 'fixed',
                    zIndex: 'z-[22]',
                    pointerEvents: 'pointer-events-auto',
                    backgroundColor: 'bg-white',
                    boxSizing: 'box-border',
                    width: 'w-full',
                    boxShadow: 'shadow-2xl shadow-blue-gray-900/10'
                },
                overlay: {
                    position: 'absolute',
                    top: '0',
                    bottom: '0',
                    right: '0',
                    left: '0',
                    inset: 'inset-0',
                    width: 'w-screen',
                    height: 'h-screen',
                    // pointerEvents: 'pointer-events-auto',
                    zIndex: 'z-[20]',
                    backgroundColor: 'bg-gray-900',
                    backgroundOpacity: 'bg-opacity-30',
                    backdropBlur: 'backdrop-blur-sm'
                }
            }
        }
    }
}
const mtThemeLayer2 = {
    drawer: {
        defaultProps: {
            size: 500,
            overlay: true,
            placement: 'left',
            overlayProps: undefined,
            className: '',
            dismiss: {
                enabled: false,
                escapeKey: false,
                referencePress: false,
                referencePressEvent: false,
                outsidePress: true,
                outsidePressEvent: 'mousedown',
                ancestorScroll: true
            },
            onClose: undefined,
            transition: {
                type: 'tween',
                duration: 0.3
            }
        },
        styles: {
            base: {
                drawer: {
                    position: 'fixed',
                    zIndex: 'z-[32]',
                    pointerEvents: 'pointer-events-auto',
                    backgroundColor: 'bg-white',
                    boxSizing: 'box-border',
                    width: 'w-full',
                    boxShadow: 'shadow-2xl shadow-blue-gray-900/10'
                },
                overlay: {
                    position: 'absolute',
                    inset: 'inset-0',
                    width: 'w-full',
                    height: 'h-full',
                    // pointerEvents: 'pointer-events-auto',
                    zIndex: 'z-[30]',
                    backgroundColor: 'bg-gray-900',
                    backgroundOpacity: 'bg-opacity-30',
                    backdropBlur: 'backdrop-blur-sm'
                }
            }
        }
    }
}
export default mtTheme
export { mtTheme2, mtThemeLayer2 }
