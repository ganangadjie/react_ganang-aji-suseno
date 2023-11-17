# 14_React-Hook

1. React Hooks
    - Merupakan fitur baru di React 16.8. Dengan Hooks, kita dapat menggunakan state dan fitur React yang lain tanpa perlu menulis sebuah kelas.
    - Hooks pada React
        - Hooks dasar
            - useState
            - useEffect
            - useContext
        - Hooks tambahan
            - useReducer
            - useCallback
            - useMemo
            - useRef
            - useImperativeHandle
            - useLayoutEffect
            - useDebugValue
2. Aturan pada Hooks
    - Hanya panggil Hooks di tingkat atas
        - Jangan memanggil Hooks dari dalam loops, conditions, atau nested functions
    - Hanya panggil Hooks dari fungsi-fungsi React
        - Jangan memanggil Hooks dari fungsi-fungsi JavaScript biasa. Kita dapat :
            - Memanggil Hooks dari komponen-komponen fungsi React.
            - Memanggil Hooks dari custom Hooks.
3. Custom Hooks
    - Membuat Hook kita sendiri memungkinkan kita mengekstrak komponen logika ke fungsi yang dapat digunakan lagi

## RECOMMIT
