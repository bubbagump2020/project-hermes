class UsersController < ApplicationController
    def index
        users = User.all
        render json: users
    end

    def new
        user = User.new(user_params)
        if (user.save)
            # Payload 
            # Token
            render json: { user: user, created?: true}
        else
            render json: { message: "User not created", created?: false}
        end
    end

    private

    def user_params
        params.require(:user).permit(:username, :email, :password)
    end
end
