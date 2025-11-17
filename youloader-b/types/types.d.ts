interface UserData {
    first_name: string
    last_name: string
    username: string
    email: string
    password: string
}

type UserLogin = {
    identifier: sting //either email or username
    password: string
}
