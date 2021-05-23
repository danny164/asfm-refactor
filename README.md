### Refactor V1.4

### Quick Import

`import moment from 'moment';`
`import 'moment/locale/vi';`

`import { useSnackbar } from 'notistack';`
`const { enqueueSnackbar } = useSnackbar();`

`import { useDispatch, useSelector } from 'react-redux';`

`const dispatch = useDispatch();`  
`const filter = useSelector((state) => state.filter);`

`const action = changeFilter(xxx);`
`dispatch(action);`
