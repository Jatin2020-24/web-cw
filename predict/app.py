from flask import Flask, request, jsonify
import pickle

app = Flask(__name__)


# prediction function
def ValuePredictor(to_predict_list):
    loaded_model = pickle.load(open("model_pickle.pkl", "rb"))
    result = loaded_model.predict(to_predict_list)
    return result[0]


def crop_map(predicted_value):
    dict = {0: 'apple',
            1: 'banana',
            2: 'blackgram',
            3: 'chickpea',
            4: 'coconut',
            5: 'coffee',
            6: 'cotton',
            7: 'grapes',
            8: 'jute',
            9: 'kidneybeans',
            10: 'lentil',
            11: 'maize',
            12: 'mango',
            13: 'mothbeans',
            14: 'mungbean',
            15: 'muskmelon',
            16: 'orange',
            17: 'papaya',
            18: 'pigeonpeas',
            19: 'pomegranate',
            20: 'rice',
            21: 'watermelon'}
    return dict[predicted_value]


@app.route('/result', methods=['POST'])
def result():
    if request.method == 'POST':
        to_predict_list = request.form['hello']
        to_predict_list = list(map(float, to_predict_list.split(',')))
        d2_lst = [to_predict_list]
        result = ValuePredictor(d2_lst)
        return jsonify({"predicted_crop": crop_map(int(result))})


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=80)
