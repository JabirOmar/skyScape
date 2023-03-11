class PassengersController < ApplicationController

    def index
        passengers = Passenger.all
        render json: passengers, except: [:created_at, :updated_at]
    end

    def create
        passenger = Passenger.create([passenger_params])
        render json: passenger, status: :created
    end

    def show
        passenger = Passenger.find_by(id: params[:id])
        if passenger
            render json: passenger, except: [:created_at, :updated_at]
        else
            render json: {error: "Paasenger not found"}, status: 404
        end
    end

    def destroy
        passenger = Passenger.find_by(id: params[:id])
        if passenger
            passenger.destroy
            head 204
        else
            render json: { error: " content is not founded" }, status: 404
        end
    end

    private

    def passenger_params
        params.permit(:departure, :destination, :firstName, :middleName, :lastName, :nationality, :gender, :title, :age, :departureDate, :returnDate)
    end
    
end
