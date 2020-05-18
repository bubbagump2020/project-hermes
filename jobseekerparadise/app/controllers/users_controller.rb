class UsersController < ApplicationController

    def create
        user = User.new(user_params)
        if (user.save)
            # payload = { user_id: user.id }
            # token = encode_token(payload)
            render json: { user: user, success: true }
        else
            render json: { message: "User not created", success: false, error: user.errors.full_messages }
        end
    end

    def show
        user = User.find(params[:id])
        if user
            render json: user
        else
            render json: { mesage: "User does not exist" }
        end
    end

    def update
        user = User.exists?(params[:id])
        if user
            user = User.find(params[:id])
            if user.update(user_params)
                render json: user
            else
                render json: "Failed to update user"
            end
        else
            render json: "User Not found"
        end
    end

    def destroy
        user = User.find(params[:id])
        user.destroy
        render json: { message: "User deleted" }
    end

    private

    def user_params
        params.permit(:username, :email, :password)
    end
end
