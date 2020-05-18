class AuthenticationsController < ApplicationController

    def login
        @user = User.find_by_username(user_params[:username])
        if @user != nil && @user.authenticate(user_params[:password])
            payload = { user_id: @user.id }
            token = encode_token(payload)
            render json: {
                user: @user,
                success: true,
                jwt: token,
                message: "Welcome back #{@user.username}"
            }
        else
            render json: {
                success: false,
                message: "Wrong username or password"
            }
        end
    end

    private

    def user_params
        params.permit(:username, :password)
    end

end