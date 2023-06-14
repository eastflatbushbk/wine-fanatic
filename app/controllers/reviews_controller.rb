class ReviewsController < ApplicationController
    skip_before_action :confirm_authentication, only: [:index, :show, :create]
    before_action :find_opinion, only: [:update, :destroy]

       
    
    def index
        render json: Review.all , status: :ok
    end

    def show
        review = Review.find(params[:id])
        render json: review, status: :ok
    end

    def create
        review = current_user.reviews.create!(review_params)
        render json: review, status: :created
    end 

    def update
        @review.update!(review_params)
        render json: @review, status: :ok
    end

    def destroy
        @review.destroy!
        head :no_content
    end

    private 

    def find_review
        @review = current_user.reviews.find_by_id(params[:id])
        if !@review
            render json:{ error: "Not authorized" }, status: :unauthorized
        end
    end

    def review_params
        params.permit(:comment, :wine_id)
    end
end
