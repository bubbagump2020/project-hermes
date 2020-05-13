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

    def show
        user = User.find_by_username(params[:username])
        if user
            render json: user
        else
            render json: { mesage: "User does not exist" }
        end
    end

    def destroy
        user = User.find_by_username(params[:username])
        user.destroy
        render json: { message: "User deleted" }
    end

    private

    def user_params
        params.require(:user).permit(:username, :email, :password_digest)
    end
end
