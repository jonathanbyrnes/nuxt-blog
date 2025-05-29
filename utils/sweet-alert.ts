import Swal from 'sweetalert2'
export function promptUser(message: string) {
    return new Promise((resolve, reject) => {

        Swal.fire({
            title: 'Are you sure?',
            text: message,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Confirm'
        })
            .then((result) => {
                if (result.isConfirmed) {
                    resolve(result.isConfirmed)
                }
                reject()
            })
    })

}